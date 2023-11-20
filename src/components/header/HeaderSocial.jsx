import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const HeaderSocial = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.instagram.com/k.sung_joon/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/ksungjoon"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="mailto:akbari01.dev@gamil.com" target="_blank" rel="noreferrer">
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default HeaderSocial;
