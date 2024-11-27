import React from 'react';
import backgroundAbout from '../assets/about1.png';
import ComparisonTable from '../components/ComparisonTable';
import Features from '../components/Features.JSX';
function About() {
  return (
    <>
    <div  id="About Us"  className="bg-no-repeat bg-cover h-[1350px] w-full text-white bg-[length:100%_auto]  bg-[top_50%]" 
    style={{ backgroundImage: `url(${backgroundAbout})` }}>
      
    <div className="font-bold font-orbitron text-[40px] ml-44 hover:text-[#E4B40D] transition duration-300">
  Why <span className="text-[#E4B40D] font-bold text-[45px] hover:text-white transition duration-300">MoonEX ?</span>
</div>

    <ComparisonTable />

    <Features  />
    </div>

    </>
  );
}

export default About;
