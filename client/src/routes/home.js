import React from "react"
import Header from "../components/Header";
import Featured from "../components/Featured";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact"
import Footer from "../components/Footer";


const home = () => {
  return (
    <div>
      <Header />
      <Featured />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  )
}

export default home