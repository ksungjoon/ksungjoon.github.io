import "./about.css";
import AboutMe from "../../assets/images/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section className="" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <figure className="about-me-img">
            <img src={AboutMe} alt="About Me" />
          </figure>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>산업공학과</h5>
              <small>학점:3.82</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>SSAFY</h5>
              <small>SSAFY 9기 수료</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>5개의 Projects</h5>
              <small>3개의 수상경력</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            molestiae quidem optio quo. Saepe ratione repellat pariatur
            accusantium provident expedita ut, recusandae illum, ea ipsam
            tempora nostrum error hic. Sapiente.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
