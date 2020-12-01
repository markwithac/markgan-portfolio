import React, { useState, useContext }from 'react'
import ProjectFinder from "../../apis/ProjectFinder"
import { DbContext } from '../../context/DbContext';
import "./admin.css"

const AdminAddArticle = () => {

  const { addArticle } = useContext(DbContext) 

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [author_link, setAuthorUrl] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProjectFinder.put(`/api/v1/admin/addArticle/`, {
        title,
        author,
        author_link,
        body,
        tags
      })
      addArticle(response.data.data.article)
    } catch (error) {
      
    }
  }

  return (
    <div className="container admin">
      <form action="post">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Super Cool App" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Author</label>
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Author Link</label>
          <input 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Example: /about"
            value={author_link}
            onChange={(e) => setAuthorUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <input 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Example: http://github/markwithac/project"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Tags</label>
          <input 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="React"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        {/* ADD WEBSITE LINK FIELD */}

        <button 
          type="submit" 
          className="btn btn-outline-info btn-lg"
          onClick={handleSubmit}
          >
          Add Project
        </button>
      </form>
    </div>
  )
};

export default AdminAddArticle;
