import React from 'react';
import Navbar from '../components/navbar';
import '../stylesheets/home.css'

function home() {
  return (
    <div id='main'>
        <Navbar />
        <div className='intro-card'>
          <div className="intro-text">
            <h1>Hi Im Isabelle</h1>
            <p>I’m a Software Developer specializing in Front End Development and UX Design</p>
          </div>
         
        </div>

        <div className='middle-card'>
          <h1>Specializing in</h1>
          <div className='block'>

          </div>
          <div className='block'>
            
          </div>
          <div className='block'>
            
          </div>

        </div>



    </div>
  )
}

export default home