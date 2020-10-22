import React, { useState, useContext }from 'react'
import ProjectFinder from "../../apis/ProjectFinder"
import { ProjectsContext } from '../../context/ProjectsContext';

const AdminAddProject = () => {

  const { addProject } = useContext(ProjectsContext) 

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [url, setUrl] = useState("")
  const [link, setLink] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProjectFinder.put(`/api/v1/admin/addProject/`, {
        title,
        description: desc,
        url,
        link,
      })
      addProject(response.data.data.project)
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
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Source Code Link</label>
          <input 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Example: http://github/markwithac/project"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Website Link (if available)</label>
          <input 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Example: http://github/markwithac/project"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        {/* ADD WEBSITE LINK FIELD */}

        <button 
          type="submit" 
          className="btn btn-outline-info btn-lg"
          onClick={handleSubmit}
          >Add Project</button>
      </form>
    </div>
  )
};

export default AdminAddProject;
