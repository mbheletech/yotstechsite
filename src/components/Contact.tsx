import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get Your Quote
            </span>
          </h2>
          <p className={`text-xl text-white/80 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Ready to transform your digital presence? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="glass-container rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-button rounded-xl text-white placeholder-white/50 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-button rounded-xl text-white placeholder-white/50 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-button rounded-xl text-white border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="website">Website Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="web-app">Web Application</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="custom">Custom Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass-button rounded-xl text-white placeholder-white/50 border border-white/20 focus:border-white/40 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:info@yotstech.com"
                  className="flex items-center space-x-4 p-4 glass-container rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-white/60 text-sm">info@yotstech.com</div>
                  </div>
                </a>

                <a
                  href="tel:+27727089348"
                  className="flex items-center space-x-4 p-4 glass-container rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Call Us</div>
                    <div className="text-white/60 text-sm">+27 72 708 9348</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/27727089348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass-container rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">WhatsApp</div>
                    <div className="text-white/60 text-sm">Quick Response</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 glass-container rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-white/60 text-sm">South Africa</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-container rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Response Time</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Email</span>
                  <span className="text-green-400 font-medium">Within 2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">WhatsApp</span>
                  <span className="text-green-400 font-medium">Within 30 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Phone Call</span>
                  <span className="text-green-400 font-medium">Immediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;