import '../styles/Footer.css';
import LiLogo from '../assets/icons/linkedin-logo.jpg';
import GitLogo from '../assets/icons/github-logo.jpg';

const Footer = () => {
    return (
      <div className="footer-container">
          <p>Copyright &copy; {new Date().getFullYear()}. Vlad.Eng. All Rights Reserved.</p>
          <div className = "footer-links">
            <a href="https://www.linkedin.com/in/vladshingarey" target="_blank" rel="noopener noreferrer">
                <img src = {LiLogo} alt="LinkedIn" className="li-icon" />
            </a>
            <a href="https://github.com/vladshingarey" target="_blank" rel="noopener noreferrer">
                <img src = {GitLogo} alt="Github" className="git-icon footer-git-icon" />
            </a>
        </div>
      </div>
    );
  }
  export default Footer;