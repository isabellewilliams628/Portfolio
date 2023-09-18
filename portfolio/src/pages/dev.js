import '../stylesheets/dev.css';
import menu from '../assets/secretmenu.png';
import spotify from '../assets/spotifysumm.png';
import tft from '../assets/tftsite.png';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

function Dev(){
    return(
        <div className="development">
            <Navbar />
            <div className="title">Software Development Projects</div>
            <div className="project">
                
                <div className='text'>
                    <div className="proj-name">Personalized Spotify Summary</div>
                    <div className='desc'>Login with your Spotift credentials and see your top played artists and songs. This project utilizes React.js and the Spotify API.</div>
                    <a href="https://personalizedspotifysummary.netlify.app/"target="_blank" style={{ textDecoration: 'none', color: 'inherit'  }}>
                        <div className="dev-btn">View</div>
                    </a>
                </div>
                

                <img src={spotify} className="proj-img"></img>
            </div>
            <div className="project">
                
                <div className="text">
                    <div className="proj-name">Secret Menu</div>
                    <div className="desc">Learn how to order special drinks at Starbucks just by ordering things that are already on the menu. This website will tell you exactly how to order these drinks based off the size that you want. This project uses React.js and Firebase </div>
                    <a href="https://secretmenu-sb.netlify.app/"target="_blank" style={{ textDecoration: 'none', color: 'inherit'  }}>
                        <div className="dev-btn">View</div>
                    </a>
                </div>
                
                
                <img src={menu} className="proj-img"></img>
                
                
            </div>
            <div className="project">
                <div className='text'>
                    <div className="proj-name">TFT Build Guide</div>
                    <div className="desc">Check out the best builds and other information for the game Team Fight Tactics! This project utilizes React.js and mySQL. </div>
                    <a href="https://kaleidoscopic-pastelito-49f094.netlify.app/"target="_blank" style={{ textDecoration: 'none', color: 'inherit'  }}>
                        <div className="dev-btn">View</div>
                    </a>
                </div>
                
                <img src={tft} className="proj-img"></img>
            </div>
        </div>
    )
}

export default Dev