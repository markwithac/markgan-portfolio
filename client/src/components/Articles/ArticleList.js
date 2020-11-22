import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProjectFinder from "../../apis/ProjectFinder";
import { DbContext } from "../../context/DbContext"
import "./articleList.css"


const ArticleList = (props) => {

  const { articles, setArticles } = useContext(DbContext);
  // eslint-disable-next-line
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectFinder.get('/api/v1')
        setArticles(response.data.data.articles)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <div className="list-header">
        <h2 className="list-title">Articles</h2>
        <div className="list-btn">
          <Link to="/articles" className="btn btn-info btn-sm project-btn">All Articles</Link>
        </div>  
      </div>
        <div>
        {articles && 
          articles.map(article => {
            let date = new Date(`${article.posting_date.slice(5,7)}/${article.posting_date.slice(8,10)}/${article.posting_date.slice(0,4)}`)
            console.log(date)
            return (
              <div className="articles-component" key={article.id}>
                <Link className="articles-link" to={`/articles/${article.article_id}`}>
                  <div className="articles-date">{date.toDateString().slice(4)}</div>
                  <div className="articles-title">{article.title}</div>
                </Link>
              </div>   
        )})}
        </div>
      
    </div>

  )
}

export default ArticleList;