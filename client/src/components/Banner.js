import React from 'react'
import { Link } from "react-router-dom";
import Profile from "./profile-pic-180px.png"

const Banner = () => {
  return (
    // <Router>
      <div id="banner" className="bg-info">
        <div id="banner-container-outter">
          <div id="banner-container-inner">
            <img src={Profile} id="banner-profile-pic" alt="profile-pic" />
            <div id="banner-main">
              <div id="banner-title">Welcome! I'm Mark Ganhao.</div>
              <div id="banner-body">I'm a former project manager turned self-taught programmer. This website serves as a record of things I've created and learned.</div>
              
              <ul id="banner-list">
                <li className='banner-list-item'>
                  <Link class="btn btn-lg btn-info banner-btn" to="/about">About Me</Link>
                </li>
                <li className='banner-list-item'>
                  <a href="https://github.com/markwithac" className="btn btn-info btn-lg banner-btn">Github</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
        
      </div>
  )
}
export default Banner