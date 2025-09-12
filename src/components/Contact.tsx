import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Smartphone, MessageCircle } from 'lucide-react';

const GetQuotation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 2,
        y: (clientY / innerHeight - 0.5) * 2
      });
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
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3D laptop calculations
  const laptopRotationX = scrollY * 0.02 + mousePosition.y * 2;
  const laptopRotationY = scrollY * 0.01 + mousePosition.x * 3;
  const laptopFloat = Math.sin(Date.now() * 0.001) * 2;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/27727089348?text=Hi%20YOTS%20Tech!%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project.', '_blank');
  };

  return (
    <section 
      id="quote" 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 30% 80%, rgba(255, 255, 255, 0.06) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0a 0%, #000000 100%)
        `,
        transform: `
          perspective(2000px)
          rotateX(${Math.sin(scrollY * 0.0008) * 1.5}deg)
          translateZ(${scrollY * -0.08}px)
        `,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Tech Icons */}
        {[Monitor, Smartphone, MessageCircle].map((Icon, index) => (
          <div
            key={index}
            className="absolute opacity-8 animate-parallax-float"
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
              transform: `
                translateY(${scrollY * 0.06 * (index + 1)}px)
                rotateX(${scrollY * 0.03 + index * 12}deg)
                rotateY(${scrollY * 0.04 + index * 15}deg)
                translateZ(${Math.sin(scrollY * 0.0015 + index) * 50}px)
              `
            }}
          >
            <Icon size={70} className="text-white animate-white-glow" />
          </div>
        ))}
        
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-4 parallax-slow"
          style={{
            transform: `translateY(${scrollY * 0.015}px) translateZ(-500px) rotateZ(${scrollY * 0.005}deg)`,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px'
          }}
        />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-thin text-white mb-8 tracking-tight transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
            style={{
              transform: `
                translateY(${isVisible ? 0 : 30}px)
                translateZ(${isVisible ? 80 : 0}px)
                rotateX(${Math.sin(scrollY * 0.0015) * 2.5}deg)
                rotateY(${Math.cos(scrollY * 0.001) * 1}deg)
              `
            }}
          >
            Get A <span className="font-light text-white animate-white-glow">Quotation Now</span>
          </h2>
          <p className={`text-lg text-white/60 max-w-3xl mx-auto font-light tracking-wide transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
            style={{
              transform: `
                translateY(${isVisible ? 0 : 25}px)
                translateZ(${isVisible ? 60 : -40}px)
                rotateX(${Math.sin(scrollY * 0.002) * 2}deg)
              `
            }}
          >
            Ready to bring your digital vision to life? Click the button below to start your project with us.
          </p>
        </div>

        {/* 3D Laptop with CTA Button */}
        <div className="flex justify-center items-center">
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{
              transform: `
                perspective(1500px)
                rotateX(${laptopRotationX + 15}deg)
                rotateY(${laptopRotationY}deg)
                translateY(${laptopFloat}px)
                translateZ(${isVisible ? 50 : -50}px)
                scale(${isVisible ? 1 : 0.8})
              `,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* 3D Laptop */}
            <div className="relative w-96 h-64 mx-auto group cursor-pointer hover:scale-110 transition-all duration-700">
              {/* Laptop Base */}
              <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-3xl shadow-2xl transform-3d">
                {/* Trackpad */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-lg border border-gray-600" />
              </div>
              
              {/* Laptop Screen */}
              <div className="relative w-full h-56 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl border border-gray-600/50 shadow-2xl overflow-hidden">
                {/* Screen Bezel */}
                <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-white/3 flex items-center justify-center">
                    {/* CTA Button in Screen */}
                    <button
                      onClick={handleWhatsAppClick}
                      className="group relative px-8 py-4 text-lg font-light bg-black text-white hover:bg-white hover:text-black rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-110 tracking-wide border border-white/40 hover:shadow-white/30 hover:shadow-3xl white-glow hover-3d"
                      style={{
                        transform: 'translateZ(20px)',
                        transition: 'transform 0.7s ease-out'
                      }}
                    >
                      <div className="relative z-10 flex items-center justify-center space-x-2">
                        <MessageCircle size={20} />
                        <span>Get Quote on WhatsApp</span>
                      </div>
                      <div className="absolute inset-0 bg-white/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </button>
                  </div>
                  
                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                </div>
                
                {/* Camera */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full border border-gray-700" />
              </div>
              
              {/* Laptop Hinge */}
              <div className="absolute bottom-8 w-full h-2 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 rounded-sm" />
              
              {/* Enhanced Shadow System */}
              <div 
                className="absolute inset-0 bg-black/60 blur-3xl -z-10 group-hover:bg-black/40 transition-all duration-700"
                style={{
                  transform: `translateY(40px) translateZ(-50px) scale(1.2) rotateX(${laptopRotationX * 0.5}deg)`,
                }}
              />
              <div 
                className="absolute inset-0 bg-black/30 blur-4xl -z-20"
                style={{
                  transform: `translateY(60px) translateZ(-100px) scale(1.4) rotateX(${laptopRotationX * 0.3}deg)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="glass-container rounded-3xl p-8 border border-white/15 hover:border-white/30 hover:shadow-white/20 hover:shadow-3xl transition-all duration-700 transform-3d white-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-8 tracking-wide glow-text">Contact Information</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  content: "072 708 9348",
                  action: "https://wa.me/27727089348"
                },
                {
                  icon: Monitor,
                  title: "Email",
                  content: "yotstech@gmail.com",
                  action: "mailto:yotstech@gmail.com"
                },
                {
                  icon: Smartphone,
                  title: "Phone",
                  content: "065 811 4250",
                  action: "tel:+27658114250"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  className="group flex flex-col items-center space-y-3 p-4 rounded-2xl hover:bg-white/12 transition-all duration-700 transform-3d hover:translateZ-10 hover:scale-110 hover-3d"
                  style={{
                    transform: `translateZ(${index * 8}px)`,
                    transition: 'transform 0.5s ease-out'
                  }}
                >
                  <div className="w-14 h-14 glass-button rounded-xl flex items-center justify-center group-hover:scale-120 transition-all duration-700 border border-white/30 group-hover:border-white/50 white-glow">
                    <contact.icon className="text-white w-6 h-6 animate-white-glow" />
                    <div className="absolute inset-0 bg-white/15 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-light group-hover:text-white/95 transition-colors duration-500 tracking-wide glow-text">
                      {contact.title}
                    </div>
                    <div className="text-white/70 text-sm font-light tracking-wide">{contact.content}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuotation;