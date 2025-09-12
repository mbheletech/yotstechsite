import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Smartphone, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 animate-gradient" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left space-y-8 z-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Premium</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
                for Modern Business
              </span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              We craft exceptional websites, mobile apps, and web applications that drive growth and deliver results. 
              Experience the difference of working with true professionals.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 glass-button text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
            >
              <span>View Services</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
            {[
              { icon: Zap, label: "Fast Delivery" },
              { icon: Shield, label: "Secure & Reliable" },
              { icon: Smartphone, label: "Mobile First" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-white/60">
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-light">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - 3D Phone Mockup */}
        <div className="relative lg:block hidden">
          <div className="relative perspective-1000">
            {/* Main Phone */}
            <div 
              className="relative w-80 h-96 mx-auto transform-3d transition-transform duration-700 hover:scale-105"
              style={{
                transform: `
                  perspective(1000px)
                  rotateX(${mousePosition.y * 10 - 5}deg)
                  rotateY(${mousePosition.x * 10 - 5}deg)
                  translateZ(20px)
                `
              }}
            >
              <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-3xl border border-gray-600/50 shadow-2xl overflow-hidden">
                {/* Screen */}
                <div className="w-full h-5/6 bg-black rounded-t-3xl p-4 relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-white/80 font-semibold">YOTS Tech</div>
                      <div className="text-white/60 text-sm">Premium Apps</div>
                    </div>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                </div>
                
                {/* Bottom Section */}
                <div className="w-full h-1/6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-3xl flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10 animate-pulse-glow" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-10 -right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Mobile Phone Element - Subtle Background */}
        <div className="lg:hidden absolute top-1/2 right-4 transform -translate-y-1/2 opacity-30 z-10">
          <div className="w-40 h-48 bg-gradient-to-b from-gray-800/50 to-black/50 rounded-2xl border border-gray-600/30">
            <div className="w-full h-5/6 bg-black/50 rounded-t-2xl p-3">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;