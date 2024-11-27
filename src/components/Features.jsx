import React from 'react'
import image1 from '../assets/cheapest.png'

import image2 from '../assets/certik.png'

import image3 from '../assets/contract.png'

import image4 from '../assets/crossdex.png'
const Features = () => {
  return (
    <>

    <div className="text-[45px] font-extrabold font-orbitron mt-24 mb-4 text-center hover:text-custom-yellow transition duration-300">
  Our <span className="text-custom-yellow hover:text-white transition duration-300">Features</span>
</div>


    <div className="flex justify-between items-center space-x-2 mt-16 ml-16 mr-24">
  <div className="w-[296px] h-[285px] flex flex-col ml-8 bg-[#BAB8B8]/5 backdrop-blur-md rounded-xl shadow-xl border-2 border-custom-gray-light ">
    <img src={image1} alt="Image 1" className="w-[68px] h-[68px] mt-8 ml-8" />
    <h1 className="text-center  font-semibold mt-8 text-[20px]  font-raleway -ml-24">Cheapest TXs</h1>
    <p className="    mt-8 text-[16px] text-[#B6B6B6] font-roboto ml-[38px] mr-2"> Exchange popular digital currencies at the cheapest possible transaction price</p>
  </div>
  <div className="w-[296px] h-[285px] flex flex-col  bg-[#BAB8B8]/5 backdrop-blur-md rounded-xl shadow-xl border-2 border-custom-gray-light ">
    <img src={image2} alt="Image 2" className="w-[68px] h-[68px] mt-8 ml-8" />
    <h1 className="text-center  font-semibold mt-8  text-[20px] font-raleway -ml-40">CerTIK</h1>
    <p className="   mt-8 text-[16px] text-[#B6B6B6] font-roboto ml-[38px] mr-2">We are Audited by Certik. Certik is the leading security-focused ranking platform</p>
  </div>
  <div className="w-[296px] h-[285px] flex flex-col  bg-[#BAB8B8]/5 backdrop-blur-md rounded-xl shadow-xl border-2 border-custom-gray-light ">
    <img src={image3} alt="Image 3" className="w-[68px] h-[68px]  mt-8 ml-8" />
    <h1 className="text-center   font-semibold mt-8 text-[20px] font-raleway -ml-[60px]">No Contract Sells </h1>
    <p className="    mt-8 text-[16px] text-[#B6B6B6] font-roboto ml-[40px]  mr-2 ">No contract sells to fund the marketing wallets</p>

  </div>
  <div className="w-[296px] h-[285px] flex flex-col  bg-[#BAB8B8]/5 backdrop-blur-md rounded-xl shadow-xl mr-8 border-2 border-custom-gray-light">
    <img src={image4} alt="Image 4" className="w-[68px] h-[68px] mt-8 ml-8" />
    <h1 className="text-center   font-semibold mt-8 text-[20px] font-raleway -ml-12">Cross Dex Support</h1>
    <p className="    mt-8 text-[16px] text-[#B6B6B6] font-roboto ml-[40px] mr-2"> Exchange popular digital currencies at the cheapest possible transaction price</p>
  </div>
</div>
</>
  )
}

export default Features