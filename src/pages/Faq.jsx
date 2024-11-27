import React, { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import backgroundFaq from '../assets/bg-faq.png';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
      <div className="border-b border-white/10">
        <button
          className="flex items-center justify-between w-full py-6 text-left text-white pl-20" // Add padding-left here
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className=" text-[18px] font-raleway">{title}</span>
          <div className="relative mr-12">
            <div className="absolute inset-0 bg-[#D9D9D9] bg-opacity-10 rounded-full"></div>
            {isOpen ? (
              <ChevronDown className="h-8 w-8 shrink-0 transition-transform duration-200 relative z-10 " />
            ) : (
              <Plus className="h-8 w-8 shrink-0 transition-transform duration-200 relative z-10" />
            )}
          </div>
        </button>
        {isOpen && (
          <div className="pb-6 text-[#BAB8B8] pl-20 font-raleway text-[15px]">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  };

const AccordionDemo = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const items = [
    {
      title: "How do I get a Referral Code?",
      content: "You can get a referral code by signing up and navigating to the Refer & Earn section in the app."
    },
    {
      title: "Do I get rewarded in tokens or ETH when I refer buyers?",
      content: "You receive your rewards in ETH instantly once someone you refer makes a transaction!"
    },
    {
      title: "How do I get a Referral Code?",
      content: "You can get a referral code by signing up and navigating to the Refer & Earn section in the app."
    }
  ];

  return (
    <div  id="FAQs"
      className="bg-no-repeat bg-cover min-h-screen flex items-center justify-center text-white -mt-40"
      style={{ backgroundImage: `url(${backgroundFaq})` }}
    >
      <div className="w-[990px] h-[450px] mx-auto  bg-[#BAB8B8]/5 backdrop-blur-md rounded-xl shadow-xl overflow">
        <h2 className="text-[35px] font-extrabold  font-orbitron mt-4 mb-4 text-center text-custom-yellow">FAQs</h2>
        <div className="border-b  border-white/10 mb-1"></div>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openItem === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
        <div className="h-8"></div> {/* Space after the last line */}
      </div>
    </div>
  );
};

export default AccordionDemo;

