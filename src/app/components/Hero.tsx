'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isPulsing, setIsPulsing] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Effect to control the pulsing dot
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Effect for entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen px-4 pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/video/bg.mp4" type="video/mp4" />
        </video>
        
        {/* First Overlay - Purple with opacity */}
        <div className="absolute inset-0 bg-[#a663f2] opacity-30 z-10"></div>
        
        {/* Second Overlay - Gradient to solid */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 10%, #090112 70%, #090112 100%)'
          }}
        ></div>
      </div>
      
      <div className="max-w-[1140px] w-full mx-auto relative z-30">
        {/* Subtitle with pulsing dot */}
        <div 
          className={`capsule inline-flex items-center bg-[#1a0e2e] mb-6 px-3 py-1.5 rounded-full border border-[#32245a]/40 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}
        >
          <div 
            className="w-2 h-2 rounded-full bg-[#a663f2] mr-2 pulse-dot"
            aria-hidden="true"
          ></div>
          <span className="font-[family-name:var(--font-circular-book)] text-sm">
            AlgoHive
          </span>
        </div>
        
        {/* Main heading */}
        <h1 
          className={`font-[family-name:var(--font-circular-medium)] text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}
        >
          Pioneering AI-Powered Collective Intelligence for Optimized Trading
        </h1>
        
        {/* Content paragraph */}
        <p 
          className={`font-[family-name:var(--font-circular-book)] text-lg md:text-xl mb-12 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-90 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}
        >
          AlgoHive AI leverages a sophisticated network of artificial intelligence agents to empower traders across all experience levels. Our platform delivers distilled, actionable insights, personalized strategies, and precision trade execution.
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse-animation {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        
        .pulse-dot {
          animation: pulse-animation 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero; 