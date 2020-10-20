import React, { useEffect, useContext } from "react";
import ProjectFinder from "../apis/ProjectFinder";
import { ProjectsContext } from "../context/ProjectsContext";


const ProjectList = (props) => {

  const { projects, setProjects } = useContext(ProjectsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectFinder.get('/')
        setProjects(response.data.data.projects)
      } catch (error) {}
    }
    fetchData();
  }, [])

  return (
    <div className="container">
      <h2 id="projectListTitle">Projects</h2>
        <div>
        {projects && 
          projects.map(project => {
            return (
              <div id="projectComponent" key={project.id}>
                <div id="projectComponentHeader">
                  <div id="projectComponentIconTitle">
                    <span className="icon">🏺</span>
                    <div id="projectComponentTitle">{project.title}</div>
                  </div>
                  <div id="projectComponentDesc">{project.description}</div>
                </div>
                <a id="projectBtn" href={project.url}>
                  <button type="submit" value="Source" className="btn btn-outline-info">Source</button>
                </a>     
              </div>
        )})}
        </div>
    </div>

  )
}

export default ProjectList;