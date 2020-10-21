import React from 'react'

const Footer = () => {
  return (

    <footer id="container">
      <div id="footer">
        <ul className="quickLinks">
          {/* eslint-disable-next-line */}
          <li><a href="#">Back to Top</a></li>
          {/* eslint-disable-next-line */}
          <li><a href="#">Projects</a></li>
          {/* eslint-disable-next-line */}
          <li><a href="#">Articles</a></li>
          {/* eslint-disable-next-line */}
          <li><a href="#">Donate</a></li>
        </ul>

      </div>
        <ul id="smLinks">
          <li><a href="https://github.com/markwithac"><i class="fab fa-github fa-2x"></i></a></li>
          <li><a href="https://twitter.com/MarkGanhao"><i class="fab fa-twitter fa-2x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/mark-ganhao/"><i class="fab fa-linkedin fa-2x"></i></a></li>
          <li><a href="https://www.instagram.com/markganhao/"><i class="fab fa-instagram fa-2x"></i></a></li>
        </ul>
    </footer>
  )
}

export default Footer