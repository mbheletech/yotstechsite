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

/* Enhanced 3D Hover Effects */
.hover\:translateZ-2:hover {
  transform: translateZ(2px);
}

.hover\:translateZ-5:hover {
  transform: translateZ(5px);
}

.hover\:scale-115:hover {
  transform: scale(1.15);
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

/* White Glow Effects */
@keyframes white-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    opacity: 0.6;
  }
  50% { 
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.3);
    opacity: 1;
  }
}

.animate-white-glow {
  animation: white-glow 3s ease-in-out infinite;
}

.white-glow {
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2);
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

/* Dark mode optimizations */
@media (prefers-color-scheme: dark) {
  .glass-nav {
    background: rgba(0, 0, 0, 0.6);
  }
  
  .glass-container {
    background: rgba(255, 255, 255, 0.02);
  }
}