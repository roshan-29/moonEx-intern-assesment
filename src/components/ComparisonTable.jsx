import React from 'react';
import comparison from '../assets/Comparison.png'
import moonex from '../assets/moonex.png'
import uniswap from '../assets/uniswap.png'
import right from '../assets/check_bold.png'
import wrong from '../assets/close_small.png'
function ComparisonTable() {
  
  return (
    <div className="w-full h-full max-w-[1329px] max-h-[588px] p-4 bg-[#BAB8B8]/5 backdrop-blur-md rounded-lg  ml-24 mt-4 shadow-xl">
  <table className="w-full text-left ">
    <thead>
    <tr className="border-custom-gray-light border-2 border-l-0 border-t-0 border-r-0">
    <th className="pl-[95px]  "> <img src={comparison} alt="" /> </th>
    <th className="pl-16 pt-4 border-t-0 border border-custom-gray-light  w-[380px] "><img src={moonex} alt="" /> </th>
    <th className="pl-32 pt-2 "><img src={uniswap} alt="" /> </th>
  </tr>
  
    </thead>
    <tbody >
      <tr className="border-custom-gray-light border-2 border-l-0 border-t-0 border-r-0">
        <td className="pl-[66px] border-custom-gray-light  border border-l-0 font-neue-machina   text-[20px]  text-[rgba(240,240,240,0.7)]">1 . Point no one </td>
        <td className="p-2 pl-[15%] border-custom-gray-light  border "><img src={right} alt="" /></td>
        <td className="p-2 pl-[15%]   border border-r-0 "> <img src={wrong} alt="" /> </td>
      </tr>
      <tr className="border-custom-gray-light border-2 border-l-0 border-t-0 border-r-0">
      <td className="pl-[66px] border border-custom-gray-light border-l-0 font-neue-machina  text-[20px]   text-[rgba(240,240,240,0.7)]" >2 . Point no two this</td>
      <td className="p-2 pl-[15%] border-custom-gray-light border  "><img src={right} alt="" /></td>
      <td className="p-2 pl-[15%]  border border-r-0 "><img src={wrong} alt="" /></td>
    </tr>
    <tr className="border-custom-gray-light border-2 border-l-0 border-t-0 border-r-0">
    <td className="pl-[66px] border border-l-0 border-custom-gray-light  font-neue-machina  text-[20px]  text-[rgba(240,240,240,0.7)]">2 . Point no two this </td>
    <td className="p-2 border pl-[15%] border-custom-gray-light  "><img src={right} alt="" /></td>
    <td className="p-2 border pl-[15%]  border-r-0 "><img src={wrong} alt="" /></td>
  </tr>
      <tr className="border-custom-gray-light border-2 border-l-0 border-t-0 border-r-0">
      <td className="pl-[66px] border-custom-gray-light border border-l-0 font-neue-machina  text-[20px]  text-[rgba(240,240,240,0.7)]">2 . Point no two this</td>
      <td className="p-2 pl-[15%] border-custom-gray-light  border "><img src={right} alt="" /></td>
      <td className="p-2 pl-[15%]  border border-r-0 "><img src={wrong} alt="" /></td>
    </tr >
      <tr className="border-custom-gray-light border-2 border-l-0 border-t-0 border-r-0">
      <td className="pl-[66px] border-custom-gray-light border border-l-0   font-neue-machina  text-[20px]  text-[rgba(240,240,240,0.7)]">2 . Point no two this</td>
      <td className="p-2 pl-[15%] border-custom-gray-light  border "><img src={right} alt="" /></td>
      <td className="p-2 pl-[15%]    border border-r-0 "><img src={wrong} alt="" /></td>
    </tr>
    <tr className="border-custom-gray-light border-2 border-l-0 border-t-0 border-r-0">
    <td className="border  border-custom-gray-light pl-[66px] border-l-0   text-[20px] font-neue-machina text-[rgba(240,240,240,0.7)]">2 . Point no two this</td>
    <td className="p-2 pl-[15%]  border-custom-gray-light "><img src={right} alt="" /></td> 
    <td className="p-2 pl-[15%]  border-custom-gray-light border border-r-0 "><img src={wrong} alt="" /></td>
  </tr>

  <tr className="border-custom-gray-light ">
  <td className="p-2 border border-custom-gray-light  border-l-0 border-b-0"></td>
  <td className="p-2 border border-custom-gray-light border-b-0 "></td> 
  <td className="p-2 border border-r-0 border-b-0  "></td>
</tr>
    </tbody>
  </table>
</div>
  );
}

export default ComparisonTable;


