import React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer"
import ArticleListFull from "../components/Articles/ArticleListFull"

const ArticleListPage = () => {
  return (
    <div className="content-wrap">
      <Header />
      <ArticleListFull />
      <Footer />
    </div>
  )
}

export default ArticleListPage