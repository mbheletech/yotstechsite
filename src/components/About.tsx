import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative py-32 bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Smooth gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
        
        {/* RGB Accent Lighting */}
        <div 
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: '6s'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-500/6 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: '8s',
            animationDelay: '3s'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          >
            <h2 className="text-4xl md:text-5xl font-thin text-white tracking-tight">
              About <span className="font-light bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">YOTS Tech</span>
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-white/80 font-thin leading-relaxed tracking-wide">
                YOTS Tech Developers delivers premium websites, apps, and platforms with Apple-grade precision.
              </p>
              <p className="text-lg text-white/60 font-thin leading-relaxed tracking-wide">
                We specialize in creating sophisticated digital experiences that drive business growth. Our commitment to excellence ensures every project meets the highest standards of quality and innovation.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "50+", label: "Projects" },
                { number: "100%", label: "Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-thin bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-sm font-thin tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Device Showcase */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          >
            <div className="relative perspective-1000">
              {/* Laptop */}
              <div 
                className="relative w-80 h-48 mx-auto mb-8"
                style={{
                  transform: `
                    perspective(1000px)
                    rotateX(${isVisible ? 15 : 0}deg)
                    rotateY(${isVisible ? -10 : 0}deg)
                    translateZ(${isVisible ? 20 : 0}px)
                  `
                }}
              >
                <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl border border-gray-600/50 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-5/6 bg-black rounded-t-2xl p-4 border-b border-gray-600">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                      <div className="text-white/60 font-thin text-sm animate-pulse">Coding Excellence</div>
                    </div>
                  </div>
                  {/* Base */}
                  <div className="w-full h-1/6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-2xl" />
                </div>
              </div>
              
              {/* Tablet */}
              <div 
                className="absolute top-16 right-8 w-32 h-44"
                style={{
                  transform: `
                    perspective(800px)
                    rotateX(${isVisible ? -5 : 0}deg)
                    rotateY(${isVisible ? 20 : 0}deg)
                    translateZ(${isVisible ? 30 : 0}px)
                  `
                }}
              >
                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-2xl border border-gray-700/50 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-green-500/10 rounded-2xl p-3 flex items-center justify-center">
                    <div className="text-white/50 font-thin text-xs animate-pulse">Mobile First</div>
                  </div>
                </div>
              </div>
              
              {/* Phone */}
              <div 
                className="absolute top-32 left-8 w-20 h-36"
                style={{
                  transform: `
                    perspective(600px)
                    rotateX(${isVisible ? 10 : 0}deg)
                    rotateY(${isVisible ? -15 : 0}deg)
                    translateZ(${isVisible ? 40 : 0}px)
                  `
                }}
              >
                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-2xl border border-gray-700/50 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-2 flex items-center justify-center">
                    <div className="text-white/40 font-thin text-xs animate-pulse">Apps</div>
                  </div>
                </div>
              </div>
              
              {/* Glowing Code Lines */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-pulse"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${10 + i * 8}%`,
                      height: `${20 + i * 5}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;