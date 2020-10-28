import React from 'react'
// import construction from "../../public"
import Profile from "./profile-pic-180px.png"

const Banner = () => {
  return (
    <div id="banner" className="bg-info">
      <div id="banner-container-outter">
        <div id="banner-container-inner">
          <img src={Profile} id="banner-profile-pic" alt="profile-pic" />
          <div id="banner-main">
            <div id="banner-title">Welcome! I'm Mark Ganhao.</div>
            <div id="banner-body">I'm a former project manager turned self-taught programmer. This website serves as a record of things I've created and learned.</div>
            <ul id="banner-list">
              <li className='banner-list-item'><button path="/" className="btn btn-lg btn-info banner-btn">About Me</button></li>
              <li className='banner-list-item'><a href="https://github.com/markwithac"><button className="btn btn-info btn-lg banner-btn">GitHub</button></a></li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default Banner