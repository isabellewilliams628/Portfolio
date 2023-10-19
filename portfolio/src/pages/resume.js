import '../stylesheets/resume.css';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import myResume from '../assets/resume.png'

function Resume(){
    return(
        <div className="resume">
            <Navbar />
            <div className='title'>Resume</div>
            <div className='wrap'>
                <a href="../assets/IsabelleWilliams.pdf" download="IsabelleWilliams.pdf">
                <div className='btn'>Download PDF</div>
                </a>
            </div>
            <div className='res'>
                <img src={myResume}></img>
            </div>
            
    
        </div>
    )
}

export default Resume