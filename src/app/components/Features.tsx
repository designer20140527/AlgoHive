'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { BackgroundBeams } from '@/components/background-beams';

const featureItems = [
  {
    id: 'challenges',
    heading: 'Challenges',
    content: 'Traders frequently contend with an overwhelming overabundance of data from disparate sources. The inherent challenge lies in discerning actionable intelligence from market noise, mitigating behavioral biases, and synthesizing pertinent information to facilitate optimal decision-making.'
  },
  {
    id: 'vision',
    heading: 'Vision',
    content: 'Our vision is to revolutionize the trading landscape by leveraging AI\'s transformative power, providing traders with unparalleled clarity and actionable insights. We aim to seamlessly connect complex market data with strategic decision-making, thereby democratizing access to successful trading outcomes.'
  },
  {
    id: 'solution',
    heading: 'Solution',
    content: 'AlgoHive AI introduces a pioneering AI-driven trading companion that integrates advanced machine learning capabilities with insightful emotional intelligence principles. Our system comprehensively analyzes extensive market data, simultaneously identifying and mitigating common behavioral biases inherent in trading.'
  },
  {
    id: 'approach',
    heading: 'Approach',
    content: 'Our approach centers on leveraging cutting-edge AI methodologies to conduct real-time analysis of intricate market patterns, sentiment dynamics, and evolving trading behaviors. This in-depth analysis furnishes traders with clear, actionable insights, optimizing their decision-making processes.'
  },
  {
    id: 'impact',
    heading: 'Impact',
    content: 'Our mission is to democratize efficient trading for individuals across all proficiency levels through a robust AI-powered solution suite. With AlgoHive AI, we are pioneering the future of trading, where the synergistic integration of advanced technology and human intuition yields superior trading outcomes.'
  }
];

const Features = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isFeaturesLocked, setIsFeaturesLocked] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleScroll = () => {
    if (!featuresRef.current) return;
    
    // Get necessary measurements
    const featuresRect = featuresRef.current.getBoundingClientRect();
    const featuresTop = featuresRect.top;
    const windowHeight = window.innerHeight;
    
    // Calculate section positions
    const enteringFeatures = featuresTop <= 0;
    const leavingFeatures = featuresTop <= -windowHeight * 4.5; // 增加一些余量，确保第5张 slide 完全显示
    
    // Lock/unlock scroll and update active slide
    if (enteringFeatures && !leavingFeatures) {
      if (!isFeaturesLocked) {
        setIsFeaturesLocked(true);
      }
      
      // Calculate which slide to show based on scroll position
      const scrollProgress = Math.abs(featuresTop) / windowHeight;
      const slideIndex = Math.min(Math.floor(scrollProgress + 0.05), featureItems.length - 1);
      
      // 优化节流机制，确保重要的滚动事件不会被忽略
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      if (!isScrolling || activeSlide !== slideIndex) {
        setIsScrolling(true);
        setActiveSlide(slideIndex);
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
          scrollTimeoutRef.current = null;
        }, 50); // 减少节流时间，提高响应性
      }
      
    } else if (leavingFeatures || !enteringFeatures) {
      if (isFeaturesLocked) {
        setIsFeaturesLocked(false);
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isFeaturesLocked, isScrolling, activeSlide]); // 添加 activeSlide 依赖项以确保状态更新同步
  
  return (
    <div
      ref={featuresRef}
      id="features"
      className="relative w-full"
      style={{ height: '500vh' }} // 确保容器高度为 500vh
    >
      <div
        className={`sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#090112]`}
      >
        {/* Background Beams 效果 */}
        <div className="absolute inset-0 z-0">
          <BackgroundBeams className="h-full">
            <div className="hidden"></div>
          </BackgroundBeams>
        </div>
        
        {featureItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-800 ease-out
              ${activeSlide === index ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
          >
            <div className="slide__content relative mx-auto w-[80%] max-w-5xl flex flex-col items-center justify-center">
              <div className="slide__header text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-6 overflow-hidden">
                  <span className="title-line inline-block overflow-hidden">
                    <span className={`inline-block transform transition-all duration-600 ease-out
                      ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                      {item.heading}
                    </span>
                  </span>
                </h2>
                <p className={`text-lg md:text-xl max-w-3xl mx-auto font-[family-name:var(--font-circular-book)] 
                  text-[#efe0ff]/80 leading-relaxed transition-all duration-700 ease-out
                  ${activeSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {item.content}
                </p>
              </div>
              
              <div className={`slide__figure w-full max-w-4xl h-[400px] overflow-hidden transition-all duration-500 ease-out
                ${activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="slide__img h-full w-full flex items-center justify-center relative">
                  <Image 
                    src={`/images/image-${index + 1}.png`}
                    alt={`${item.heading} illustration`}
                    fill
                    className="object-contain opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
          {featureItems.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeSlide ? 'bg-[#a663f2] w-6' : 'bg-[#a663f2]/30'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 