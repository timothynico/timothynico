
import { useState, useEffect } from 'react';
import { Mail, Linkedin, Code, Database, Brain, Globe, Users, MessageCircle, Calendar, MapPin, ExternalLink, Github, Award, Trophy, Star, Zap } from 'lucide-react';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Generate sparkles
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 50; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 3
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-deep via-ocean-darker to-ocean-dark relative overflow-x-hidden">
      {/* Sparkles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-ocean-aqua rounded-full animate-pulse opacity-60"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
              boxShadow: '0 0 6px rgba(0, 206, 209, 0.8)'
            }}
          />
        ))}
      </div>

      {/* Interactive Orca Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 206, 209, 0.15), transparent 50%)`
        }}
      >
        <div 
          className="absolute w-40 h-24 opacity-30 transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x / 15 + scrollY / 8}px`,
            top: `${mousePosition.y / 12 + 200}px`,
            transform: `rotate(${mousePosition.x / 80}deg) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`
          }}
        >
          <svg viewBox="0 0 200 120" className="w-full h-full fill-ocean-aqua drop-shadow-lg">
            <path d="M20,60 Q40,20 80,40 Q120,20 160,40 Q180,50 190,60 Q180,80 160,80 Q120,100 80,80 Q40,100 20,60 Z" />
            <circle cx="150" cy="50" r="4" className="fill-ocean-foam animate-pulse" />
            <path d="M170,45 Q175,40 180,45 Q175,50 170,50 Z" className="fill-ocean-current" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/90 backdrop-blur-xl border-b border-ocean-light/30 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gradient animate-pulse">Timothy Nico</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Education', 'Skills', 'Experience', 'Achievements', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-ocean-foam hover:text-ocean-aqua transition-all duration-300 hover:scale-110 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ocean-aqua transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-20 px-6">
        <div className="text-center animate-fade-in-up">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-ocean-aqua via-ocean-current to-ocean-light p-2 animate-float hover:scale-110 transition-transform duration-500 cursor-pointer shadow-2xl">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-ocean-darker to-ocean-deep flex items-center justify-center border-2 border-ocean-aqua/30">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-ocean-medium to-ocean-dark flex items-center justify-center text-6xl text-ocean-foam font-bold shadow-inner">
                TN
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-pulse">
            Hi, I'm Timothy Nico
          </h1>
          <p className="text-xl md:text-2xl text-ocean-foam/90 mb-8 animate-slide-in-right">
            I'm an AI & Web Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-ocean-aqua to-ocean-current text-ocean-deep font-semibold rounded-lg hover:from-ocean-current hover:to-ocean-aqua transition-all duration-300 aqua-glow hover:scale-105 transform shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-ocean-aqua text-ocean-aqua hover:bg-gradient-to-r hover:from-ocean-aqua hover:to-ocean-current hover:text-ocean-deep transition-all duration-300 rounded-lg hover:scale-105 transform shadow-lg"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Education</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="ocean-card p-8 rounded-xl hover:aqua-glow transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-medium to-ocean-light rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-aqua to-ocean-current rounded-lg"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-ocean-foam mb-2 group-hover:text-ocean-aqua transition-colors">Master of Computer Science</h3>
                  <p className="text-ocean-aqua font-medium mb-2">University of Technology</p>
                  <p className="text-ocean-foam/70 group-hover:text-ocean-foam/90 transition-colors">Specialized in Artificial Intelligence and Machine Learning with focus on deep learning applications.</p>
                </div>
              </div>
            </div>
            <div className="ocean-card p-8 rounded-xl hover:aqua-glow transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-medium to-ocean-current rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-current to-ocean-light rounded-lg"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-ocean-foam mb-2 group-hover:text-ocean-aqua transition-colors">Bachelor of Software Engineering</h3>
                  <p className="text-ocean-aqua font-medium mb-2">Tech Institute</p>
                  <p className="text-ocean-foam/70 group-hover:text-ocean-foam/90 transition-colors">Foundation in software development, web technologies, and database systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Skills</h2>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-ocean-foam mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'Laravel', icon: Code, color: 'text-red-400' },
                { name: 'Data Analytics', icon: Database, color: 'text-blue-400' },
                { name: 'Artificial Intelligence', icon: Brain, color: 'text-purple-400' },
                { name: 'Web Development', icon: Globe, color: 'text-green-400' },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="ocean-card p-6 rounded-xl text-center hover:aqua-glow transition-all duration-500 group cursor-pointer transform hover:scale-110 hover:-translate-y-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color} group-hover:scale-125 transition-all duration-300 drop-shadow-lg`} />
                  <p className="text-ocean-foam font-medium group-hover:text-ocean-aqua transition-colors">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-ocean-foam mb-8 text-center">Soft Skills & Languages</h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="ocean-card p-6 rounded-xl hover:aqua-glow transition-all duration-500 group cursor-pointer transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-ocean-aqua mb-4 group-hover:text-ocean-current transition-colors">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gradient-to-r from-ocean-medium to-ocean-dark rounded-full text-sm text-ocean-foam hover:from-ocean-aqua hover:to-ocean-current hover:text-ocean-deep transition-all duration-300 cursor-pointer transform hover:scale-110">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ocean-card p-6 rounded-xl hover:aqua-glow transition-all duration-500 group cursor-pointer transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-ocean-aqua mb-4 group-hover:text-ocean-current transition-colors">Languages</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-ocean-foam group-hover:text-ocean-aqua transition-colors">English</span>
                      <div className="w-24 h-2 bg-ocean-medium rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-ocean-aqua to-ocean-current rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ocean-foam group-hover:text-ocean-aqua transition-colors">Spanish</span>
                      <div className="w-24 h-2 bg-ocean-medium rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-ocean-current to-ocean-light rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-ocean-aqua via-ocean-current to-ocean-light"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-aqua to-ocean-current rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Calendar className="w-8 h-8 text-ocean-deep" />
                  </div>
                  <div className="ocean-card p-6 rounded-xl flex-1 hover:aqua-glow transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-ocean-foam mb-2 group-hover:text-ocean-aqua transition-colors">Senior AI Developer</h3>
                    <p className="text-ocean-aqua font-medium mb-2">Tech Solutions Inc.</p>
                    <p className="text-ocean-foam/70 mb-4 group-hover:text-ocean-foam/90 transition-colors">Led development of machine learning models and AI-powered web applications. Collaborated with cross-functional teams to deliver innovative solutions.</p>
                    <div className="flex items-center text-ocean-foam/50 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      Remote • 2022 - Present
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-current to-ocean-light rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Code className="w-8 h-8 text-ocean-deep" />
                  </div>
                  <div className="ocean-card p-6 rounded-xl flex-1 hover:aqua-glow transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-ocean-foam mb-2 group-hover:text-ocean-aqua transition-colors">Full Stack Developer</h3>
                    <p className="text-ocean-aqua font-medium mb-2">Digital Innovations Ltd.</p>
                    <p className="text-ocean-foam/70 mb-4 group-hover:text-ocean-foam/90 transition-colors">Developed and maintained web applications using Laravel, React, and modern web technologies. Implemented data analytics solutions.</p>
                    <div className="flex items-center text-ocean-foam/50 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      San Francisco, CA • 2020 - 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "AI Innovation Award",
                organization: "Tech Excellence Summit 2023",
                description: "Recognized for groundbreaking work in machine learning applications",
                icon: Trophy,
                color: "from-yellow-400 to-yellow-600"
              },
              {
                title: "Best Full-Stack Project",
                organization: "Dev Conference 2022",
                description: "Awarded for exceptional web application architecture and user experience",
                icon: Award,
                color: "from-purple-400 to-purple-600"
              },
              {
                title: "Open Source Contributor",
                organization: "GitHub Community",
                description: "Active contributor to major open-source projects with 500+ stars",
                icon: Star,
                color: "from-blue-400 to-blue-600"
              },
              {
                title: "Hackathon Champion",
                organization: "Ocean Tech Challenge 2023",
                description: "First place winner for marine conservation technology solution",
                icon: Zap,
                color: "from-green-400 to-green-600"
              },
              {
                title: "Certified AI Specialist",
                organization: "AI Institute",
                description: "Advanced certification in artificial intelligence and deep learning",
                icon: Brain,
                color: "from-pink-400 to-pink-600"
              },
              {
                title: "Team Leadership Excellence",
                organization: "Corporate Recognition",
                description: "Led cross-functional teams to deliver 15+ successful projects",
                icon: Users,
                color: "from-indigo-400 to-indigo-600"
              }
            ].map((achievement, index) => (
              <div
                key={achievement.title}
                className="ocean-card p-6 rounded-xl hover:aqua-glow transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg mx-auto`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-foam mb-2 text-center group-hover:text-ocean-aqua transition-colors">{achievement.title}</h3>
                <p className="text-ocean-aqua font-medium mb-2 text-center text-sm">{achievement.organization}</p>
                <p className="text-ocean-foam/70 text-sm text-center group-hover:text-ocean-foam/90 transition-colors">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "AI-Powered Analytics Dashboard",
                description: "Machine learning dashboard for real-time data analysis and predictive insights.",
                tech: ["Python", "TensorFlow", "React", "D3.js"]
              },
              {
                title: "Ocean Conservation Platform",
                description: "Web platform connecting marine biologists and conservationists worldwide.",
                tech: ["Laravel", "Vue.js", "PostgreSQL", "WebGL"]
              },
              {
                title: "Smart IoT Monitoring System",
                description: "IoT solution for environmental monitoring with predictive maintenance.",
                tech: ["Node.js", "MongoDB", "React", "Arduino"]
              }
            ].map((project, index) => (
              <div
                key={project.title}
                className="ocean-card p-6 rounded-xl hover:aqua-glow transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-ocean-medium via-ocean-dark to-ocean-deeper rounded-lg mb-6 flex items-center justify-center group-hover:from-ocean-light group-hover:via-ocean-medium group-hover:to-ocean-dark transition-all duration-500 shadow-inner">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-aqua to-ocean-current rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                    <ExternalLink className="w-8 h-8 text-ocean-deep" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ocean-foam mb-3 group-hover:text-ocean-aqua transition-colors">{project.title}</h3>
                <p className="text-ocean-foam/70 mb-4 group-hover:text-ocean-foam/90 transition-colors">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gradient-to-r from-ocean-medium to-ocean-dark rounded text-xs text-ocean-aqua hover:from-ocean-aqua hover:to-ocean-current hover:text-ocean-deep transition-all duration-300 cursor-pointer transform hover:scale-110">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center text-ocean-aqua hover:text-ocean-current transition-all duration-300 hover:scale-110">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </button>
                  <button className="flex items-center text-ocean-aqua hover:text-ocean-current transition-all duration-300 hover:scale-110">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <div className="ocean-card p-8 rounded-xl text-center hover:aqua-glow transition-all duration-500 group cursor-pointer transform hover:scale-105">
              <p className="text-ocean-foam/90 mb-8 text-lg group-hover:text-ocean-foam transition-colors">
                Let's connect and explore opportunities to work together on innovative projects.
              </p>
              <div className="flex justify-center space-x-8">
                <a
                  href="mailto:timothy.nico@example.com"
                  className="flex items-center space-x-3 text-ocean-aqua hover:text-ocean-current transition-all duration-300 group hover:scale-110"
                >
                  <Mail className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-medium">timothy.nico@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/timothynico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-ocean-aqua hover:text-ocean-current transition-all duration-300 group hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-ocean-light/30 relative z-20 bg-ocean-deep/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-ocean-foam/60 hover:text-ocean-foam/80 transition-colors cursor-default">
            © 2024 Timothy Nico. Crafted with passion for technology and the ocean.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
