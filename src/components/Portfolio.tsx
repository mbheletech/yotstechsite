import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Code, Star } from 'lucide-react';

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

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

  const projects = [
    {
      title: "Divine Commerce Platform",
      description: "A faith-based e-commerce platform connecting Christian businesses worldwide with modern shopping experiences and integrated donation systems.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Church Management System",
      description: "Comprehensive church administration platform featuring member management, event coordination, and live streaming capabilities.",
      tech: ["Vue.js", "Express", "PostgreSQL", "WebRTC"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Prayer Network Mobile App",
      description: "Global prayer request network allowing believers to share, pray for, and track answered prayers in real-time community.",
      tech: ["React Native", "Firebase", "GraphQL", "Push Notifications"],
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Youth Ministry Portal",
      description: "Interactive platform for youth engagement featuring games, Bible studies, event planning, and mentor connections.",
      tech: ["Angular", "NestJS", "Socket.io", "Redis"],
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-yellow-400 via-white to-blue-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className={`text-xl text-white/80 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Witness the divine intersection of faith and technology through our transformative digital solutions.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Project Display */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${projects[activeProject].color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="text-white" size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{projects[activeProject].title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{projects[activeProject].description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[activeProject].tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${projects[activeProject].color} rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300`}>
                      <Code size={18} />
                      <span>View Project</span>
                    </button>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className={`space-y-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setActiveProject(index)}
                className={`group relative cursor-pointer transition-all duration-300 ${
                  activeProject === index 
                    ? 'scale-105' 
                    : 'hover:scale-102'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-0 ${
                  activeProject === index ? 'opacity-30' : 'group-hover:opacity-20'
                } transition-opacity duration-300`} />
                
                <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                  activeProject === index 
                    ? 'border-white/30 bg-white/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}>
                      <Code className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                      <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "∞", label: "Divine Inspiration" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;