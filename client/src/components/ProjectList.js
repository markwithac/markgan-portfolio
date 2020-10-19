import React, { useEffect } from "react";
import ProjectFinder from "../apis/ProjectFinder";


const ProjectList = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectFinder.get('/')
        console.log(response)
      } catch (error) {
        console.error(error.message)
      } 
    };
    
    fetchData();
  }, [])

  return (
    <div className="container">
      <h2 id="projectListTitle">Projects</h2>
      {/* <table className="table">

        <tbody>
          <tr className="tableRow">n
            <th scope="row" className="iconTitle">
              <i className="fas fa-gamepad fa-2x"></i>
              <h5>Game</h5>
            </th> 
            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
            <td><button className="btn btn-outline-info">View</button></td>
          </tr>

        </tbody>
      </table> */}
      <div id="projectListBtn">
        <button className="btn btn-sm btn-outline-secondary">View All</button>
      </div>
    </div>
  )
}

export default ProjectList;