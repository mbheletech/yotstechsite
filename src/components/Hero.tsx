import React from 'react';
import { ArrowRight, Smartphone, Zap, Code, Palette } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <Code className="h-12 w-12 text-blue-400" />
      </div>
      <div className="absolute top-40 right-20 animate-float-3d opacity-40" style={{ animationDelay: '1s' }}>
        <Palette className="h-16 w-16 text-purple-400" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }}>
        <Zap className="h-10 w-10 text-yellow-400" />
      </div>

      {/* Phone Mockup */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block animate-parallax-float">
        <div className="relative">
          <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl border border-gray-700">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
              <div className="text-center z-10">
                <Smartphone className="h-16 w-16 text-white mx-auto mb-4 animate-white-glow" />
                <p className="text-white text-sm font-medium">Mobile First</p>
                <p className="text-blue-200 text-xs">Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent glow-text">
              Digital Vision
            </span>
            <span className="block">Into Reality</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            We craft exceptional mobile apps, stunning websites, and powerful digital solutions 
            that drive your business forward in the modern digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('services')}
              className="glass-button px-8 py-4 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => scrollToSection('portfolio')}
              className="border border-white/20 px-8 py-4 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;