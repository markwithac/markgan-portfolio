import React from "react"
import Header from "../components/Header";
import ProjectListFull from "../components/ProjectListFull"
import Footer from "../components/Footer"


const ProjectListPage = () => {
  return (
    <div className="content-wrap">
      <Header />
      <ProjectListFull /> 
      <Footer />
    </div>
  )
}

export default ProjectListPage