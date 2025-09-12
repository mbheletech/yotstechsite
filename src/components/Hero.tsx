import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseNearPhone, setIsMouseNearPhone] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Check if mouse is near phone area (right side of screen)
      const phoneArea = clientX > innerWidth * 0.6;
      setIsMouseNearPhone(phoneArea);
      
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 2,
        y: (clientY / innerHeight - 0.5) * 2
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Enhanced 3D calculations for cinematic parallax feel
  const cameraDistance = Math.max(1600 - scrollY * 1.5, 1000);
  const rotationX = scrollY * 0.08 + (isMouseNearPhone ? mousePosition.y * 8 : mousePosition.y * 3) + Math.sin(scrollY * 0.005) * 2;
  const rotationY = scrollY * 0.04 + (isMouseNearPhone ? mousePosition.x * 12 : mousePosition.x * 6) + Math.cos(scrollY * 0.003) * 1.5;
  const translateZ = Math.sin(scrollY * 0.008) * 30 + scrollY * 0.15;
  const phoneScale = Math.max(1 - scrollY * 0.0006, 0.8);
  const phoneFloat = Math.sin(Date.now() * 0.0008) * 4;
  
  // Mouse following effect for phone
  const mouseFollowX = isMouseNearPhone ? mousePosition.x * 15 : 0;
  const mouseFollowY = isMouseNearPhone ? mousePosition.y * 10 : 0;
  
  const phoneTransform = {
    transform: `
      perspective(${cameraDistance}px)
      translateZ(${translateZ}px)
      rotateX(${rotationX}deg)
      rotateY(${rotationY}deg)
      translateY(${scrollY * 0.15 + phoneFloat + mouseFollowY}px)
      translateX(${mouseFollowX}px)
      scale(${phoneScale * (isMouseNearPhone ? 1.05 : 1)})
    `,
    transition: isMouseNearPhone ? 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const handleGetStartedClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 60%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
        `
      }}
    >
      {/* Enhanced Background with Parallax Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Lines - Background Layer */}
        <div 
          className="absolute inset-0 opacity-8 parallax-slow"
          style={{
            transform: `translateY(${scrollY * 0.05}px) translateZ(-200px) rotateZ(${scrollY * 0.02}deg)`,
            background: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 120px,
                rgba(255, 255, 255, 0.03) 121px,
                rgba(255, 255, 255, 0.03) 122px
              )
            `
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-white-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `
                translateY(${Math.sin(scrollY * 0.008 + i) * 25}px)
                translateX(${Math.cos(scrollY * 0.006 + i) * 18}px)
                translateZ(${Math.random() * 80 - 40}px)
                rotateZ(${scrollY * 0.05 + i * 10}deg)
              `,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* White Accent Lighting */}
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-3xl animate-white-glow"
          style={{
            animationDuration: '8s',
            transform: `translateZ(${scrollY * -0.08}px) rotateZ(${scrollY * 0.02}deg)`
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-white-glow"
          style={{
            animationDuration: '10s',
            animationDelay: '3s',
            transform: `translateZ(${scrollY * -0.12}px) rotateZ(${scrollY * -0.015}deg)`
          }}
        />
      </div>

      {/* Enhanced 3D iPhone with Dynamic Uplight Effect */}
      <div 
        className="absolute right-4 md:right-20 top-1/2 transform -translate-y-1/2 z-10 md:z-20 group perspective-3000 opacity-30 md:opacity-100"
        style={phoneTransform}
      >
        {/* Dynamic Uplight Effect */}
        <div 
          className={`absolute -bottom-28 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-t from-white/25 via-white/15 to-transparent rounded-full blur-3xl animate-white-glow ${isMouseNearPhone ? 'opacity-100' : 'opacity-70'}`}
          style={{
            animationDuration: '5s',
            transform: `translateX(-50%) scale(${1 + scrollY * 0.0003}) rotateZ(${scrollY * 0.01}deg)`
          }}
        />
        <div 
          className={`absolute -bottom-22 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-white/35 to-transparent rounded-full blur-2xl ${isMouseNearPhone ? 'opacity-100' : 'opacity-60'}`}
          style={{
            transform: `translateX(-50%) scale(${1 + scrollY * 0.0002})`
          }}
        />
        
        <div className={`relative w-40 md:w-56 h-[320px] md:h-[480px] transform-3d transition-all duration-700 ${isMouseNearPhone ? 'scale-110 white-glow' : ''}`}>
          {/* iPhone Body with Enhanced Realism and Hover Effects */}
          <div className={`absolute inset-0 bg-gradient-to-b from-gray-800 via-black to-gray-800 rounded-[3rem] shadow-2xl transition-all duration-700 ${isMouseNearPhone ? 'shadow-white/20 shadow-3xl border-transparent' : 'border-transparent'}`}>
            {/* Dynamic Notch */}
            <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full transition-colors duration-500 ${isMouseNearPhone ? 'border-gray-600' : 'border-gray-800'}`} />
            
            {/* Enhanced Screen */}
            <div className={`absolute top-4 left-4 right-4 bottom-4 bg-black rounded-[2.5rem] overflow-hidden transition-all duration-700 ${isMouseNearPhone ? 'border-white/30' : 'border-gray-800/30'}`}>
              {/* Dynamic Screen Content */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ${isMouseNearPhone ? 'from-white/12 to-white/5' : 'from-white/8 to-white/3'}`}>
                <div className="p-6 h-full flex flex-col">
                  {/* Enhanced Status Bar */}
                  <div className="flex justify-between items-center text-white/80 text-xs mb-8">
                    <span className="font-thin">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white/60 rounded-sm animate-white-glow" />
                      <div className="w-4 h-2 bg-white/70 rounded-sm animate-white-glow" />
                      <div className="w-4 h-2 bg-white rounded-sm animate-white-glow" />
                    </div>
                  </div>
                  
                  {/* YOTS Branding with White Glow */}
                  <div className="text-center flex-1 flex flex-col justify-center space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                      <img 
                        src="/src/assets/Copilot_20250912_185659-removebg-preview.png" 
                        alt="YOTS Tech Logo" 
                        className="w-16 h-auto object-contain filter brightness-0 invert animate-white-glow"
                      />
                      <div className="text-white font-thin text-2xl tracking-widest animate-white-glow glow-text">
                        YOTS
                      </div>
                    </div>
                    <div className="w-16 h-px bg-white mx-auto animate-white-glow" />
                    <div className="text-white/70 text-sm font-thin tracking-wider">
                      Tech Developers
                    </div>
                    
                    {/* White Glowing Logo Effect */}
                    <div className="relative">
                      <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center border border-white/30 transition-all duration-700 ${isMouseNearPhone ? 'bg-white/20' : 'bg-white/15'}`}>
                        <div className="w-12 h-12 bg-white/90 rounded-xl animate-white-glow" />
                      </div>
                      <div className="absolute inset-0 bg-white/25 rounded-2xl blur-xl animate-white-glow" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Screen Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br via-transparent to-transparent rounded-[2.5rem] transition-all duration-700 ${isMouseNearPhone ? 'from-white/20' : 'from-white/15'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-white/8 via-transparent to-white/5 animate-white-glow rounded-[2.5rem]" />
            </div>
            
            {/* iPhone Hardware Details */}
            <div className="absolute left-0 top-20 w-1 h-8 bg-gray-600 rounded-r-sm" />
            <div className="absolute left-0 top-32 w-1 h-12 bg-gray-600 rounded-r-sm" />
            <div className="absolute left-0 top-48 w-1 h-12 bg-gray-600 rounded-r-sm" />
            <div className="absolute right-0 top-28 w-1 h-16 bg-gray-600 rounded-l-sm" />
            
            {/* Enhanced Reflection */}
            <div className={`absolute inset-0 bg-gradient-to-br via-transparent to-transparent rounded-[3rem] transition-all duration-700 ${isMouseNearPhone ? 'from-white/25' : 'from-white/20'}`} />
          </div>
          
          {/* Dynamic Shadow System */}
          <div 
            className={`absolute inset-0 blur-3xl -z-10 transition-all duration-700 ${isMouseNearPhone ? 'bg-black/50' : 'bg-black/70'}`}
            style={{
              transform: `translateY(${35 + scrollY * 0.08}px) translateZ(-50px) scale(1.3) rotateX(${scrollY * 0.02}deg)`,
            }}
          />
          <div 
            className="absolute inset-0 bg-black/40 blur-4xl -z-20"
            style={{
              transform: `translateY(${55 + scrollY * 0.12}px) translateZ(-100px) scale(1.5) rotateX(${scrollY * 0.015}deg)`,
            }}
          />
        </div>
      </div>

      {/* Main Content - Left Side */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div 
          className="space-y-8 text-center lg:text-left"
          style={{
            transform: `translateZ(${30 + scrollY * -0.03}px) translateY(${scrollY * 0.08}px) rotateX(${scrollY * 0.005}deg)`
          }}
        >
          {/* Enhanced Headlines */}
          <div 
            className="space-y-4 md:space-y-6"
            style={{
              transform: `translateZ(${50 + scrollY * -0.08}px) rotateX(${scrollY * 0.006}deg) rotateY(${scrollY * 0.002}deg)`
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-thin leading-tight tracking-tight text-white glow-text drop-shadow-2xl">
              Building World-Class
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-light text-white glow-text animate-white-glow drop-shadow-2xl">
              Digital Solutions
            </h2>
          </div>

          {/* Enhanced Subtext */}
          <p 
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 font-thin leading-relaxed tracking-wide drop-shadow-lg"
            style={{
              transform: `translateZ(${35 + scrollY * -0.06}px) rotateX(${scrollY * 0.003}deg)`
            }}
          >
            Websites. Mobile Apps. Web Apps. Designed for businesses that demand excellence.
          </p>

          {/* Enhanced CTA Button */}
          <div 
            className="pt-6 md:pt-4"
            style={{
              transform: `translateZ(${40 + scrollY * -0.05}px) rotateX(${scrollY * 0.004}deg)`
            }}
          >
            <button 
              onClick={handleGetStartedClick}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-thin bg-white text-black hover:bg-black hover:text-white rounded-full overflow-hidden transform transition-all duration-700 hover:scale-115 hover-3d border-2 border-white shadow-2xl hover:shadow-white/30 hover:shadow-3xl white-glow cursor-pointer"
            >
              <span className="relative z-10 tracking-wider">Get Started</span>
              <div className="absolute inset-0 bg-black/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </button>
          </div>
        </div>
        
        {/* Right side reserved for phone */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10 animate-white-glow"
        style={{
          transform: `translateX(-50%) translateZ(${15 + scrollY * -0.03}px) rotateX(${scrollY * 0.01}deg)`,
          opacity: Math.max(1 - scrollY * 0.015, 0)
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/70 to-transparent animate-white-glow" />
          <ChevronDown size={24} className="text-white/70 animate-white-glow" />
          <div className="text-xs text-white/60 font-thin tracking-wider">Scroll</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;