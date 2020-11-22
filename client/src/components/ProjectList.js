import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProjectFinder from "../apis/ProjectFinder";
import { DbContext } from "../context/DbContext";
import "./projectList.css"


const ProjectList = (props) => {

  const { projects, setProjects } = useContext(DbContext);
  // eslint-disable-next-line
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectFinder.get('/api/v1')
        setProjects(response.data.data.projects)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <div id="project-list-header">
        <h2 id="projectListTitle">Projects</h2>
        <div id="project-list-btn">
          <Link to="/projects" class="btn btn-info btn-sm project-btn">All Projects</Link>
        </div>  
      </div>
        <div>
        {projects && 
          projects.map(project => {
            return (

              <div id="projectComponent" key={project.id}>
                <a className="project-link" href={project.link}>
                  <div id="projectComponentHeader">
                    <div id="projectComponentIconTitle">
                      <div id="projectComponentIcon" className={project.icon}></div>
                      <div id="projectComponentTitle">{project.title}</div>
                    </div>
                    <div id="projectComponentDesc">{project.description}</div>
                  </div>
                </a>
                <a id="projectBtn" href={project.source_code}>
                  <button type="submit" value="Source" className="btn btn-outline-info src-btn">Source</button>
                </a>     
              </div>
        )})}
        </div>
      
    </div>

  )
}

export default ProjectList;