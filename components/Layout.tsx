import React, { useState, useEffect } from 'react';
import { Page, NavItem } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: '부자학 개론', page: Page.PHILOSOPHY },
  { label: '컨설팅 프로그램', page: Page.SERVICES },
  { label: '세미나 후원', page: Page.ABOUT },
  { label: '상담 및 문의', page: Page.CONTACT },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-primary shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer flex items-center gap-2 group" 
          onClick={() => onNavigate(Page.HOME)}
        >
          <div className="w-8 h-8 bg-secondary rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-300"></div>
          <span className={`font-serif font-bold text-xl sm:text-2xl tracking-tight ${
            isScrolled || isMobileMenuOpen ? 'text-white' : 'text-primary sm:text-white'
          }`}>
            강남부자<span className="text-secondary">연구소</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                currentPage === item.page 
                  ? 'text-secondary font-bold' 
                  : (isScrolled ? 'text-gray-300' : 'text-gray-200')
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
             onClick={() => onNavigate(Page.CONTACT)}
             className="bg-secondary hover:bg-amber-600 text-white px-5 py-2 rounded-none font-bold text-sm transition-colors"
          >
            무료 진단
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-gray-800 animate-fade-in-down">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-base font-medium py-2 ${
                  currentPage === item.page ? 'text-secondary' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
             onClick={() => {
               onNavigate(Page.CONTACT);
               setIsMobileMenuOpen(false);
             }}
             className="bg-secondary text-white py-3 w-full text-center font-bold"
            >
              무료 진단 신청하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
           <span className="font-serif font-bold text-2xl text-white block mb-4">
            강남부자<span className="text-secondary">연구소</span>
          </span>
          <p className="text-sm leading-relaxed mb-4 max-w-sm">
            대한민국 1%를 위한 프리미엄 자산 관리 솔루션. <br/>
            세금은 줄이고, 자산은 달러로 지킵니다.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-secondary transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-secondary transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-secondary transition-colors cursor-pointer"></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-serif font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>서울시 강남구 테헤란로 313</li>
            <li>Tel: 010-2393-7093</li>
            <li>Email: pytkorea@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">개인정보처리방침</li>
            <li className="hover:text-white cursor-pointer">이용약관</li>
            <li className="hover:text-white cursor-pointer">오시는 길</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        &copy; {new Date().getFullYear()} Gangnam Wealth Lab. All rights reserved.
      </div>
    </footer>
  );
};