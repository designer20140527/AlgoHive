'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-[#090112] py-16 overflow-hidden border-t border-[#32245a]/40">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#100528] to-[#090112] opacity-60"></div>
      
      <div className="max-w-[1140px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* 左侧 - Logo和文本 */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-5">
              <Image 
                src="/images/logo-purple.png" 
                alt="AlgoHive Logo" 
                width={36} 
                height={36} 
              />
              <span className="text-xl font-[family-name:var(--font-circular-medium)] text-white">AlgoHive</span>
            </div>
            <p className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 leading-relaxed max-w-md">
              Stay on top of the market, make informed trading decisions, and take your trading to the next level with AlgoHive AI.
            </p>
          </div>
          
          {/* 右侧 - 信息和社交媒体链接 */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-[family-name:var(--font-circular-medium)] text-white mb-5">
              Information
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => { e.preventDefault(); const section = document.getElementById('features'); if (section) { window.scrollTo({ top: section.offsetTop, behavior: 'smooth' }); } }} className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#token" onClick={(e) => { e.preventDefault(); const section = document.getElementById('token'); if (section) { window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' }); } }} className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 hover:text-white transition-colors">
                  Tokenomics
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-[family-name:var(--font-circular-medium)] text-white mb-5">
              Socials
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://x.com/AlgoHive_" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://t.me/AlgoHive_Official" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-circular-book)] text-[#efe0ff]/70 hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#2a1d40] text-center">
          <p className="text-sm font-[family-name:var(--font-circular-book)] text-[#efe0ff]/50">
            ©2025 AlgoHive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 