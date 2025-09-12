import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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

  const services = [
    {
      icon: Monitor,
      title: "Websites",
      description: "Modern, responsive websites that captivate and convert",
      features: ["Responsive Design", "SEO Optimized", "Lightning Fast", "CMS Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "iOS and Android apps built with precision and purpose",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"]
    },
    {
      icon: Globe,
      title: "Web Apps",
      description: "Scalable and interactive platforms that grow with your business",
      features: ["Cloud-Based", "Real-Time Updates", "API Integration", "Advanced Analytics"]
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.06) 0%, transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 60%),
          linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)
        `,
        transform: `
          perspective(2000px)
          rotateX(${Math.sin(scrollY * 0.0008) * 1.5}deg)
          translateZ(${scrollY * -0.1}px)
        `,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Enhanced 3D Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Lines */}
        <div 
          className="absolute inset-0 opacity-8 parallax-slow"
          style={{
            transform: `translateY(${scrollY * 0.03}px) translateZ(-300px) rotateZ(${scrollY * 0.01}deg)`,
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 180px,
                rgba(255, 255, 255, 0.12) 181px,
                rgba(255, 255, 255, 0.12) 182px
              )
            `
          }}
        />
        
        {/* 3D Service Icons Background */}
        {services.map((_, index) => (
          <div
            key={index}
            className="absolute w-40 h-40 opacity-8 animate-parallax-float"
            style={{
              left: `${15 + index * 30}%`,
              top: `${25 + index * 20}%`,
              transform: `
                translateZ(${-200 + Math.sin(scrollY * 0.002 + index) * 100}px)
                rotateX(${scrollY * 0.06 + index * 30}deg)
                rotateY(${scrollY * 0.04 + index * 45}deg)
                translateY(${Math.sin(scrollY * 0.003 + index) * 50}px)
              `
            }}
          >
            <div className="w-full h-full bg-white/15 rounded-3xl blur-lg animate-white-glow" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 
            className={`text-4xl md:text-6xl font-thin text-white mb-8 tracking-tight transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
            style={{
              transform: `
                translateY(${isVisible ? 0 : 30}px)
                translateZ(${isVisible ? 80 : 0}px)
                rotateX(${Math.sin(scrollY * 0.002) * 2}deg)
                rotateY(${Math.cos(scrollY * 0.0015) * 1}deg)
              `
            }}
          >
            Our <span className="font-light text-white animate-white-glow">Services</span>
          </h2>
          <p 
            className={`text-lg text-white/60 max-w-3xl mx-auto font-light tracking-wide transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
            style={{
              transform: `
                translateY(${isVisible ? 0 : 25}px)
                translateZ(${isVisible ? 50 : -50}px)
                rotateX(${Math.sin(scrollY * 0.0025) * 1.5}deg)
              `
            }}
          >
            From concept to deployment, we deliver digital solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className={`group transition-all duration-1000 ${
                index === 0 ? 'delay-600' : index === 1 ? 'delay-800' : 'delay-1000'
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transform-3d`}
              style={{
                transform: `
                  translateY(${isVisible ? 0 : 30}px)
                  translateZ(${isVisible ? (hoveredService === index ? 120 : 40) : -80}px)
                  rotateX(${hoveredService === index ? -12 : Math.sin(scrollY * 0.0015 + index) * 4}deg)
                  rotateY(${hoveredService === index ? 12 : Math.cos(scrollY * 0.0015 + index) * 4}deg)
                  scale(${hoveredService === index ? 1.12 : 1})
                `,
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="relative glass-container rounded-3xl p-8 border border-white/10 transition-all duration-700 hover:border-white/40 hover:shadow-white/20 hover:shadow-3xl group transform-3d white-glow">
                {/* 3D Floating Icon */}
                <div className="relative mb-8 perspective-2000">
                  <div 
                    className="w-24 h-24 mx-auto glass-button rounded-2xl flex items-center justify-center transition-all duration-500 transform-3d hover-rotate"
                    style={{
                      transform: `
                        rotateX(${hoveredService === index ? 25 : Math.sin(scrollY * 0.003 + index) * 10}deg)
                        rotateY(${hoveredService === index ? -25 : Math.cos(scrollY * 0.0025 + index) * 10}deg)
                        translateZ(${hoveredService === index ? 40 : 0}px)
                        scale(${hoveredService === index ? 1.15 : 1})
                      `
                    }}
                  >
                    <service.icon className="text-white w-12 h-12 animate-white-glow" />
                    {/* White Icon Glow */}
                    <div className={`absolute inset-0 bg-white/30 rounded-2xl blur-xl transition-opacity duration-700 ${
                      hoveredService === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-light text-white tracking-wide glow-text">
                    {service.title}
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed tracking-wide">
                    {service.description}
                  </p>
                  
                  {/* Feature List */}
                  <div className="space-y-3 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className={`flex items-center justify-center space-x-3 transition-colors duration-300 ${
                          hoveredService === index ? 'text-white/90' : 'text-white/60'
                        }`}
                        style={{
                          transform: `translateZ(${hoveredService === index ? 15 : 0}px) rotateX(${hoveredService === index ? 5 : 0}deg)`,
                          transition: `transform 0.4s ease-out ${featureIndex * 0.1}s`
                        }}
                      >
                        <div className="w-1 h-1 bg-white rounded-full animate-white-glow" />
                        <span className="text-sm font-light tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-white/8 rounded-3xl transition-opacity duration-700 ${
                  hoveredService === index ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Enhanced Border Glow */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-700 ${
                  hoveredService === index ? 'shadow-white/30 shadow-3xl' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;