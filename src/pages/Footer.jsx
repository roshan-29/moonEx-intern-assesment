import React, { useState } from 'react';
import logofooter from '../assets/logo-footer.png';
import { BsTelegram } from 'react-icons/bs';
import { FaRedditAlien } from 'react-icons/fa6';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div id="Contact Us" className="flex flex-col sm:flex-row sm:space-x-8 items-center mt-12 h-auto sm:h-[319px] px-4 sm:px-16">
      <div className="flex justify-center sm:justify-start w-full sm:w-auto">
        <img src={logofooter} alt="Logo" className="w-[150px] sm:w-[200px]" />
      </div>

      <div className="flex-grow flex justify-center w-[200px] sm:justify-start">
        <ul className="flex flex-wrap justify-center sm:ml-80 space-x-4 sm:space-x-8 font-raleway text-white font-bold">
          {['About Us', 'RoadMap', 'FAQs', 'Contact Us'].map((link) => (
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
      </div>

      <div className="flex flex-col justify-center items-center sm:items-start">
        <div className="text-[20px] sm:text-[30px] text-white font-raleway font-extrabold text-center sm:text-left">
          Contact <span className="text-custom-yellow">Us</span>
        </div>
        <div className="flex space-x-4 sm:space-x-8 mt-4 mr-8 justify-center sm:justify-start">
          <BsTelegram
            className="w-[30px] h-[26px] text-white cursor-pointer transform transition duration-300 hover:scale-110 active:scale-90"
          />
          <FaRedditAlien
            className="w-[30px] h-[26px] text-white cursor-pointer transform transition duration-300 hover:scale-110 active:scale-90"
          />
          <FiTwitter
            className="w-[30px] h-[26px] text-white cursor-pointer transform transition duration-300 hover:scale-110 active:scale-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
