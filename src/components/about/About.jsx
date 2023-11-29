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
            사용자 중심의 프론트엔드 개발자로, 다양한 기술을 손쉽게 익히며 항상 새로운 도전에 열려있습니다. 
            사용자의 피드백을 적극적으로 수용하고 반영하여, 언제나 높은 만족도를 유지하며 웹 경험을 향상시키는 것을 목표로 하고 있습니다.
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
