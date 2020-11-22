import React from "react"
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProjectList from "../components/Projects/ProjectList"; 
import ArticleList from "../components/Articles/ArticleList"; 
import Footer from "../components/Footer";


const home = () => {
  return (
    <div className="content-wrap">
      <Header />
      <Banner />
      <ProjectList />
      <ArticleList />
      <Footer />
    </div>
  )
}

export default home