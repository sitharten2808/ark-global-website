import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 px-4 md:px-8 pt-4 md:pt-8 pb-4">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-blue-50/60 backdrop-blur-md rounded-full shadow-lg max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold">
          <span className="text-gray-800">ARK</span>
          <span className="text-blue-500">GLOBAL</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 text-gray-700">
          <a 
            href="#hero" 
            onClick={(e) => handleSmoothScroll(e, 'hero')}
            className="hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a 
            href="#company" 
            onClick={(e) => handleSmoothScroll(e, 'company')}
            className="hover:text-blue-500 transition-colors"
          >
            Corporate
          </a>
          <a 
            href="#business" 
            onClick={(e) => handleSmoothScroll(e, 'business')}
            className="hover:text-blue-500 transition-colors"
          >
            Business
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="hover:text-blue-500 transition-colors"
          >
            Reach Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 z-40">
          <div className="flex flex-col py-4">
            <a 
              href="#hero" 
              onClick={(e) => handleSmoothScroll(e, 'hero')}
              className="px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors"
            >
              Home
            </a>
            <a 
              href="#company" 
              onClick={(e) => handleSmoothScroll(e, 'company')}
              className="px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors"
            >
              Corporate
            </a>
            <a 
              href="#business" 
              onClick={(e) => handleSmoothScroll(e, 'business')}
              className="px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors"
            >
              Business
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors"
            >
              Reach Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;