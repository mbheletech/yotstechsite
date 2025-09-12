@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  font-weight: 300;
}

/* Glassmorphism Components */
.glass-nav {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-container {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-button {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* 3D Scroll Progress Bar */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981);
  transform-origin: left;
  z-index: 9999;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

/* Custom Animations */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px);
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-20px);
    opacity: 0.8;
  }
}

@keyframes float-3d {
  0%, 100% { 
    transform: translateY(0px) rotateX(0deg) rotateY(0deg);
  }
  33% { 
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
  }
  66% { 
    transform: translateY(-5px) rotateX(-5deg) rotateY(-5deg);
  }
}

@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    opacity: 0.6;
  }
  50% { 
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3);
    opacity: 1;
  }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* White Glow Animation */
@keyframes white-glow {
  0%, 100% { 
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    opacity: 0.8;
  }
  50% { 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3);
    opacity: 1;
  }
}

@keyframes parallax-float {
  0%, 100% { 
    transform: translateY(0px) rotateX(0deg) rotateY(0deg);
  }
  50% { 
    transform: translateY(-8px) rotateX(2deg) rotateY(2deg);
  }
}
/* Utility Classes */
.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-3d {
  animation: float-3d 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

.animate-white-glow {
  animation: white-glow 3s ease-in-out infinite;
}

.animate-parallax-float {
  animation: parallax-float 5s ease-in-out infinite;
}

.white-glow {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}
/* Glow Text Effect */
.glow-text {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
}

.glow-text-hover:hover {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
  transition: text-shadow 0.3s ease-out;
}

/* 3D Transform Utilities */
.transform-3d {
  transform-style: preserve-3d;
}

.perspective-1000 {
  perspective: 1000px;
}

.perspective-2000 {
  perspective: 2000px;
}

.perspective-3000 {
  perspective: 3000px;
}
/* Enhanced 3D Hover Effects */
.hover\:translateZ-2:hover {
  transform: translateZ(2px);
}

.hover\:translateZ-5:hover {
  transform: translateZ(5px);
}

.hover\:translateZ-10:hover {
  transform: translateZ(10px);
}
.hover\:scale-115:hover {
  transform: scale(1.15);
}

.hover\:scale-120:hover {
  transform: scale(1.2);
}
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

/* Selection Color */
::selection {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Focus Styles */
input:focus, textarea:focus, button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
}

/* Smooth Transitions */
.transition-smooth {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 3D Hover Effects */
.hover-3d:hover {
  transform: translateY(-3px) rotateX(5deg) rotateY(5deg) translateZ(15px);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px) translateZ(10px);
}

.hover-rotate:hover {
  transform: rotateY(10deg) rotateX(5deg) translateZ(20px);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Loading States */
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.animate-shimmer {
  animation: shimmer 2s linear infinite;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  background-size: 200px 100%;
}

/* Cinematic Transitions */
.cinematic-fade {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-transition {
  background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%);
  transition: background 1s ease-in-out;
}

/* Enhanced Parallax Effects */
@keyframes float-smooth {
  0%, 100% { 
    transform: translateY(0px) rotateX(0deg) rotateY(0deg);
  }
  50% { 
    transform: translateY(-15px) rotateX(2deg) rotateY(2deg);
  }
}

.animate-float-smooth {
  animation: float-smooth 6s ease-in-out infinite;
}

/* Typography Enhancements */
.text-balance {
  text-wrap: balance;
}

/* Hide elements */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Responsive Design Helpers */
@media (max-width: 768px) {
  .glass-nav {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
  
  .glass-container {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
}

/* Parallax Layers */
.parallax-slow {
  transform: translateZ(-100px) scale(1.1);
}

.parallax-fast {
  transform: translateZ(50px);
}


/* Performance Optimizations */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

/* ===== COMPREHENSIVE RESPONSIVE DESIGN ===== */

/* Mobile First Approach - Base styles optimized for mobile */

/* Extra Small Mobile (320px - 479px) */
@media (max-width: 479px) {
  /* Base Typography */
  html { font-size: 14px; }
  
  /* Container Spacing */
  .max-w-7xl { padding-left: 1rem; padding-right: 1rem; }
  .max-w-6xl { padding-left: 1rem; padding-right: 1rem; }
  
  /* Section Spacing */
  section { padding-top: 3rem; padding-bottom: 3rem; }
  
  /* Navigation Optimizations */
  .glass-nav {
    padding: 0.75rem 1rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    margin: 0.5rem;
    width: calc(100% - 1rem);
  }
  
  /* Typography Scaling */
  .text-3xl { font-size: 1.5rem; line-height: 2rem; }
  .text-4xl { font-size: 1.875rem; line-height: 2.25rem; }
  .text-5xl { font-size: 2.25rem; line-height: 2.5rem; }
  .text-6xl { font-size: 2.5rem; line-height: 1; }
  
  /* Button Optimizations */
  button, .glass-button, .modern-button {
    min-height: 44px;
    min-width: 44px;
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }
  
  /* Grid Adjustments */
  .grid { gap: 1rem; }
  .md\:grid-cols-2, .md\:grid-cols-3, .md\:grid-cols-4 {
    grid-template-columns: 1fr;
  }
  
  /* 3D Effects Reduction for Performance */
  .transform-3d { transform-style: flat; }
  .perspective-1000, .perspective-2000, .perspective-3000 { perspective: none; }
}

/* Small Mobile (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  html { font-size: 15px; }
  
  .max-w-7xl, .max-w-6xl { padding-left: 1.5rem; padding-right: 1.5rem; }
  
  section { padding-top: 4rem; padding-bottom: 4rem; }
  
  .glass-nav {
    padding: 1rem 1.5rem;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    margin: 0.75rem;
    width: calc(100% - 1.5rem);
  }
  
  /* Typography */
  .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .text-5xl { font-size: 2.5rem; line-height: 1; }
  .text-6xl { font-size: 3rem; line-height: 1; }
  
  /* Touch Targets */
  button, .glass-button {
    min-height: 48px;
    padding: 1rem 2rem;
  }
  
  .grid { gap: 1.5rem; }
}

/* Tablet Portrait (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  html { font-size: 16px; }
  
  .max-w-7xl, .max-w-6xl { padding-left: 2rem; padding-right: 2rem; }
  
  section { padding-top: 5rem; padding-bottom: 5rem; }
  
  .glass-nav {
    padding: 1rem 2rem;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    margin: 1rem;
    width: calc(100% - 2rem);
  }
  
  /* Grid Systems */
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
  
  .grid { gap: 2rem; }
  
  /* Touch Optimizations */
  button, .glass-button {
    min-height: 48px;
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  
  /* Reduced 3D Effects for Touch Devices */
  .hover-3d:hover { transform: translateY(-2px) scale(1.02); }
  .hover-rotate:hover { transform: scale(1.05); }
}

/* Desktop/Laptop (1024px+) */
@media (min-width: 1024px) {
  html { font-size: 16px; }
  
  section { padding-top: 8rem; padding-bottom: 8rem; }
  
  .glass-nav {
    padding: 1rem 2rem;
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
  }
  
  /* Full Grid Systems */
  .lg\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
  
  .grid { gap: 2rem; }
  
  /* Full 3D Effects */
  .transform-3d { transform-style: preserve-3d; }
  .perspective-1000 { perspective: 1000px; }
  .perspective-2000 { perspective: 2000px; }
  .perspective-3000 { perspective: 3000px; }
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  .max-w-7xl { max-width: 80rem; }
  section { padding-top: 10rem; padding-bottom: 10rem; }
  .grid { gap: 3rem; }
}

/* ===== COMPONENT-SPECIFIC RESPONSIVE STYLES ===== */

/* Navigation Responsive Behavior */
@media (max-width: 767px) {
  .glass-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    width: 100%;
    border-radius: 0;
    transform: none;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.8);
    z-index: 50;
  }
  
  /* Mobile Menu Adjustments */
  .md\:hidden { display: block; }
  .hidden.md\:block { display: none; }
}

/* Hero Section Responsive */
@media (max-width: 1023px) {
  /* Reduce phone prominence on tablets and mobile */
  .hero-phone {
    opacity: 0.3;
    transform: scale(0.7);
    z-index: 5;
  }
  
  /* Center content on smaller screens */
  .hero-content {
    text-align: center;
    max-width: 100%;
  }
}

/* Services Section Grid */
@media (max-width: 767px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Pricing Cards Responsive */
@media (max-width: 767px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .pricing-card {
    max-width: 100%;
    margin: 0 auto;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .pricing-card:nth-child(3) {
    grid-column: 1 / -1;
    max-width: 400px;
    margin: 0 auto;
  }
}

/* Contact Section Responsive */
@media (max-width: 1023px) {
  .contact-laptop {
    transform: scale(0.8);
    opacity: 0.8;
  }
}

/* ===== ACCESSIBILITY & TOUCH OPTIMIZATIONS ===== */

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
  /* Disable hover effects on touch devices */
  .hover\:scale-105:hover,
  .hover\:scale-110:hover,
  .hover\:scale-115:hover,
  .hover\:scale-120:hover {
    transform: none;
  }
  
  /* Enhance tap targets */
  button, a, .glass-button {
    min-height: 48px;
    min-width: 48px;
  }
  
  /* Reduce complex animations */
  .animate-float-3d,
  .animate-parallax-float {
    animation: none;
  }
}

/* High DPI Display Optimizations */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .glass-nav,
  .glass-container,
  .glass-button {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}

/* Reduced Motion Preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animate-float,
  .animate-float-3d,
  .animate-pulse-glow,
  .animate-white-glow,
  .animate-parallax-float {
    animation: none;
  }
}

/* Print Styles */
@media print {
  .glass-nav,
  .scroll-progress,
  button {
    display: none;
  }
  
  body {
    background: white;
    color: black;
  }
  
  section {
    page-break-inside: avoid;
    padding: 1rem 0;
  }
}

/* Dark Mode Optimizations */
@media (prefers-color-scheme: dark) {
  .glass-nav {
    background: rgba(0, 0, 0, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .glass-container {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);

/* Responsive Spacing Utilities */
.space-responsive { gap: clamp(1rem, 3vw, 2rem); }
.p-responsive { padding: clamp(1rem, 4vw, 2rem); }
.m-responsive { margin: clamp(0.5rem, 2vw, 1rem); }

/* Container Queries Support (Future-proofing) */
@supports (container-type: inline-size) {
  .container-responsive {
  }
  
  @container (max-width: 400px) {
    .container-responsive .text-4xl {
      font-size: 1.5rem;
    }
  }
}

/* ===== RESPONSIVE DESIGN BREAKPOINTS ===== */

/* Mobile First Approach - Base styles for mobile (320px+) */

/* Small Mobile Devices (320px - 479px) */
@media (max-width: 479px) {
  /* Typography */
  h1 { font-size: 1.875rem !important; line-height: 2.25rem !important; }
  h2 { font-size: 2.25rem !important; line-height: 2.5rem !important; }
  h3 { font-size: 1.5rem !important; line-height: 2rem !important; }
  
  /* Spacing */
  .container { padding-left: 1rem; padding-right: 1rem; }
  section { padding-top: 4rem; padding-bottom: 4rem; }
  
  /* Navigation */
  .glass-nav {
    padding: 0.75rem 1rem;
    backdrop-filter: blur(10px);