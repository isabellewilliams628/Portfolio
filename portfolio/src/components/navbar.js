import React from 'react';
import { Link } from 'react-router-dom'
import '../stylesheets/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function navbar() {
  return (
    <div className="nav">
       <div className="left">Isabelle Williams</div>
       <div className="mid">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="tab">Home</div>
          </Link>
          <Link to="/development" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="tab">Software Development</div>
          </Link>
          <Link to="/resume" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="tab">Resume</div>
          </Link>

       </div>
       <div className="right">
       <a href="https://github.com/isabellewilliams628" target="_blank" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <FontAwesomeIcon className="git" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/isabelle-williams-6b5461233/" target="_blank" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <FontAwesomeIcon className="linked" icon={faLinkedin} />
        </a>    
       </div> 
    </div>
  )
}

export default navbar