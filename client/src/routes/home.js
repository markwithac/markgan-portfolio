import React from "react"
import Header from "../components/Header";
import Featured from "../components/Featured";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact"


const home = () => {
  return (
    <div>
      <Header />
      <Featured />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default home