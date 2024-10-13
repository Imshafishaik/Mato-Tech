import React from 'react';
import "../assets/css/Footer.css";
import Logo from "../assets/images/matlogo.png"
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";



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
            <h1>Company</h1>
            <ul>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
               <a href='#infra'>Our Infrastructure</a>
              </li>
            <li>
              <a href='#machinery'>Our Machinery</a>
            </li>
            <li>
              <a href='#products'>Products</a>
            </li>
            </ul>
          </div>
          <div className='footer_content_change'>
            <h1>Contact</h1>
            <ul>
            <li><IoCallOutline /> 8310415571 / 9448417135</li>
            <li><MdOutlineEmail /> test@gamil.com</li>
            <li><CiLocationOn /> Matowin Techniques NO3, 10th Main, Behind Maruthi Industrial Town,<br />Thigalarapalya Main Road, Peenya 2rd Stage, 3th Phase,<br />
                  Bangalore - 560058
            </li>
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
