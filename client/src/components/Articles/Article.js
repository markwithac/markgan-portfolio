import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DbContext } from "../../context/DbContext";
import ProjectFinder from "../../apis/ProjectFinder";
import "./article.css"


const Article = (props) => {

  const { article_id } = useParams();
  const { selectedArticle, setSelectedArticle } = useContext(
    DbContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectFinder.get(`/api/v1/articles/${article_id}`)
        setSelectedArticle(response.data.data.article[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
        {selectedArticle && (
          <div className="article-wrapper">
            <div className="article-header">{selectedArticle.title}</div>
            <div className="article-date">
              {new Date(`${selectedArticle.posting_date.slice(5,7)}/${selectedArticle.posting_date.slice(8,10)}/${selectedArticle.posting_date.slice(0,4)}`).toDateString().slice(4)} By <b>{selectedArticle.author}</b>
            </div>
            <div className="article-tags">{selectedArticle.tags.map(tag => { 
              return (
                <div className="tag btn btn-secondary btn-sm">{tag}</div>
              ) 
              })}
            </div>
            <div className="article-body">{selectedArticle.body}</div>
          </div>
        ) }
    </div>

  )
}

export default Article;