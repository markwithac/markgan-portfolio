import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProjectFinder from "../../apis/ProjectFinder";
import { DbContext } from '../../context/DbContext';
import "./admin.css"


const AdminArticleList = (props) => {

  const { articles, setArticles } = useContext(DbContext);
  // eslint-disable-next-line
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectFinder.get('/api/v1')
        setArticles(response.data.data.articles)
      } catch (error) {}
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div id="adminContainer">
      <div>
        <input placeholder="Search"></input>
        <Link to="" className="btn btn-primary btn-sm">Add Article</Link>
      </div>
      <table className="table table-bordered table-sm">
        <thead>
          <tr className="table-active">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Author Link</th>
            <th scope="col">Body</th>
            <th scope="col">Tags</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
            {articles && 
              articles.map(article => {
                return (
                  <tr>
                    <td>{article.article_id}</td>
                    <td>{article.title}</td>
                    <td>{article.author}</td>
                    <td>{article.author_link}</td>
                    <td>{article.body.slice(0,20)}...</td>
                    <td>{article.tags.toString()}</td>
                    <td>
                      <form>
                        <input type="submit" className="form-control btn-warning" id="exampleInputEmail1" aria-describedby="emailHelp" value="Edit"></input>
                      </form>
                    </td>
                    <td>
                      <form>
                        <input type="submit" className="form-control btn-danger" id="exampleInputEmail1" aria-describedby="emailHelp" value="Delete"></input>
                      </form>
                    </td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </div>

  )
}

export default AdminArticleList;