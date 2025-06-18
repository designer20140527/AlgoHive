'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const PowerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 当组件进入视图时设置为可见
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 一旦可见，就不再观察
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        // 当组件有10%进入视图时触发
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="power" className="bg-[#090112] py-24">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Heading and Intro Text */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-6">
            Unleash the Power of AI-Driven Trading
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-[family-name:var(--font-circular-book)] text-[#efe0ff]/80 leading-relaxed">
            Embrace the next evolution in crypto trading with our advanced AI agents, collaborating synergistically to deliver precise, real-time market intelligence.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item 1 - Top Left */}
          <div className={`bg-[#1a0e2e]/50 backdrop-blur-sm p-8 rounded-lg md:rounded-tl-3xl border border-[#32245a]/40 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="h-[180px] mb-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[180px] h-[180px]">
                    <Image 
                      src="/images/image-6.png" 
                      alt="Specialized AI Agents"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-40 h-40 rounded-full bg-[#a663f2] blur-2xl"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-3">
              Specialized AI Agents
            </h3>
            <p className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 leading-relaxed">
              Each AI agent is specialized in a distinct facet of trading analytics, operating in concert to deliver highly accurate, optimally tuned, and rigorously verified market and trading insights autonomously.
            </p>
          </div>

          {/* Item 2 - Top Right */}
          <div className={`bg-[#1a0e2e]/50 backdrop-blur-sm p-8 rounded-lg md:rounded-tr-3xl border border-[#32245a]/40 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="h-[180px] mb-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[180px] h-[180px]">
                    <Image 
                      src="/images/image-7.png" 
                      alt="Advanced Machine Learning"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-40 h-40 rounded-full bg-[#a663f2] blur-2xl"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-3">
              Advanced Machine Learning
            </h3>
            <p className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 leading-relaxed">
              Leveraging sophisticated deep learning networks trained on extensive historical and real-time market performance data.
            </p>
          </div>

          {/* Item 3 - Bottom Left */}
          <div className={`bg-[#1a0e2e]/50 backdrop-blur-sm p-8 rounded-lg md:rounded-bl-3xl border border-[#32245a]/40 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="h-[180px] mb-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[180px] h-[180px]">
                    <Image 
                      src="/images/image-8.png" 
                      alt="Real-Time Processing"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-40 h-40 rounded-full bg-[#a663f2] blur-2xl"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-3">
              Real-Time Processing
            </h3>
            <p className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 leading-relaxed">
              Utilizing a robust, high-performance cloud infrastructure for the real-time processing of massive volumes of market data.
            </p>
          </div>

          {/* Item 4 - Bottom Right */}
          <div className={`bg-[#1a0e2e]/50 backdrop-blur-sm p-8 rounded-lg md:rounded-br-3xl border border-[#32245a]/40 transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="h-[180px] mb-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[180px] h-[180px]">
                    <Image 
                      src="/images/image-9.png" 
                      alt="Interoperable Communication"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-40 h-40 rounded-full bg-[#a663f2] blur-2xl"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-3">
              Interoperable Communication
            </h3>
            <p className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 leading-relaxed">
              An accessible API provides a rich stream of granular information layers, designed for seamless integration into diverse data-dependent ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerSection; 