import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
  return (

    <footer>
      <div id="footer">
        <ul className="quickLinks">
          {/* eslint-disable-next-line */}
          <li><a href="#">Back to Top</a></li>
          {/* eslint-disable-next-line */}
          <li><Link to="/projects">Projects</Link></li>
          {/* eslint-disable-next-line */}
          <li><Link to="/articles">Articles</Link></li>
          {/* eslint-disable-next-line */}
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

      <ul id="smLinks">
        <li><a href="https://github.com/markwithac"><i className="fab fa-github fa-2x"></i></a></li>
        <li><a href="https://twitter.com/MarkGanhao"><i className="fab fa-twitter fa-2x"></i></a></li>
        <li><a href="https://www.linkedin.com/in/mark-ganhao/"><i className="fab fa-linkedin fa-2x"></i></a></li>
        <li><a href="https://www.instagram.com/markganhao/"><i className="fab fa-instagram fa-2x"></i></a></li>
      </ul>

    </footer>
  )
}

export default Footer