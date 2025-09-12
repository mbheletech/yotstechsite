import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      } ${isMenuOpen ? 'bg-black/90' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">YotsTech</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="glass-button text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="glass-button text-white block px-3 py-2 rounded-lg text-base font-medium w-full text-left hover:bg-white/10 transition-all duration-200 mt-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;