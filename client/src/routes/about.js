import React from "react"
import Header from "../components/Header";
import About from "../components/About"
import Footer from "../components/Footer"


const about = () => {
  return (
    <div className="content-wrap">
      <Header />
      <About /> 
      <Footer />
    </div>
  )
}

export default about