import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt, FaCode, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import profileImage from "../assets/profile.jpg";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = ["Full Stack Developer", "App Developer", "DevOps Engineer"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: "3D Image Generator",
      description: "A full-stack web app that allows users to upload 2D images and generate 3D models using the Replicate API (TripoSR). Features login/register, image upload, 3D model generation, and protected routes.",
      tech: "React, Node.js, Express, MongoDB, JWT",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      github: "https://github.com/t-suraj21/3DImage-Convertor"
    },
    {
      id: 2,
      title: "Price Analyser",
      description: "A full-stack price analysis and product tracking platform that compares prices across multiple websites, monitors price changes over time, and manages products through authenticated dashboards.",
      tech: "React, Node.js, Express, MongoDB, JWT",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      github: "https://github.com/t-suraj21/PriceAnalysier"
    },
    {
      id: 3,
      title: "Eye Problem Detection",
      description: "A full-stack eye problem detection platform that uses computer vision to identify eye diseases from images. Features user authentication, image upload, disease detection, and a dashboard for managing user data.",
      tech: "React, Node.js, MongoDB, Real-time APIs",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      github: "https://github.com/t-suraj21/EyeProblemDetection"
    }
  ];

  const skills = [
    { 
      name: "C++", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
    },
    { 
      name: "C", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
    },
    { 
      name: "JavaScript", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    { 
      name: "Node.js", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "MongoDB", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
    },
    { 
      name: "React.js", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
    },
    { 
      name: "Tailwind CSS", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
    },
    { 
      name: "Express.js", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
    },
    { 
      name: "HTML5", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
    },
    { 
      name: "CSS3", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
    },
    { 
      name: "Git", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
    },
    { 
      name: "Figma", 
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
    }
  ];

  const achievements = [
    "Finalist in National-Level Hackathon 'Hacksagaon' at ABV-IIITM Gwalior",
    "Led team of 4 for Women's Safety Platform with user-centric approach",
    "Deputy Secretary at Botnet Club (JUET)",
    "Organized technical fests, hackathons, and coding workshops"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Mobile Hero Section - Horizontal Layout */}
      <section className="md:hidden relative py-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            {/* Spider Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="flex-shrink-0"
            >
              <svg className="w-12 h-12 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2Z"/>
              </svg>
            </motion.div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-black text-white">
                SURAJ <span className="text-red-600">KUMAR</span>
              </h1>
              <div className="h-5 mt-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTitle}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-400 text-xs"
                  >
                    {titles[currentTitle]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-red-600" />
                  Sonpur, Bihar
                </span>
              </div>
            </div>

            {/* View Resume Button */}
            <a
              href="/Suraj_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-4 py-2 rounded-full bg-red-600 text-white font-semibold text-xs whitespace-nowrap"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Desktop Hero Section - Full Screen - Hidden on Mobile */}
      <section className="hidden md:flex relative h-screen items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&h=1080&fit=crop)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Animated Overlay */}
        <motion.div 
          animate={{ opacity: [0.7, 0.85, 0.7] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0"
        />

        {/* Animated Background Glows */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 100, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -100, 0],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl z-0"
        />

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Spider Icon */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="mb-8 inline-block"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/50 border-4 border-red-400/50">
                <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2Z"/>
                </svg>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-wider text-white mb-6"
              animate={{ 
                textShadow: [
                  "0 0 30px rgba(220,38,38,0.5)", 
                  "0 0 60px rgba(220,38,38,0.9)", 
                  "0 0 30px rgba(220,38,38,0.5)"
                ] 
              }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              SURAJ <span className="text-red-600">KUMAR</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg md:text-2xl lg:text-3xl font-light mb-8"
            >
              Full Stack Developer | Your Friendly Neighbourhood Coder
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 text-gray-400 mb-10"
            >
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-600" />
                <span>Sonpur, Bihar</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-red-600" />
                <span>8252490197</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-600" />
                <span>surajyadav2121115@gmail.com</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(220,38,38,0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="/Suraj_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg shadow-lg shadow-red-600/30 border-2 border-red-400/50"
              >
                View Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgb(220,38,38)", borderColor: "rgb(220,38,38)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-10 py-4 rounded-full border-2 border-blue-600 text-blue-400 font-bold text-lg hover:text-white transition"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-16"
            >
              <div className="text-gray-500 text-sm">Scroll Down</div>
              <div className="text-red-600 text-2xl">↓</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Spider Web Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 50 50 L 0 0 M 50 50 L 100 0 M 50 50 L 100 100 M 50 50 L 0 100 M 50 50 L 50 0 M 50 50 L 100 50 M 50 50 L 50 100 M 50 50 L 0 50" 
                  stroke="currentColor" strokeWidth="0.3" fill="none" className="text-red-600"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-32 relative" id="about">
        {/* Blurred Spider-Man Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&h=1080&fit=crop)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(10px)'
          }}
        />
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                animate={{ textShadow: ["0 0 20px rgba(59,130,246,0.3)", "0 0 40px rgba(59,130,246,0.6)", "0 0 20px rgba(59,130,246,0.3)"] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <span className="text-blue-500">WHO IS</span>{" "}
                <span className="text-red-600">SURAJ</span>
              </motion.h2>
              <div className="h-1 w-64 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Image Card */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden h-[300px] md:h-[500px] shadow-2xl"
                style={{
                  backgroundImage: `url(${profileImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-white font-bold text-xl md:text-3xl mb-2">Full Stack Developer</h3>
                  <p className="text-gray-300">Building scalable, user-focused applications</p>
                </div>
              </motion.div>

              {/* Info Card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-red-600/20">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">🎓 Education</h3>
                  <p className="text-gray-300 mb-2">
                    <span className="text-red-500 font-semibold">B.Tech in Computer Science</span>
                  </p>
                  <p className="text-gray-400">Jaypee University of Engineering and Technology, Guna, M.P.</p>
                  <p className="text-gray-500 text-sm mt-2">2023 - Present</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-600/30">
                  <h3 className="text-2xl font-bold text-white mb-4">💡 About Me</h3>
                  <p className="text-gray-100 leading-relaxed">
                    Full Stack Developer delivering scalable, user-focused applications. Experienced in front-end and back-end 
                    integration, API design, authentication, and cloud deployment. Recognized for optimizing performance, 
                    problem-solving, and creating seamless digital experiences.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-3xl p-8 shadow-2xl border border-red-600/30">
                  <h3 className="text-2xl font-bold text-white mb-4">🎯 Leadership</h3>
                  <p className="text-red-100">
                    <span className="font-semibold">Deputy Secretary</span> at Botnet Club (JUET)
                  </p>
                  <p className="text-red-200 text-sm mt-2">
                    Managing club operations, organizing technical fests and hackathons, facilitating coding workshops
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        {/* Blurred Spider-Man Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&h=1080&fit=crop)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(10px)'
          }}
        />
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-red-600">TECH</span>{" "}
                <span className="text-blue-500">ARSENAL</span>
              </h2>
              <p className="text-gray-400">My web-slinging toolkit</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -10 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center justify-center space-y-2 md:space-y-3">
                    <div className="w-12 h-12 md:w-20 md:h-20 relative">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] transition-all"
                      />
                    </div>
                    <p className="text-white font-semibold text-xs md:text-sm text-center group-hover:text-red-500 transition-colors">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-32 relative" id="projects">
        {/* Blurred Spider-Man Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&h=1080&fit=crop)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(10px)'
          }}
        />
        <div className="absolute inset-0 bg-black/75 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4"
                animate={{ textShadow: ["0 0 20px rgba(220,38,38,0.3)", "0 0 40px rgba(220,38,38,0.6)", "0 0 20px rgba(220,38,38,0.3)"] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <span className="text-blue-500">MY</span>{" "}
                <span className="text-red-600">PROJECTS</span>
              </motion.h2>
              <p className="text-gray-400 text-xl mt-4">Web applications that save the day</p>
              <div className="h-1 w-80 bg-gradient-to-r from-red-600 to-red-600 mx-auto mt-6"></div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -15 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border-2 border-gray-700 group cursor-pointer"
                >
                  {/* Desktop View - Image with Overlay */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block"
                  >
                    {/* Project Image */}
                    <div className="relative h-72 overflow-hidden">
                      <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                        animate={{
                          scale: hoveredProject === project.id ? 1.15 : 1,
                          filter: hoveredProject === project.id ? "blur(6px) brightness(0.3)" : "blur(0px) brightness(1)"
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Overlay on Hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                      >
                        <FaCode className="text-red-600 text-5xl mb-4" />
                        <h3 className="text-white font-bold text-2xl mb-3">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-6 line-clamp-4">{project.description}</p>
                        <div className="flex gap-3">
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg"
                          >
                            <FaGithub /> Code
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg"
                          >
                            <FaExternalLinkAlt /> Demo
                          </motion.span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Info - Always Visible */}
                    <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                      <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{project.tech}</p>
                      <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
                    </div>
                  </a>

                  {/* Mobile View - Horizontal Card without Image */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block md:hidden"
                  >
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                        <FaCode className="text-white text-xl" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-base mb-1 truncate">{project.title}</h3>
                        <p className="text-gray-400 text-xs mb-2 line-clamp-1">{project.tech}</p>
                        <div className="flex items-center gap-2 text-xs text-red-500">
                          <span>View Project</span>
                          <FaExternalLinkAlt className="text-xs" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative">
        {/* Blurred Spider-Man Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&h=1080&fit=crop)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(10px)'
          }}
        />
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-red-600">ACHIEVEMENTS</span>{" "}
                <span className="text-blue-500">& HONORS</span>
              </h2>
              <p className="text-gray-400">Milestones in my superhero journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border border-red-600/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🏆</div>
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 md:py-32 relative">
        {/* Blurred Spider-Man Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&h=1080&fit=crop)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(10px)'
          }}
        />
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-12 shadow-2xl border-4 border-red-400/50 relative overflow-hidden">
              {/* Spider Web Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 50 50 L 0 0 M 50 50 L 100 0 M 50 50 L 100 100 M 50 50 L 0 100" 
                        stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="text-8xl text-white/30 mb-4">"</div>
                <p className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-6 md:mb-8">
                  With great code comes great responsibility.
                </p>
                <div className="text-right text-white/80 text-xl italic">— Spider-Suraj</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-32 relative" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Brand Logo Style */}
            <div className="mb-12">
              <div className="text-gray-500 text-sm tracking-widest mb-2">LET'S CONNECT</div>
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6"
                animate={{ textShadow: ["0 0 20px rgba(220,38,38,0.3)", "0 0 40px rgba(220,38,38,0.6)", "0 0 20px rgba(220,38,38,0.3)"] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <span className="text-blue-500">GET IN</span>{" "}
                <span className="text-red-600">TOUCH</span>
              </motion.h2>
              <div className="h-1 w-64 bg-gradient-to-r from-red-600 to-red-600 mx-auto mb-8"></div>
              <p className="text-gray-400 text-xl italic">Ready to build something amazing together?</p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center gap-4 md:gap-6 text-2xl md:text-4xl"
            >
              <motion.a 
                whileHover={{ scale: 1.2, y: -5, color: "#dc2626" }}
                href="https://github.com/t-suraj21"
                className="text-gray-400 transition-colors duration-300"
              >
                <FaGithub />
              </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, y: -5, color: "#1da1f2" }}
                  href="https://twitter.com/surajyadav2121115"
                  className="text-gray-400 transition-colors duration-300"
                >
                  <FaTwitter />
                </motion.a> 
                <motion.a 
                  whileHover={{ scale: 1.2, y: -5, color: "#0077b5" }}
                  href="https://www.linkedin.com/in/suraj-yadav-749124290/"
                  className="text-gray-400 transition-colors duration-300"
                >
                  <FaLinkedin />
                </motion.a>
            </motion.div>
          </motion.div>
        </div>  
        </section>
    </div>
  );
}