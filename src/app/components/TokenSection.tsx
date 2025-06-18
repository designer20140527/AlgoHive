'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const TokenSection = () => {
  const largeCircleRef = useRef<HTMLDivElement>(null);
  const mediumCircleRef = useRef<HTMLDivElement>(null);
  const smallCircleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 入场动画观察器
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

  useEffect(() => {
    // 动画设置
    const animateCircles = () => {
      const largeCircle = largeCircleRef.current;
      const mediumCircle = mediumCircleRef.current;
      const smallCircle = smallCircleRef.current;
      
      let largeDeg = 0;
      let mediumDeg = 0;
      let smallDeg = 0;
      
      const animate = () => {
        if (largeCircle && mediumCircle && smallCircle) {
          // 大圈顺时针旋转 (慢速)
          largeDeg += 0.05;
          largeCircle.style.transform = `rotate(${largeDeg}deg)`;
          
          // 中圈逆时针旋转 (中速)
          mediumDeg -= 0.08;
          mediumCircle.style.transform = `rotate(${mediumDeg}deg)`;
          
          // 小圈顺时针旋转 (快速)
          smallDeg += 0.12;
          smallCircle.style.transform = `rotate(${smallDeg}deg)`;
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    animateCircles();
  }, []);
  
  return (
    <section ref={sectionRef} id="token" className="bg-[#090112] pt-24 pb-48 relative overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0"></div>
      
      <div className="max-w-[1140px] mx-auto px-4 relative z-10">
        {/* 标题和介绍文本 */}
        <div className={`text-center mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-6">
            The $ALHV Token
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-[family-name:var(--font-circular-book)] text-[#efe0ff]/80 leading-relaxed">
            The AlgoHive AI ecosystem is underpinned by the $ALHV token, a decentralized, community-governed digital asset 
            serving as the foundational pillar for our infrastructure, community engagement, and decentralized governance.
          </p>
        </div>
        
        {/* 带旋转圆圈的代币图片 */}
        <div className={`relative flex justify-center items-center mb-20 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          {/* 大圆圈 */}
          <div 
            ref={largeCircleRef}
            className="absolute w-[500px] h-[500px] rounded-full border border-[#5d45c0]/30"
          >
            {/* 大圆上的点 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#6f49e3] rounded-full"></div>
          </div>
          
          {/* 中等圆圈 */}
          <div 
            ref={mediumCircleRef}
            className="absolute w-[380px] h-[380px] rounded-full border border-[#6f49e3]/40"
          >
            {/* 中圆上的点 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#8e6cf5] rounded-full"></div>
          </div>
          
          {/* 小圆圈 */}
          <div 
            ref={smallCircleRef}
            className="absolute w-[260px] h-[260px] rounded-full border border-[#a663f2]/60"
          >
            {/* 小圆上的点 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#c085ff] rounded-full"></div>
          </div>
          
          {/* 中心代币图片 */}
          <div className="relative z-10 w-[180px] h-[180px] flex items-center justify-center">
            <Image 
              src="/images/coin.png" 
              alt="ALHV Token" 
              width={180}
              height={180}
              className="object-contain pulse-effect"
            />
          </div>
        </div>
        
        {/* 三个功能项 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 被动收益 */}
          <div className={`bg-[#1a0e2e]/50 backdrop-blur-sm p-8 rounded-xl border border-[#32245a]/40 transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="flex flex-col items-start text-left">
              <div className="w-14 h-14 rounded-full bg-[#241546] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a663f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v8"></path>
                  <path d="m4.93 10.93 1.41 1.41"></path>
                  <path d="M2 18h2"></path>
                  <path d="M20 18h2"></path>
                  <path d="m19.07 10.93-1.41 1.41"></path>
                  <path d="M22 22H2"></path>
                  <path d="m8 22 4-11 4 11"></path>
                </svg>
              </div>
              <h3 className="text-xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-3">
                Passive Earning
              </h3>
              <p className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 leading-relaxed">
                Users can stake $ALHV tokens to participate in revenue sharing, receiving 20% of platform fees and subscriptions generated.
              </p>
            </div>
          </div>
          
          {/* 治理 */}
          <div className={`bg-[#1a0e2e]/50 backdrop-blur-sm p-8 rounded-xl border border-[#32245a]/40 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="flex flex-col items-start text-left">
              <div className="w-14 h-14 rounded-full bg-[#241546] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a663f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <path d="M1 10h22"></path>
                </svg>
              </div>
              <h3 className="text-xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-3">
                Governance
              </h3>
              <p className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 leading-relaxed">
                Staked $ALHV grants holders governance rights, enabling them to submit proposals and vote on critical decisions pertaining to the strategic development, expansion, and growth of AlgoHive AI.
              </p>
            </div>
          </div>
          
          {/* 订阅福利 */}
          <div className={`bg-[#1a0e2e]/50 backdrop-blur-sm p-8 rounded-xl border border-[#32245a]/40 transition-all duration-700 delay-600 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="flex flex-col items-start text-left">
              <div className="w-14 h-14 rounded-full bg-[#241546] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a663f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
                  <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
                  <line x1="12" y1="22" x2="12" y2="13"></line>
                  <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-[family-name:var(--font-circular-medium)] text-[#efe0ff] mb-3">
                Subscription Benefits
              </h3>
              <p className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 leading-relaxed">
                Utilize $ALHV for subscriptions to unlock premium features and exclusive content at a preferential 10% discount.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`        
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-counterclockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(166, 99, 242, 0.4));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 15px rgba(166, 99, 242, 0.6));
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(166, 99, 242, 0.4));
          }
        }
        
        .pulse-effect {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TokenSection; 