import React from 'react';
import '../stylesheets/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function navbar() {
  return (
    <div className="nav">
       <div className="left">Isabelle Williams</div>
       <div className="mid">
            <div className="tab">Home</div>
            <div className="tab">Software Development</div>
            <div className="tab">UX Design</div>
            <div className="tab">Resume</div>
            <div className="tab">Contact</div>
       </div>
       <div className="right">
            <FontAwesomeIcon className="git" icon={faGithub} />
            <FontAwesomeIcon className="linked" icon={faLinkedin} />
       </div> 
    </div>
  )
}

export default navbar