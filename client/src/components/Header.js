import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div id="navBar">
        <div id="logo">
          <i className="fab fa-canadian-maple-leaf fa-2x"></i>
          <a id="title" href="/">Mark Ganhao</a>
        </div>
        
        <ul id="headerList">
          <li className="headerListItem">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="headerListItem">
            <Link to="/articles">Articles</Link>
          </li>
          <li className="headerListItem">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
