import React from 'react'
import img from "./profile-761.png"

const About = () => {
  return (
    <div>
      <div id="about-header" className="container">
        <h2>About me (IN PROGRESS)</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis consectetur nulla, at convallis odio rutrum vel. Vestibulum a est libero. Pellentesque iaculis tempus tellus non luctus. Maecenas congue dapibus urna eu pharetra. Sed molestie justo nec libero ornare vehicula. Suspendisse potenti. Duis vulputate, nisi sit amet dignissim facilisis, lectus nulla lacinia magna, ut placerat magna metus eget lacus. Donec luctus a eros et aliquet. Pellentesque commodo lacinia lorem a efficitur. Maecenas pellentesque mi orci, a varius ligula hendrerit id.</p>
        
        <img src={img} alt="Mark Ganhao seated at a gaming event." />
        
        <h2>Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis consectetur nulla, at convallis odio rutrum vel. Vestibulum a est libero. Pellentesque iaculis tempus tellus non luctus.</p>

        <h2>Projects</h2>
        <ul>
          <li>Project 1 - with a brief description</li>
          <li>Project 2 - with a brief description</li>
        </ul>

        <h2>Connect with me</h2>
        <ul>
          <li>Email - email+link</li>
          <li>GitHub - github+link</li>
          <li>Twitter - twitter+link</li>
        </ul>
  
        <h2>A Brief History</h2>
        <ul>
          <li>1990 - born</li>
          <li>year - thing</li>
          <li>year - thing</li>
          <li>year - thing</li>
          <li>year - thing</li>
          <li>year - thing</li>
          <li>year - thing</li>
        </ul>
    
      </div>
    </div>
  )
}
export default About