import React, { useState } from 'react';
import './navbar.css';
import WebsiteLogo from '../../assets/website-logo.svg';
import Wallet from '../../assets/wallet.svg';
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar-main-container'>
      <div className='navbar'>
        <a href='/'>
          <img src={WebsiteLogo} alt='Website Logo'/>
        </a>
        <div className={`links ${menuOpen ? 'open' : ''}`}>
            <ul className='navbar-links'>
              <li><a href='/dashboard'>Dashboard</a></li>
              <li><a href='/printer'>Printer</a></li>
              <li><a href='/farm'>Farm</a></li>
              <li><a href='/marketplace'>Marketplace</a></li>
              <li><a href='/token-sale'>Token Sale</a></li>
              <li><a href='/portfolio'>Portfolio</a></li>
            </ul>
        </div>
        <button className='launch-btn'>
          <img src={Wallet} alt='Logo' style={{marginBottom:'4px', width:'24px', height:'24px'}} />
          Launch App
        </button>
        <button className='menu-btn' onClick={toggleMenu} >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
