import React from 'react';
import "../assets/css/Footer.css";
import Logo from "../assets/images/matlogo.png"
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-container">
        <div className= "footer_content">
          <div className='matowin_logo'>
            <img src={Logo} alt='logo'/>
          </div>
          <div className='footer_content_change'>
            <h1>SERVICES</h1>
            <ul>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            </ul>
          </div>
          <div className='footer_content_change'>
            <h1>SERVICES</h1>
            <ul>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            </ul>
          </div>
          <div className='footer_content_change'>
            <h1>SERVICES</h1>
            <ul>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            <li>Metal Injection Molding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div className="footer_social_media">
        <div className='footer_copy_rights'>
        <span>Copyright @ 2024 INDO-MIM | All Rights Reserved</span>
        </div>
        <div className="footer-icons">
            <a href="#" target="_blank">
              <FaInstagram />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin/>
            </a>
            <a href="#" target="_blank">
              <FaPinterestSquare />
            </a>
            <a href="#" target="_blank">
              <FaSquareTwitter />
            </a>
         </div>
      </div>
    </>
  );
};

export default Footer;
