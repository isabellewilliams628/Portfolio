import React from 'react';
import Navbar from '../components/navbar';
import '../stylesheets/home.css';
import dev from '../assets/development.png';
import ux from '../assets/ux.png';
import testing from '../assets/testing.png';
import upbound from '../assets/upbound.png';
import image from '../assets/portimage.jpg';

function Home() {
  return (
    <div id='main'>
        <Navbar />
        <div className='intro-card'>
          <div className="intro-text">
            <h1>Hi, I'm Isabelle</h1>
            <a>I’m a Software Developer specializing in Front End Development and UX Design</a>
          </div>
          <div className="intro-image"></div>
         
        </div>

        <div className='middle-card'>
          <div className='middle-header'>Specializing in</div>
          <div className='content'>
          <div className='block'>
              <img src={dev} alt="Dev"></img>
              <div className="block-header">Mobile and Web Development</div>
              <div className="block-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
          </div>
          <div className='block'>
              <img src={ux} alt="UX"></img>
              <div className="block-header">UX Design</div>
              <div className="block-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
          </div>
          <div className='block'> 
              <img src={testing} alt="Testing"></img>
              <div className="block-header">Optimization Testing</div>
              <div className="block-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
          </div>
          </div>

        </div>
        <div className='experience-card'>
          <div className='exp-text'>
            <h1>Experience</h1>
            <h2>E-Commerce Developer Intern - Upbound Group</h2>
            <p>I worked on UX research in the form of A/B testing using the software Optimizely. Additionally I used HTML, CSS, and Javascript to change UI features on the E-Commerce website.</p>
          </div>
          <img src={upbound} id="up"></img>
        </div>



    </div>
  )
}

export default Home