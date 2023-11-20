import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { SiKakaotalk } from "react-icons/si";
import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className="contact-option-icon" />
            <h4>E-mail</h4>
            <h5>gkxm0443@naver.com</h5>
          </article>
          <article className="contact-option">
            <SiKakaotalk  className="contact-option-icon" />
            <h4>KAKAO TALK</h4>
            <h5>gkxm0443@naver.com</h5>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>Phone Number</h4>
            <h5>+1035828505</h5>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
