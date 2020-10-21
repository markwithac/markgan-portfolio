import React from 'react'

const Header = () => {
  return (
    <nav>
      <div id="navBar">
        <div id="logo">
          <i className="fab fa-canadian-maple-leaf fa-2x"></i>
          <a id="title" href="/">Mark Ganhao</a>
        </div>
        
        <ul id="headerList">
          <li className="headerListItem">Projects</li>
          <li className="headerListItem">Articles</li>
          <li className="headerListItem">About</li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
