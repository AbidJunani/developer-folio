"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaLinux,
  FaWindows,
  FaAndroid,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { assets } from "@/public/assets";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 2, ease: "power4.out" }
    );

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: aboutRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: skillsRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: projectsRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      testimonialsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: testimonialsRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      contactRef.current,
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: contactRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      blogRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: blogRef.current, start: "top 85%" },
      }
    );
  }, []);

  const projects = [
    {
      title: "CyberSynth",
      description:
        "A futuristic music synthesizer with WebAudio API and Three.js visuals.",
      image: assets.pexlel1,
      link: "#",
    },
    {
      title: "NeonDB",
      description:
        "High-performance database dashboard with real-time analytics.",
      image: assets.pexlel7,
      link: "#",
    },
    {
      title: "QuantumChat",
      description: "Encrypted messaging app with end-to-end quantum security.",
      image: assets.pexlel1,
      link: "#",
    },
    {
      title: "PhotonOS",
      description: "A lightweight Linux distribution optimized for developers.",
      image: assets.pexlel4,
      link: "#",
    },
    {
      title: "NeuroBridge",
      description:
        "AI-powered health monitoring system with real-time analytics.",
      image: assets.pexlel10,
      link: "#",
    },
    {
      title: "Aurora AR",
      description: "Augmented reality framework for web applications.",
      image: assets.pexlel9,
      link: "#",
    },
  ];

  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "GSAP", level: 75 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "Docker", level: 80 },
    { name: "GraphQL", level: 85 },
  ];

  const radarData = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Proficiency",
        data: skills.map((skill) => skill.level),
        backgroundColor: isDarkMode
          ? "rgba(0, 255, 255, 0.2)"
          : "rgba(78, 205, 196, 0.2)",
        borderColor: isDarkMode
          ? "rgba(0, 255, 255, 1)"
          : "rgba(78, 205, 196, 1)",
        pointBackgroundColor: isDarkMode
          ? "rgba(255, 0, 255, 1)"
          : "rgba(255, 107, 107, 1)",
        pointBorderColor: isDarkMode ? "#fff" : "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: isDarkMode
          ? "rgba(255, 0, 255, 1)"
          : "rgba(255, 107, 107, 1)",
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          color: isDarkMode
            ? "rgba(0, 255, 255, 0.3)"
            : "rgba(78, 205, 196, 0.3)",
        },
        grid: {
          color: isDarkMode
            ? "rgba(0, 255, 255, 0.3)"
            : "rgba(78, 205, 196, 0.3)",
        },
        pointLabels: {
          font: { size: 14, family: "Orbitron" },
          color: isDarkMode ? "#b0b0ff" : "#2a2a3a",
        },
        ticks: {
          backdropColor: "transparent",
          color: isDarkMode ? "#b0b0ff" : "#2a2a3a",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? "#b0b0ff" : "#2a2a3a",
          font: { family: "Orbitron" },
        },
      },
    },
  };

  const blogPosts = [
    {
      title: "The Future of Cyberpunk Tech",
      date: "June 15, 2025",
      excerpt:
        "Exploring how emerging technologies are shaping the digital landscape.",
      link: "#",
      image: assets.pexlel20,
    },
    {
      title: "Building Real-Time Systems with WebSockets",
      date: "May 28, 2025",
      excerpt:
        "A deep dive into implementing efficient real-time communication.",
      link: "#",
      image: assets.pexlel13,
    },
    {
      title: "The Evolution of Reactive UI Design",
      date: "April 10, 2025",
      excerpt:
        "How modern frameworks are changing the way we build interfaces.",
      link: "#",
      image: assets.pexlel16,
    },
  ];

  const testimonials = [
    {
      name: "Alex Carter",
      role: "Tech Lead at NeonCorp",
      text: "John's ability to blend aesthetics with functionality is unparalleled. His work on CyberSynth was a game-changer.",
      image: assets.avatar7,
    },
    {
      name: "Samantha Lee",
      role: "CTO at QuantumLabs",
      text: "Working with John on QuantumChat was a pleasure. His attention to detail and innovative approach are top-notch.",
      image: assets.avatar8,
    },
    {
      name: "Dr. Elena Voss",
      role: "AI Researcher",
      text: "John's expertise in AI integration for NeuroBridge was critical to our success. Highly recommended!",
      image: assets.avatar1,
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div
      className={`min-h-screen font-orbitron transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#0a0a1a] text-[#e0e0ff]"
          : "bg-[#f5f5ff] text-[#2a2a3a]"
      }`}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap");
        .font-orbitron {
          font-family: "Orbitron", sans-serif;
        }
      `}</style>

      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${
          isDarkMode
            ? "bg-[#1a1a3a]/80 border-cyan-500/40"
            : "bg-[#ffffff]/80 border-teal-200"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            JD
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-5 text-center">
            {[
              "About",
              "Skills",
              "Projects",
              "Testimonials",
              "Blog",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm sm:text-base lg:text-lg ${
                  isDarkMode
                    ? "text-[#b0b0ff] hover:text-cyan-400"
                    : "text-[#2a2a3a] hover:text-coral-500"
                } transition-colors duration-300`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full ${
              isDarkMode ? "bg-[#1a1a3a]" : "bg-teal-100"
            } hover:bg-opacity-80 transition-all duration-300`}
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-400 w-5 h-5" />
            ) : (
              <FaMoon className="text-teal-600 w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: isDarkMode ? "#00ffff" : "#4ecdc4" },
              links: {
                color: isDarkMode ? "#ff00ff" : "#ff6b6b",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: { enable: true },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.2),rgba(147,51,234,0.2))]"
              : "bg-[radial-gradient(circle_at_center,rgba(78,205,196,0.1),rgba(255,107,107,0.1))]"
          } z-0 animate-pulse`}
        />
        <div className="text-center z-10 relative px-4">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            John Doe
          </motion.h1>
          <motion.p
            className={`text-lg sm:text-xl md:text-2xl ${
              isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
            } mb-8 tracking-wide`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Software Developer | Cyberpunk Innovator
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { href: "https://github.com", icon: FaGithub },
              { href: "https://linkedin.com", icon: FaLinkedin },
              { href: "mailto:example@email.com", icon: FaEnvelope },
              { href: "#", icon: FaLinux },
              { href: "#", icon: FaWindows },
              { href: "#", icon: FaAndroid },
            ].map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Icon
                  className={`text-3xl sm:text-4xl md:text-5xl ${
                    isDarkMode
                      ? "text-[#b0b0ff] group-hover:text-cyan-400"
                      : "text-[#2a2a3a] group-hover:text-coral-500"
                  } transition-colors duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]`}
                />
              </a>
            ))}
          </motion.div>
        </div>
        <div
          className={`absolute bottom-6 left-4 sm:bottom-10 sm:left-10 ${
            isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
          } space-y-2 text-sm sm:text-base`}
        >
          <motion.div
            className="text-lg sm:text-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          <div className="font-mono">
            <span className={isDarkMode ? "text-pink-400" : "text-coral-500"}>
              username@cyberdev:
            </span>
            ~/projects
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`py-16 sm:py-24 ${
          isDarkMode
            ? "bg-[#1a1a3a]/60 border-t border-b border-cyan-500/40"
            : "bg-[#ffffff]/60 border-t border-b border-teal-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 sm:mb-12 tracking-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-center">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-40 sm:w-56 md:w-72 mb-6 md:mb-0">
              <Image
                src={assets.pexlel222}
                alt="Profile"
                width={300}
                height={300}
                className={`rounded-full border-4 w-full ${
                  isDarkMode
                    ? "border-cyan-400/60 shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,255,255,0.9)]"
                    : "border-teal-400/60 shadow-[0_0_25px_rgba(78,205,196,0.4)] hover:shadow-[0_0_40px_rgba(78,205,196,0.7)]"
                } transition-shadow duration-300`}
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <p
                className={`text-base sm:text-lg ${
                  isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                } mb-4 sm:mb-6 leading-relaxed`}
              >
                I'm a visionary software developer immersed in creating
                cyberpunk-inspired applications that push the boundaries of
                technology. My passion lies in crafting seamless,
                high-performance solutions with a futuristic aesthetic.
              </p>
              <p
                className={`text-base sm:text-lg ${
                  isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                } mb-4 sm:mb-6 leading-relaxed`}
              >
                Proficient in Next.js, Tailwind CSS, Framer Motion, and GSAP, I
                specialize in delivering immersive user experiences that blend
                innovation with style. I've worked with cutting-edge
                technologies including WebGPU, WebAssembly, and serverless
                architectures.
              </p>
              <p
                className={`text-base sm:text-lg ${
                  isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                } leading-relaxed`}
              >
                When I'm not coding, you can find me exploring alternative
                realities through VR, experimenting with neural networks, or
                designing custom cyberpunk interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className={`py-16 sm:py-24 ${
          isDarkMode
            ? "bg-[#0a0a1a] border-t border-cyan-500/40"
            : "bg-[#f5f5ff] border-t border-teal-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 sm:mb-12 tracking-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-center">
            Technical Skills
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Radar data={radarData} options={radarOptions} />
            </div>
          </div>
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 text-center sm:text-left">
              Specialized Technologies
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
              {[
                "WebGPU",
                "Vulkan API",
                "WebAssembly",
                "TensorFlow.js",
                "Spatial Computing",
                "Zero Trust Architecture",
              ].map((tech) => (
                <motion.div
                  key={tech}
                  className={`${
                    isDarkMode
                      ? "bg-[#1a1a3a]/80 border-cyan-500/40 hover:border-cyan-500/80"
                      : "bg-[#ffffff]/80 border-teal-200 hover:border-teal-400"
                  } px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border transition-all duration-300 text-sm sm:text-base`}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className={`py-16 sm:py-24 ${
          isDarkMode
            ? "bg-[#0a0a1a] border-t border-cyan-500/40"
            : "bg-[#f5f5ff] border-t border-teal-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 sm:mb-12 tracking-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                glareEnable={true}
                glareMaxOpacity={0.4}
                glareColor={isDarkMode ? "#00ffff" : "#4ecdc4"}
                perspective={1000}
              >
                <motion.div
                  className={`${
                    isDarkMode
                      ? "bg-[#1a1a3a]/80 border-cyan-500/40 hover:border-cyan-500/80 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.7)]"
                      : "bg-[#ffffff]/80 border-teal-200 hover:border-teal-400 shadow-[0_0_20px_rgba(78,205,196,0.2)] hover:shadow-[0_0_30px_rgba(78,205,196,0.5)]"
                  } p-4 sm:p-6 rounded-xl border transition-all duration-300`}
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 sm:mb-6 w-full object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-2 sm:mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                    } mb-4 sm:mb-6`}
                  >
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className={`inline-flex items-center text-sm sm:text-base ${
                      isDarkMode
                        ? "text-cyan-400 hover:text-pink-400"
                        : "text-teal-400 hover:text-coral-500"
                    } transition-colors duration-300 group`}
                  >
                    View Project
                    <FaCode className="ml-2 group-hover:animate-pulse" />
                  </a>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "WebGL"].map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs sm:text-sm ${
                          isDarkMode
                            ? "text-[#8a8aff] bg-[#1a1a3a]/60"
                            : "text-teal-600 bg-[#ffffff]/60"
                        } px-2 py-1 rounded`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        className={`py-16 sm:py-24 ${
          isDarkMode
            ? "bg-[#0a0a1a] border-t border-cyan-500/40"
            : "bg-[#f5f5ff] border-t border-teal-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 sm:mb-12 tracking-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-center">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`${
                  isDarkMode
                    ? "bg-[#1a1a3a]/80 border-cyan-500/40 hover:border-cyan-500/80 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.7)]"
                    : "bg-[#ffffff]/80 border-teal-200 hover:border-teal-400 shadow-[0_0_20px_rgba(78,205,196,0.2)] hover:shadow-[0_0_30px_rgba(78,205,196,0.5)]"
                } p-4 sm:p-6 rounded-xl border transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mb-4 w-12 sm:w-16"
                  loading="lazy"
                />
                <p
                  className={`text-sm sm:text-base md:text-lg ${
                    isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                  } mb-4`}
                >
                  {testimonial.text}
                </p>
                <div>
                  <p className="text-cyan-400 font-bold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-xs sm:text-sm ${
                      isDarkMode ? "text-[#8a8aff]" : "text-teal-600"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        ref={blogRef}
        className={`py-16 sm:py-24 ${
          isDarkMode
            ? "bg-[#0a0a1a] border-t border-cyan-500/40"
            : "bg-[#f5f5ff] border-t border-teal-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 sm:mb-12 tracking-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-center">
            Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className={`${
                  isDarkMode
                    ? "bg-[#1a1a3a]/80 border-cyan-500/40 hover:border-cyan-500/80 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.7)]"
                    : "bg-[#ffffff]/80 border-teal-200 hover:border-teal-400 shadow-[0_0_20px_rgba(78,205,196,0.2)] hover:shadow-[0_0_30px_rgba(78,205,196,0.5)]"
                } p-4 sm:p-6 rounded-xl border transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-2 sm:mb-3 tracking-wide">
                  {post.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                  } mb-4`}
                >
                  {post.date}
                </p>
                <p
                  className={`text-sm sm:text-base ${
                    isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                  } mb-4 sm:mb-6`}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={post.link}
                  className={`inline-flex items-center text-sm sm:text-base ${
                    isDarkMode
                      ? "text-cyan-400 hover:text-pink-400"
                      : "text-teal-400 hover:text-coral-500"
                  } transition-colors duration-300`}
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`py-16 sm:py-24 ${
          isDarkMode
            ? "bg-[#1a1a3a]/60 border-t border-cyan-500/40"
            : "bg-[#ffffff]/60 border-t border-teal-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 sm:mb-12 tracking-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            Get In Touch
          </h2>
          <Image
            src={assets.pexlel12}
            alt="Contact Background"
            width={800}
            height={400}
            className="mx-auto mb-6 sm:mb-8 rounded-lg opacity-30 w-full max-w-2xl sm:max-w-3xl"
            loading="lazy"
          />
          <p
            className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 ${
              isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
            }`}
          >
            Ready to collaborate on a cutting-edge project? Let's connect!
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { icon: FaGithub, label: "GitHub", href: "#" },
              { icon: FaLinkedin, label: "LinkedIn", href: "#" },
              {
                icon: FaEnvelope,
                label: "Email",
                href: "mailto:example@email.com",
              },
            ].map(({ icon: Icon, label, href }, index) => (
              <a
                key={index}
                href={href}
                className="relative group flex flex-col items-center"
              >
                <Icon
                  className={`text-3xl sm:text-4xl md:text-5xl mb-1 ${
                    isDarkMode
                      ? "text-[#b0b0ff] group-hover:text-cyan-400"
                      : "text-[#2a2a3a] group-hover:text-coral-500"
                  } transition-colors duration-300`}
                />
                <span
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? "text-[#6a6aff]" : "text-teal-600"
                  }`}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a href="mailto:example@email.com">
              <button
                className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${
                  isDarkMode
                    ? "from-cyan-400 to-pink-500"
                    : "from-teal-400 to-coral-500"
                } text-[#0a0a1a] font-bold rounded-lg hover:from-cyan-500 hover:to-pink-600 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:shadow-[0_0_30px_rgba(0,255,255,0.9)] text-sm sm:text-base`}
              >
                <FaEnvelope className="mr-2 sm:mr-3" /> Send a Message
              </button>
            </a>
            <a href="/resume.pdf" download>
              <button
                className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border ${
                  isDarkMode
                    ? "border-[#00ffff]/50 text-[#b0b0ff] hover:border-[#00ffff]/90 hover:bg-[#1a1a3a]/60"
                    : "border-teal-400/50 text-[#2a2a3a] hover:border-teal-400/90 hover:bg-[#ffffff]/60"
                } font-bold rounded-lg transition-all duration-300 text-sm sm:text-base`}
              >
                <FaCode className="mr-2 sm:mr-3" /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Chatbot Toggle */}
      <motion.button
        className={`fixed bottom-6 sm:bottom-10 right-4 sm:right-10 p-3 sm:p-4 rounded-full ${
          isDarkMode
            ? "bg-[#1a1a3a] border-cyan-500/40"
            : "bg-[#ffffff] border-teal-200"
        } border shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] transition-all duration-300`}
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span
          className={`text-xl sm:text-2xl ${
            isDarkMode ? "text-cyan-400" : "text-coral-500"
          }`}
        >
          💬
        </span>
      </motion.button>
      {isChatOpen && (
        <motion.div
          className={`fixed bottom-16 sm:bottom-20 right-4 sm:right-10 w-72 sm:w-80 h-80 sm:h-96 ${
            isDarkMode ? "bg-[#1a1a3a]/90" : "bg-[#ffffff]/90"
          } rounded-lg border ${
            isDarkMode ? "border-cyan-500/40" : "border-teal-200"
          } shadow-[0_0_20px_rgba(0,255,255,0.5)] p-3 sm:p-4 z-50`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3
              className={`text-base sm:text-lg font-bold ${
                isDarkMode ? "text-cyan-400" : "text-coral-500"
              }`}
            >
              AI Assistant
            </h3>
            <button
              onClick={toggleChat}
              className={`${
                isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
              } text-sm sm:text-base`}
            >
              ✕
            </button>
          </div>
          <div
            className={`h-56 sm:h-64 ${
              isDarkMode ? "bg-[#0a0a1a]" : "bg-[#f5f5ff]"
            } rounded-lg p-3 sm:p-4 overflow-y-auto`}
          >
            <p
              className={`text-sm sm:text-base ${
                isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
              }`}
            >
              Hello! How can I assist you today?
            </p>
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className={`w-full mt-3 sm:mt-4 p-2 rounded-lg text-sm sm:text-base ${
              isDarkMode
                ? "bg-[#1a1a3a] text-[#b0b0ff] border-cyan-500/40"
                : "bg-[#ffffff] text-[#2a2a3a] border-teal-200"
            } border focus:outline-none`}
          />
        </motion.div>
      )}

      {/* Terminal Section */}
      {/* Terminal Section */}
      <section
        className={`py-16 sm:py-24 ${
          isDarkMode
            ? "bg-[#0a0a1a] border-t border-cyan-500/40"
            : "bg-[#f5f5ff] border-t border-teal-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={`${
              isDarkMode
                ? "bg-[#1a1a3a]/80 border-cyan-500/40 hover:border-cyan-500/80 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.7)]"
                : "bg-[#ffffff]/80 border-teal-200 hover:border-teal-400 shadow-[0_0_20px_rgba(78,205,196,0.2)] hover:shadow-[0_0_30px_rgba(78,205,196,0.5)]"
            } p-4 sm:p-6 rounded-xl border transition-all duration-300`}
          >
            <div className="relative overflow-hidden rounded-lg h-64 sm:h-72 md:h-80">
              <Image
                src={assets.pexlel1}
                alt="Terminal Background"
                width={800}
                height={300}
                className="absolute inset-0 object-cover opacity-10"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 ${
                  isDarkMode ? "bg-[#0a0a1a]" : "bg-[#f5f5ff]"
                } p-4 sm:p-6`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-4">
                  <div className="font-mono text-xs sm:text-sm">
                    <span
                      className={
                        isDarkMode ? "text-[#00ff00]" : "text-teal-600"
                      }
                    >
                      username@cyberdev:
                    </span>
                    ~/projects
                    <span
                      className={
                        isDarkMode ? "text-[#00ff00]" : "text-teal-600"
                      }
                    >
                      {" "}
                      ${" "}
                    </span>
                    <span
                      className={`${
                        isDarkMode ? "text-[#ffffff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      whoami
                    </span>
                    <br />
                    <span
                      className={
                        isDarkMode ? "text-[#00ff00]" : "text-teal-600"
                      }
                    >
                      username@cyberdev:
                    </span>
                    ~/projects
                    <span
                      className={
                        isDarkMode ? "text-[#00ff00]" : "text-teal-600"
                      }
                    >
                      {" "}
                      ${" "}
                    </span>
                    <span
                      className={`${
                        isDarkMode ? "text-[#ffffff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      ls
                    </span>
                    <br />
                    <span
                      className={`pl-4 sm:pl-6 ${
                        isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      - projects
                    </span>
                    <span
                      className={`pl-4 sm:pl-6 ${
                        isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      - blog
                    </span>
                    <span
                      className={`pl-4 sm:pl-6 ${
                        isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      - resume
                    </span>
                    <span
                      className={`pl-4 sm:pl-6 ${
                        isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      - contact
                    </span>
                    <br />
                    <span
                      className={
                        isDarkMode ? "text-[#00ff00]" : "text-teal-600"
                      }
                    >
                      username@cyberdev:
                    </span>
                    ~/projects
                    <span
                      className={
                        isDarkMode ? "text-[#00ff00]" : "text-teal-600"
                      }
                    >
                      {" "}
                      ${" "}
                    </span>
                    <span
                      className={`${
                        isDarkMode ? "text-[#ffffff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      cat contact.txt
                    </span>
                    <br />
                    <span
                      className={`pl-4 sm:pl-6 ${
                        isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      email: example@email.com
                    </span>
                    <span
                      className={`pl-4 sm:pl-6 ${
                        isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      github: https://github.com
                    </span>
                    <span
                      className={`pl-4 sm:pl-6 ${
                        isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
                      }`}
                    >
                      linkedin: https://linkedin.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        className={`py-8 ${
          isDarkMode
            ? "bg-[#0a0a1a] border-t border-cyan-500/40"
            : "bg-[#f5f5ff] border-t border-teal-200"
        } text-center`}
      >
        <p
          className={`text-sm sm:text-base ${
            isDarkMode ? "text-[#b0b0ff]" : "text-[#2a2a3a]"
          }`}
        >
          © 2025 John Doe. All rights reserved.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm sm:text-base ${
                isDarkMode
                  ? "text-[#b0b0ff] hover:text-cyan-400"
                  : "text-[#2a2a3a] hover:text-coral-500"
              } transition-colors duration-300`}
            >
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
