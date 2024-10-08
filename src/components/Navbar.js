import React, { useState } from 'react';
import "../assets/css/Navbar.css";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenu,setIsMenu] = useState(false);

    const navigate = useNavigate()

    const handleContactUs = () => {
      navigate('/contact')
    }
  return (
    <div className='matowin_navbar'>
      <div className='matowin_nav_icons'>
        {isMenu ? <RxCross2 size={30} onClick={()=>setIsMenu(false)} color='#fff' />:
        <IoMdMenu onClick={()=>setIsMenu(true)} size={30} color='#fff' />}
      </div>
      <ul className={isMenu ? "nav_active":"nav_inactive"}>
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
        <li>
            <button type='button' onClick={()=>handleContactUs()}>Contact Us</button>
        </li>
        {/* <li>
            <a href='#contact'>Contact Us</a>
        </li> */}
      </ul>
    </div>
  )
}

export default Navbar
