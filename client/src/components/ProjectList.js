import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProjectFinder from "../apis/ProjectFinder";
import { ProjectsContext } from "../context/ProjectsContext";
import "./projectList.css"


const ProjectList = (props) => {

  const { projects, setProjects } = useContext(ProjectsContext);
  // eslint-disable-next-line
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectFinder.get('/api/v1')
        setProjects(response.data.data.projects)
      } catch (error) {}
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <h2 id="projectListTitle">Projects</h2>
        <div>
        {projects && 
          projects.map(project => {
            return (

              <div id="projectComponent" key={project.id}>
                <div id="projectComponentHeader" >
                  <a href={project.link}>
                    <div id="projectComponentIconTitle">
                      <div id="projectComponentIcon" className={project.icon}></div>
                      <div id="projectComponentTitle">{project.title}</div>
                    </div>
                  </a>
                  <div id="projectComponentDesc">{project.description}</div>
                </div>
                <a id="projectBtn" href={project.source_code}>
                  <button type="submit" value="Source" className="btn btn-outline-info src-btn">Source</button>
                </a>     
              </div>
        )})}
        </div>
      <div id="project-list-btn">
        <Link to="/projects" class="btn btn-info">All Projects</Link>
      </div>  
      
    </div>

  )
}

export default ProjectList;