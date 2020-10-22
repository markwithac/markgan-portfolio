import React from "react"
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact"
import Footer from "../components/Footer";


const home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  )
}

export default home