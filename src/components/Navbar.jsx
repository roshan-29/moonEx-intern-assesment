import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="pl-10 pt-9 flex items-center justify-between text-[18px] font-bold relative">
      {/* Logo Section */}
      <div>
        <img src={logo} alt="Logo" className="w-[150px] sm:w-[194px] h-auto" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-20 font-raleway text-center text-white absolute sm:relative top-24  sm:top-auto left-0 sm:left-auto w-full sm:w-auto bg sm:bg-transparent  bg-black p-4 sm:p-0`}
      >
        {['Home', 'About Us', 'RoadMap', '  FAQs', 'Contact Us'].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`block sm:inline hover:text-gray-300 ${
                activeLink === link ? 'text-[#EDD955]' : 'text-white'
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Connect Wallet Button */}
      <div className="hidden sm:block">
        <button className="bg-button-gradient text-black font-raleway rounded-full py-2 px-4 mr-4 text-[18px] hover:opacity-90">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
