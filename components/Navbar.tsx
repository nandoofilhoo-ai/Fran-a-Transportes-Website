
import React from 'react';
import { NAV_LINKS, LogoIcon, GlobeIcon } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <nav 
        className={`w-full max-w-6xl flex justify-between items-center px-8 py-4 transition-all duration-500 rounded-full border border-white/20 backdrop-blur-md ${
          isScrolled ? 'bg-white/40 shadow-xl py-3' : 'bg-white/10'
        }`}
      >
        {/* Logo Section - Atualizada para o estilo do snippet correto */}
        <div className="flex items-center space-x-3">
          <LogoIcon className="w-12 h-12 text-white" />
          <div className="text-xl font-bold text-white tracking-tight leading-none">
            França<br />
            <span className="text-lg font-bold">Transportes</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
          <button className="text-white hover:opacity-70 transition-opacity">
            <GlobeIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
