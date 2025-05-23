
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const animatedTexts = [
    "Michael",
    "A Designer",
    "A Marketer",
    "Creative"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 mb-10 md:mb-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-400 uppercase tracking-wider mb-4 animate-fadeIn">FREELANCE GRAPHIC DESIGNER</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hello, I'm <span className="text-brand-red relative overflow-hidden inline-block min-w-[180px]">
                <span className="animate-pulse">{animatedTexts[textIndex]}</span>
              </span><br />
              <span className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>Welcome to my World.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              Creative Director and Digital Marketing Strategist with over 6 years of experience
              in the world of digital brand management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-red hover:bg-opacity-80 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                Hire Me
              </Link>
              <Link to="/portfolio" className="border-2 border-white hover:border-brand-red hover:text-brand-red text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
                My Work
              </Link>
            </div>
          </div>
          <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <img 
              src="/images/logoo.png"
              alt="Profile" 
              className="mx-auto object-cover w-full h-auto rounded-lg hover:shadow-lg transition-all duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
