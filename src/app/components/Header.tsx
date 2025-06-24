'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add smooth scrolling functionality
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    let targetPosition = 0;
    
    if (sectionId !== 'top') {
      const section = document.getElementById(sectionId);
      if (section) {
        // Add offset for token section to prevent header overlap
        const headerOffset = sectionId === 'token' ? 80 : 0;
        targetPosition = section.offsetTop - headerOffset;
      }
    }
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8">
      <div className="max-w-[1140px] mx-auto">
        <div className="bg-[#1a0e2e]/80 backdrop-blur-sm py-4 px-5 flex items-center justify-between w-full rounded-2xl border border-[#32245a]/40">
          {/* Logo and Brand Name */}
          <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="flex items-center gap-3">
            <Image 
              src="/images/logo-purple.png" 
              alt="AlgoHive Logo" 
              width={40} 
              height={40} 
              className="w-8 h-8"
            />
            <span className="font-[family-name:var(--font-circular-medium)] text-xl text-[#efe0ff]">AlgoHive</span>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors font-[family-name:var(--font-circular-book)]">
              Home
            </a>
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors font-[family-name:var(--font-circular-book)]">
              Features
            </a>
            <a href="#token" onClick={(e) => scrollToSection(e, 'token')} className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors font-[family-name:var(--font-circular-book)]">
              Tokenomics
            </a>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://x.com/AlgoHive_COIN_" target="_blank" rel="noopener noreferrer" className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://t.me/AlgoHive_Official" target="_blank" rel="noopener noreferrer" className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors" aria-label="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#efe0ff]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 mt-3">
          <div className="bg-[#1a0e2e]/80 backdrop-blur-sm rounded-xl border border-[#32245a]/40 p-4 max-w-[1140px] mx-auto">
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                onClick={(e) => scrollToSection(e, 'top')}
                className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors font-[family-name:var(--font-circular-book)] py-2"
              >
                Home
              </a>
              <a 
                href="#features" 
                onClick={(e) => scrollToSection(e, 'features')}
                className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors font-[family-name:var(--font-circular-book)] py-2"
              >
                Features
              </a>
              <a 
                href="#token" 
                onClick={(e) => scrollToSection(e, 'token')}
                className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors font-[family-name:var(--font-circular-book)] py-2"
              >
                Tokenomics
              </a>
              
              {/* Social icons for mobile */}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[#2a1e3a]">
                <a href="https://x.com/AlgoHive_COIN_" target="_blank" rel="noopener noreferrer" className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="https://t.me/AlgoHive_Official" target="_blank" rel="noopener noreferrer" className="text-[#b8a2d4] hover:text-[#efe0ff] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
