import React from "react"
import Header from "../components/Header";
// import ProjectListFull from "../components/ProjectListFull"  // temp data until article database produced
import Footer from "../components/Footer"

const comingSoon = {
  paddingTop: "250px",
  textAlign: "center"
}

const ArticleListPage = () => {
  return (
    <div className="content-wrap">
      <Header />
      <h1 style={comingSoon}>Coming Soon</h1>
      <Footer />
    </div>
  )
}

export default ArticleListPage