import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2025 Manav Kalola</p>
      </div>
      <div className="footer-right">
        <a href="https://github.com/Dangerdash77/JSR">
          <FaGithub />
        </a>
        <a href="mailto:manavkalola1612@gmail.com">
          <MdEmail />
        </a>
        <a href="https://www.linkedin.com/in/manav-kalola-7b000126b/">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
