import React from "react"
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProjectList from "../components/ProjectList";  
import Footer from "../components/Footer";


const home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default home