import React, { useEffect, useContext } from "react";
import ProjectFinder from "../../apis/ProjectFinder";
import { ProjectsContext } from "../../context/ProjectsContext";


const AdminProjectList = (props) => {

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
    <div id="adminContainer">
      <h2 id="projectListTitle">Projects</h2>
      <table class="table table-bordered table-sm">
        <thead>
          <tr className="table-active">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Source Code</th>
            <th scope="col">Link</th>
            <th scope="col">Icon</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
            {projects && 
              projects.map(project => {
                return (
                  <tr>
                    <td>{project.project_id}</td>
                    <td>{project.title}</td>
                    <td>{project.description}</td>
                    <td>{project.source_code}</td>
                    <td>{project.link}</td>
                    <td>{project.icon}</td>
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

export default AdminProjectList;
