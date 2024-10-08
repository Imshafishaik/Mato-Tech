import React, { useEffect, useState } from 'react';
import "../assets/css/Header.css";
import Logo from "../assets/images/matlogo.png"
import Navbar from './Navbar';

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    <div className={`${isSticky ? 'matowin_header sticky':'matowin_header'}`}>
      <div className='matowin_logo'>
        <img src={Logo} alt='logo'/>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
