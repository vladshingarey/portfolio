import '../styles/Projects.css';
import GitHubLogo from '../assets/icons/github-logo.jpg';
import PlayDemoIcon from '../assets/icons/demo-icon.jpg'; 

const Projects = () => {
    return (
      <div className="projects-container" id = "projects">

        <div className = "portfolio">
          <div> Porfolio</div>
        </div>

        <div className="project-item">
          <div className="image-container project1-image"></div>
          <div className="description-container">
            <h2>Chess Application</h2>
            <p>
              Designed and developed a chess application. Structured the project with React 
              components to handle the chessboard, game logic, and user interface elements.implemented the rules of chess, 
              piece movement, player interactions, and integrated a chat feature to enhance the user experience.
            </p>
            <p className = "projectSoftware">React and CSS</p>
            <div className = "gitLiveLinks">
              <a href="https://github.com/vladshingarey/chessGame" target="_blank" rel="noopener noreferrer">
                  <img src = {GitHubLogo} alt="Github" className="git-icon" />
              </a>
              <a href = "https://vschessgame.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src = {PlayDemoIcon} alt="PlayDemo" className="playdemo-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="image-container project2-image"></div>
          <div className="description-container">
            <h2>Warhammer 40k ListBuilder</h2>
            <p>
              A desktop application that enables users to create and manage their army 
              lists. Leveraged Object-oriented programming principles and design patterns to craft a tool that
              not only streamlines the process but also offers Warhammer enthusiasts an efficient and 
              user-friendly solution
            </p>
            <p className = "projectSoftware">JavaFX, Excel & ApachePoi</p>
            <div className = "gitLiveLinks">
              <a href="https://github.com/vladshingarey/Warhammer40kListBuilder" target="_blank" rel="noopener noreferrer">
                  <img src = {GitHubLogo} alt="Github" className="git-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="image-container project3-image"></div>
          <div className="description-container">
            <h2>Personal Portfolio</h2>
            <p>
              Crafted a portfolio showcasing my skills and achievements. Thoughtfully 
              organized React components to present my work with a user-friendly
              interface. I incorporated features such as interactive displays of projects, skill sets, and 
              integrated a contact feature to facilitate communication.
            </p>
            <p className = "projectSoftware">React and CSS</p>
            <div className = "gitLiveLinks">
              <a href="https://github.com/vladshingarey/portfolio" target="_blank" rel="noopener noreferrer">
                  <img src = {GitHubLogo} alt="Github" className="git-icon" />
              </a>
              <a href = "https://vladshingareyportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src = {PlayDemoIcon} alt="PlayDemo" className="playdemo-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Projects;