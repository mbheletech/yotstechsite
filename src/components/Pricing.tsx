import React, { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const plans = [
    {
      name: "Starter",
      icon: Star,
      price: "R1,500",
      description: "For individuals & small businesses",
      features: [
        "Responsive Website",
        "5 Pages Included",
        "Basic SEO Setup",
        "Contact Form",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Basic",
      icon: Zap,
      price: "R3,500",
      description: "For growing teams",
      features: [
        "Everything in Starter",
        "Mobile App (iOS/Android)",
        "Advanced SEO",
        "Analytics Dashboard",
        "Priority Support",
        "API Integration"
      ],
      popular: true
    },
    {
      name: "Premium",
      icon: Crown,
      price: "R6,500",
      description: "For enterprises & custom builds",
      features: [
        "Everything in Basic",
        "Custom Web Application",
        "Advanced Features",
        "24/7 Support",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.07) 0%, transparent 60%),
          radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0a 0%, #000000 50%, #0a0a0a 100%)
        `,
        transform: `
          perspective(2000px)
          rotateX(${Math.sin(scrollY * 0.0008) * 2}deg)
          translateZ(${scrollY * -0.15}px)
        `,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Enhanced 3D Floating Cubes with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-6 parallax-slow"
          style={{
            transform: `translateY(${scrollY * 0.02}px) translateZ(-400px) rotateZ(${scrollY * 0.008}deg)`,
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* 3D Pricing Cubes Background */}
        {plans.map((_, index) => (
          <div
            key={index}
            className={`absolute w-24 h-24 transition-all duration-1000 animate-parallax-float ${
              isVisible ? 'opacity-12' : 'opacity-0'
            }`}
            style={{
              left: `${15 + index * 35}%`,
              top: `${25 + index * 15}%`,
              transform: `
                translateY(${scrollY * 0.1 * (index + 1)}px) 
                rotateX(${scrollY * 0.06 + index * 15}deg) 
                rotateY(${scrollY * 0.08 + index * 25}deg)
                translateZ(${Math.sin(scrollY * 0.002 + index) * 60}px)
              `,
              transition: 'transform 0.2s ease-out, opacity 1s ease-out'
            }}
          >
            <div className="w-full h-full bg-white/25 rounded-2xl blur-lg animate-white-glow" />
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
                translateZ(${isVisible ? 100 : 0}px)
                rotateX(${Math.sin(scrollY * 0.002) * 2.5}deg)
                rotateY(${Math.cos(scrollY * 0.0015) * 1.5}deg)
              `
            }}
          >
            Choose Your <span className="font-light text-white animate-white-glow">Plan</span>
          </h2>
          <p 
            className={`text-lg text-white/60 max-w-3xl mx-auto font-light tracking-wide transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
            style={{
              transform: `
                translateY(${isVisible ? 0 : 25}px)
                translateZ(${isVisible ? 70 : -50}px)
                rotateX(${Math.sin(scrollY * 0.0025) * 2}deg)
              `
            }}
          >
            Transparent pricing for businesses of all sizes. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`group relative transition-all duration-1000 ${
                index === 0 ? 'delay-600' : index === 1 ? 'delay-800' : 'delay-1000'
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${
                plan.popular ? 'md:scale-105' : ''
              } transform-3d`}
              style={{
                transform: `
                  translateY(${isVisible ? 0 : 30}px)
                  translateZ(${isVisible ? (hoveredPlan === index ? 140 : plan.popular ? 70 : 40) : -80}px)
                  rotateX(${hoveredPlan === index ? -15 : Math.sin(scrollY * 0.0015 + index) * 4}deg)
                  rotateY(${hoveredPlan === index ? (index === 1 ? 0 : index === 0 ? 10 : -10) : Math.cos(scrollY * 0.0015 + index) * 4}deg)
                  scale(${hoveredPlan === index ? 1.12 : plan.popular ? 1.05 : 1})
                `,
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  style={{
                    transform: `
                      translateX(-50%)
                      translateZ(${hoveredPlan === index ? 40 : 20}px)
                      rotateX(${hoveredPlan === index ? 10 : 0}deg)
                    `
                  }}
                >
                  <div className="glass-button px-4 py-2 rounded-full border border-white/40 bg-white/15 white-glow animate-white-glow">
                    <span className="text-sm font-light text-white tracking-wide">Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`relative glass-container rounded-3xl p-8 border transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-white/40 bg-gradient-to-b from-white/12 to-transparent shadow-white/20 shadow-3xl white-glow' 
                  : 'border-white/15 hover:border-white/50 hover:shadow-white/20 hover:shadow-2xl white-glow'
              } transform-3d`}>
                {/* Plan Icon */}
                <div className="text-center mb-8">
                  <div 
                    className="w-20 h-20 mx-auto glass-button rounded-2xl flex items-center justify-center mb-4 transform-3d hover-rotate"
                    style={{
                      transform: `
                        rotateX(${hoveredPlan === index ? 30 : Math.sin(scrollY * 0.003 + index) * 10}deg)
                        rotateY(${hoveredPlan === index ? -30 : Math.cos(scrollY * 0.0025 + index) * 10}deg)
                        translateZ(${hoveredPlan === index ? 35 : 0}px)
                        scale(${hoveredPlan === index ? 1.2 : 1})
                      `,
                      transition: 'transform 0.7s ease-out'
                    }}
                    onClick={() => window.open('https://wa.me/27727089348?text=Hi%20YOTS%20Tech!%20I%20would%20like%20to%20get%20started%20with%20the%20' + plan.name + '%20plan.', '_blank')}
                  >
                    <plan.icon className="text-white w-10 h-10 animate-white-glow" />
                    <div className={`absolute inset-0 bg-white/40 rounded-2xl blur-xl transition-opacity duration-700 ${
                      hoveredPlan === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-light text-white tracking-wide mb-2 glow-text">{plan.name}</h3>
                  <p className="text-white/70 font-light text-sm tracking-wide">{plan.description}</p>
                </div>

                {/* Price */}
                <div 
                  className="text-center mb-8"
                  style={{
                    transform: `translateZ(${hoveredPlan === index ? 25 : 0}px) rotateX(${hoveredPlan === index ? 5 : 0}deg)`,
                    transition: 'transform 0.4s ease-out'
                  }}
                >
                  <div className={`text-4xl font-thin mb-2 text-white glow-text ${hoveredPlan === index ? 'animate-white-glow' : ''}`}>
                    {plan.price}
                  </div>
                  <div className="text-white/60 font-light text-sm tracking-wide">Starting from</div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center space-x-3"
                      style={{
                        transform: `translateZ(${hoveredPlan === index ? 20 : 0}px) rotateX(${hoveredPlan === index ? 3 : 0}deg)`,
                        transition: `transform 0.4s ease-out ${featureIndex * 0.1}s`
                      }}
                    >
                      <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 border border-white/40 animate-white-glow">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/80 font-light text-sm tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-2xl font-light tracking-wide transition-all duration-300 transform-3d ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-white/95 hover:shadow-white/30 hover:shadow-3xl white-glow'
                    : 'glass-button border border-white/30 text-white hover:border-white/60 white-glow'
                }`}
                  style={{
                    transform: `translateZ(${hoveredPlan === index ? 30 : 0}px) rotateX(${hoveredPlan === index ? 5 : 0}deg)`,
                    transition: 'transform 0.4s ease-out'
                  }}
                >
                  Get Started
                </button>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-white/10 rounded-3xl transition-opacity duration-700 pointer-events-none ${
                  hoveredPlan === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
          style={{
            transform: `
              translateY(${isVisible ? 0 : 25}px)
              translateZ(${isVisible ? 60 : -60}px)
              rotateX(${Math.sin(scrollY * 0.002) * 1.5}deg)
            `
          }}
        >
          <p className="text-white/70 font-light tracking-wide mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <button 
            className="bg-black text-white hover:bg-white hover:text-black px-10 py-5 rounded-full border border-white/40 font-light tracking-wide transition-all duration-700 transform-3d hover:scale-115 hover:shadow-white/30 hover:shadow-3xl white-glow hover-3d"
            style={{
              transform: 'translateZ(0px)',
              transition: 'transform 0.7s ease-out'
            }}
            onClick={() => window.open('https://wa.me/27727089348?text=Hi%20YOTS%20Tech!%20I%20would%20like%20to%20discuss%20a%20custom%20solution%20for%20my%20project.', '_blank')}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;