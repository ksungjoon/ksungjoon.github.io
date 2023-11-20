import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/images/aboutme.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <div>
          <h2>사용자입장에서 생각하는 개발자</h2>
          <h1>김성준입니다.</h1>
          <h5 className="text-light">Frotnend Developer</h5>
          <br />
          
          <CTA />
        </div>
        <div>
          <figure className="me">
            <img src={ME} alt="Me" />
          </figure>
        </div>
        <a href="#footer" className="scroll-down">
          Scroll Down
        </a>
        <HeaderSocial />
      </div>
    </header>
  );
};

export default Header;
