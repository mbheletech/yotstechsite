import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-40">
      <div 
        className="h-full bg-white transition-all duration-300 ease-out animate-white-glow"
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: `0 0 15px rgba(255, 255, 255, ${scrollProgress / 100 * 0.6}), 0 0 30px rgba(255, 255, 255, ${scrollProgress / 100 * 0.3})`,
          background: `rgba(255, 255, 255, ${0.8 + scrollProgress / 100 * 0.2})`
        }}
      />
      
      {/* Pulse effect at progress point */}
      <div 
        className="absolute top-0 h-full w-0.5 bg-white animate-white-glow"
        style={{ 
          left: `${scrollProgress}%`,
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.9), 0 0 16px rgba(255, 255, 255, 0.5)'
        }}
      />
    </div>
  );
};

export default ScrollProgress;