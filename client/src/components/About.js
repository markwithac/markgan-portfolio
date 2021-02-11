import React from 'react'
import img from "./profile-761.png"
import "./about.css"

const About = () => {
  return (
    <div>
      <div id="about" className="container">
        <h2 id="about-title">About me</h2>
        <p>Hey! My name is Mark Ganhao and I'm a former project manager turned self-taught programmer.</p>
        
        <img id="about-img" src={img} alt="Mark Ganhao seated at a gaming event." />
        
        <p></p>
        <h2 className="about-headers">Mission</h2>
        <p>My mission is to build apps and tools that are meaningful and impactful to others and theirs lives.</p>

        <h2 className="about-headers">Projects</h2>
        <ul>
          <li><a className="about-link" href="https://github.com/markwithac/markgan-portfolio">My website</a> - Built on the PERN Stack</li>
          <li><a className="about-link" href="https://github.com/markwithac/discord-bot">Discord Bot</a> - A simple Discord bot using Discord.js for server maintanance, API calls to the Riot Games api and more.</li>
        </ul>

        <h2 className="about-headers">Connect with me</h2>
        <ul>
          <li>Email - <a className="about-link" href="mailto: mark.ganhao@gmail.com">mark.ganhao@gmail.com</a></li>
          <li>GitHub - <a className="about-link" href="https://github.com/markwithac">@markwithac</a></li>
          <li>Twitter - <a className="about-link" href="https://twitter.com/MarkGanhao">@MarkGanhao</a></li>
        </ul>
  
        <h2 className="about-headers">A Brief History</h2>
        <ul>
          <li><b>1990 - </b>Born in Toronto, Canada, one younger brother, Portuguese immigrant parents.</li>
          <li><b>1999 - </b>Parents gift me a Game Boy Color and my best friend's parents get their first PC. Discover my passion for gaming with Pokemon Red & Quake.</li>
          <li><b>2001 - 2009 - </b>Play way too much Halo 1, 2, and 3</li>
          <li><b>2010 - </b>Become one of Canada's first professional gamers playing Halo 3 for World Gaming - a Toronto based gaming website.</li>
          <li><b>2011 - </b>Professional gaming being in its infancy stage, I transition to a customer support/ QA tester with World Gaming.</li>
          <li><b>2013 - 2018 - </b>Leave World Gaming with a colleague to build a competitor platform to World Gaming - Pro Gaming League (PGL). Worked with a Toronto firm to develop the industry leading tournament platform, building a userbase of over 300,000. It's during this process that I begin to admire the development process. In 2016, I beging working towards a Computer Science degree part-time at Wilfrid Laurier in Waterloo, Ontario.  In the latter years of PGL, we team up with game developers such as Microsoft's 343 Industries, Electronic Arts, and more, to host large scale, in person gaming events. In 2017, PGL is listed on the Toronto Stock Exchange</li>
          <li><b>2019 - </b>Leave PGL, and join a startup professional gaming team, Team Reciprocity. I join Team Treehouse and in my spare time, continue to learn Python, but later transition my focus to Javascript.</li>
          <li><b>2020 - </b>Covid-19 hits, Team Reciprocity is forced to seize operations. No better opportunity to commit to the career change I've slowly been working towards. Daily practice, focusing on Javascript, NodeJS, Postgres, and React. I created this website, as a record of all things that I've created and leared.</li>
        </ul>
    
      </div>
    </div>
  )
}
export default About