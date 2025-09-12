import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 to-black py-16 border-t border-white/10">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/Copilot_20250912_185659-removebg-preview.png" 
                alt="YOTS Tech Logo" 
                className="h-8 w-auto object-contain filter brightness-0 invert"
              />
              <div className="text-2xl font-thin tracking-wide text-white">
                YOTS<span className="font-light">Tech</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md font-light tracking-wide">
              Excellence in Digital Solutions. We build world-class websites, mobile apps, and web applications for businesses that demand the best.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-light text-white tracking-wide">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-light tracking-wide text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-light text-white tracking-wide">Services</h4>
            <div className="space-y-3">
              {['Web Development', 'Mobile Apps', 'Web Applications', 'UI/UX Design'].map((service) => (
                <div key={service} className="text-white/60 font-light text-sm tracking-wide">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/60 font-light tracking-wide text-sm">
              © 2025 YOTS Tech Developers — Excellence in Digital Solutions.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="group p-3 glass-button rounded-full border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-4 h-4 text-white/60 group-hover:text-pink-400 transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="group p-3 glass-button rounded-full border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-4 h-4 text-white/60 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://wa.me/27123456789"
              className="group p-3 glass-button rounded-full border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="w-4 h-4 text-white/60 group-hover:text-green-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;