import React from 'react';
import homeBg from '../assets/hero.png';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div 
      className="bg-no-repeat bg-cover lg:h-[1050px] w-full text-white  "
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <Navbar />
      <div className="flex flex-col space-x-4  lg:mt-56 lg:ml-20 pt-10 pl-[15px] sm:ml-10 sm:mt-32 sm:pl-6 md:ml-16 md:mt-40 lg:ml-20 lg:mt-56">
        <div className="text-[#ffffff] p-4 flex flex-col font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Trusted Multi-Chain
          <div className="flex flex-row mt-2">
            <span className="text-custom-yellow"> DEX </span>
            <span className="text-[#ffffff] pl-8"> Platform</span>
          </div>
        </div>
        <div className="text-[#9E9E9E] font-raleway text-[20px] sm:text-[22px] md:text-[25px] lg:text-[27px] lg:whitespace-nowrap w-full sm:w-2/3 md:w-1/2">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </div>
        <div className="text-white pt-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <button className="bg-button-gradient w-[159px] h-[47px] text-black text-[14px] font-bold font-raleway rounded-full py-2 px-4 text-[18px] hover:opacity-90 mr-12 whitespace-nowrap">
            Connect Wallet
          </button>
          <button className="border-[#EDD955] w-[159px] h-[47px] text-[#E4B40D] text-[14px] font-bold font-raleway rounded-full border-2 border-[#EDD955] py-2 px-4 text-[18px] hover:opacity-90 mr-12">
            Trade Crypto
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;