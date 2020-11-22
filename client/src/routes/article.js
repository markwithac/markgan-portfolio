import React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer"
import ArticleComponent from "../components/Articles/Article"

const Article = () => {
  return (
    <div className="content-wrap">
      <Header />
      <ArticleComponent />
      <Footer />
    </div>
  )
}

export default Article