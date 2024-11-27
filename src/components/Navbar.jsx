// src/components/Navbar.js

import logo from '../assets/logo.png'
import React, { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="pl-10 pt-9 flex items-center justify-between text-[18px] font-bold ">
    {/* Logo Section */}
    <div>
      <img src={logo} alt="Logo" className="w-[194px] h-[73px]" />
    </div>
  
    {/* Navigation Links */}
    <ul className="flex space-x-20 font-raleway text-white -ml-[168px] -mt-[10px]">
      {['Home', 'About Us', 'RoadMap','FAQs', 'Contact Us'].map((link) => (
        <li key={link}>
          <a
            href={`#${link}`}
            className={`hover:text-gray-300 ${
              activeLink === link ? 'text-[#EDD955] font-raleway' : 'text-white'
            }`}
            onClick={() => handleLinkClick(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1).replace('-', ' ')}
          </a>
        </li>
      ))}
    </ul>
  
    {/* Connect Wallet Button */}
    <div>
    <button className="bg-button-gradient text-black font-raleway rounded-full py-2 px-4 text-[18px] hover:opacity-90 mr-12 -mt-[10px]">
    Connect Wallet
  </button>
    </div>
  </nav>
  
  );
}

export default Navbar;