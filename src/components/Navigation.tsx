import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu when hiding navbar
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Get Quote', href: '#quote' }
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 cinematic-fade ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-20 opacity-0 scale-95'
    }`}>
      <div className="glass-nav rounded-2xl px-8 py-4 border border-white/20 backdrop-blur-xl bg-black/30 shadow-2xl white-glow hover:shadow-white/20 transition-all duration-500">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center space-x-2 hover:opacity-90 transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src="/src/assets/Copilot_20250912_185659-removebg-preview.png" 
                alt="YOTS Tech Logo" 
                className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert"
              />
              <span className="text-white font-thin text-lg md:text-xl tracking-wider hidden sm:inline">
                YOTS<span className="font-light">Tech</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white block px-4 py-3 text-base font-light tracking-wide transition-all duration-300 hover:bg-white/10 rounded-xl hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Logo - Bottom of menu */}
              <div className="pt-4 mt-4 border-t border-white/10">
                <div className="flex items-center justify-center space-x-3 px-4 py-2">
                  <img 
                    src="/src/assets/Copilot_20250912_185659-removebg-preview.png" 
                    alt="YOTS Tech Logo" 
                    className="h-6 w-auto object-contain filter brightness-0 invert opacity-70"
                  />
                  <span className="text-white/70 font-thin text-sm tracking-wider">
                    YOTS<span className="font-light">Tech</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/90 p-2 transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="mt-2 px-4 pt-4 pb-4 space-y-2 glass-nav rounded-2xl border border-white/20 backdrop-blur-xl bg-black/30 white-glow">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white block px-4 py-3 text-base font-light tracking-wide transition-all duration-300 hover:bg-white/10 rounded-xl hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;