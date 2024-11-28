import React, { useState, useEffect } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import AccordionItem from './pages/Faq';
import Footer from './pages/Footer';

function App() {
  // State to manage loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-custom-dark">
      {loading ? (
        // Custom loader with gradient background
        <div className="flex justify-center items-center h-screen">
          <span className="w-[150px] h-[150px] bg-gradient-to-l from-[#FFE68F] to-[#bf9a14] rounded-full relative shadow-[0_0_30px_4px_rgba(0,0,0,0.5)_inset,0_5px_12px_rgba(0,0,0,0.15)] overflow-hidden">
            <span
              className="absolute w-full h-full top-[-40%] bg-white rounded-[45%] animate-[wave_5s_linear_infinite]"
              style={{ background: "rgba(255, 255, 255, 0.4)", borderRadius: "30%" }}
            />
          </span>
        </div>
      ) : (
        // Main content after loading
        <>
        <div className="overflow-x-hidden">
        
          <Home />
          <About />
          <AccordionItem />
          <Footer />
          </div>
        </>
      )}
      
      {/* Adding the custom wave animation */}
      <style>{`
        @keyframes wave {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
