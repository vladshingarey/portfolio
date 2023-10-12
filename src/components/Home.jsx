import '../styles/Home.css';
import JavaIcon from '../assets/icons/java-icon.png';
import JavaScriptIcon from '../assets/icons/javascript-icon.png';
import ReactIcon from '../assets/icons/react-icon.png';
import HtmlIcon from '../assets/icons/html-icon.png';
import CssIcon from '../assets/icons/css-icon.png';
import LiLogo from '../assets/icons/linkedin-logo.jpg';
import GitLogo from '../assets/icons/github-logo.jpg'; 


const Home = () => {
    return (
      <div className="home-container" id = "home">
        
        <div className = "home-left-container">
          <h1 className = "home-software-engineer">Software Engineer</h1>
          <h2 className = "home-front-end">Front End Developer</h2>
          <p className = "home-paragraph">
            Hello and welcome! I'm Vlad, a passionate Software Engineer. 
            Delve into my portfolio to see the projects I've been working on.
          </p>
          <div className = "li-gi-container">
            <a href="https://www.linkedin.com/in/vladshingarey" target="_blank" rel="noopener noreferrer">
              <img src = {LiLogo} alt="LinkedIn" className="li-icon" />
            </a>
            <a href="https://github.com/vladshingarey" target="_blank" rel="noopener noreferrer">
                <img src = {GitLogo} alt="Github" className="git-icon" />
            </a>
            <div className = "home-img-mobile"></div>
          </div>
          
          <div className = "tech-stack">
            <p>Tech Stack |</p>
            <div>
              <img src={JavaIcon} alt="JavaIcon" className="icon" />
              <img src={JavaScriptIcon} alt="JavaScriptIcon" className="icon" />
              <img src={ReactIcon} alt="ReactIcon" className="icon" />
              <img src={HtmlIcon} alt="HtmlIcon" className="icon" />
              <img src={CssIcon} alt="CssIcon" className="icon" />
            </div>
          </div>
        </div>
        <div className = "home-right-container">
          <div className = "home-img-desktop"></div>
        </div>
      </div>
    );
  } 
  export default Home;