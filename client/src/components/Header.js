import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div id="navBar">
        <div id="logo">
          <Link  to="/"><i className="fab fa-canadian-maple-leaf fa-2x"></i></Link>
          <Link id="title" to="/">Mark Ganhao</Link>
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
