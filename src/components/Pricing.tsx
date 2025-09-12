import React, { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "R2,500",
      period: "one-time",
      description: "Perfect for small businesses and personal projects",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month support",
        "Social media integration"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      price: "R7,500",
      period: "one-time",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "3 months support",
        "Analytics integration",
        "Performance optimization"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R15,000+",
      period: "project-based",
      description: "Custom solutions for large-scale applications",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Database integration",
        "API development",
        "Advanced security",
        "6 months support",
        "Performance monitoring",
        "Dedicated project manager"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className={`text-xl text-white/80 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Choose the perfect plan for your project. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${plan.popular ? 'lg:scale-105' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Card Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${plan.popular ? 'opacity-20' : ''}`} />
              
              {/* Card */}
              <div className={`relative glass-container rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 border ${
                plan.popular ? 'border-purple-500/50' : 'border-white/10'
              } hover:border-white/20`}>
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-white/60 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-white/70 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:shadow-purple-500/25`
                      : 'glass-button text-white border border-white/20 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  {plan.popular ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Get Started</span>
                    </span>
                  ) : (
                    'Choose Plan'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <p className="text-white/60 mb-6">Need a custom solution? Let's discuss your project.</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 glass-button text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40"
          >
            <span>Contact Us</span>
            <div className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;