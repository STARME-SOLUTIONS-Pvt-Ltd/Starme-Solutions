import { ArrowRight, Sparkles, Award, TrendingUp, Users, Zap, Code, Database, Cloud, Lock, Globe, Rocket, Shield, CheckCircle2, Terminal, Cpu, Server, MonitorPlay, Layers, Binary } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridCanvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Advanced mouse tracking with smoothing
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const smoothMouse = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      setMousePosition({ x: currentX, y: currentY });
      requestAnimationFrame(smoothMouse);
    };

    window.addEventListener('mousemove', handleMouseMove);
    smoothMouse();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle system with connection lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      color: string;
      alpha: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.speedZ = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.color = `rgba(100, 100, 100, ${this.alpha})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z -= this.speedZ;
        this.pulsePhase += 0.02;

        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas!.width;
          this.y = Math.random() * canvas!.height;
        }

        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        
        const scale = 1000 / (1000 + this.z);
        const x = (this.x - canvas!.width / 2) * scale + canvas!.width / 2;
        const y = (this.y - canvas!.height / 2) * scale + canvas!.height / 2;
        const size = this.size * scale;
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;

        ctx.fillStyle = `rgba(100, 100, 100, ${this.alpha * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      getScreenPosition() {
        const scale = 1000 / (1000 + this.z);
        return {
          x: (this.x - canvas!.width / 2) * scale + canvas!.width / 2,
          y: (this.y - canvas!.height / 2) * scale + canvas!.height / 2,
          scale
        };
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connection lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const pos1 = p1.getScreenPosition();
          const pos2 = p2.getScreenPosition();
          const dx = pos1.x - pos2.x;
          const dy = pos1.y - pos2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.1;
            ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(pos1.x, pos1.y);
            ctx.lineTo(pos2.x, pos2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Animated grid background
  useEffect(() => {
    const canvas = gridCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let offset = 0;
    let animationFrameId: number;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      offset = (offset + 0.3) % gridSize;

      ctx.strokeStyle = 'rgba(120, 113, 108, 0.08)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(canvas.width, y + offset);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = [
    { icon: Code, text: 'React & Next.js' },
    { icon: Database, text: 'Backend & Databases' },
    { icon: Cloud, text: 'Cloud Deployment' },
    { icon: Lock, text: 'Secure Authentication' },
    { icon: Globe, text: 'Web Applications' },
    { icon: Rocket, text: 'DevOps & CI/CD' },
    { icon: Shield, text: 'Data Protection' },
    { icon: Zap, text: 'Performance Optimization' },
  ];

  const clients = [
    'Early-Stage Startups',
    'Growing Businesses',
    'Small & Medium Enterprises',
    'Product-Based Companies',
    'Service-Based Companies',
    'Independent Founders',
    'Emerging Brands',
    'Local & Remote Clients',
  ];

  const codeSnippets = [
    '{ console.log() }',
    '=> function()',
    '<Component />',
    'const data = []',
    'npm install',
    'git commit -m',
    'async/await',
    'import React',
  ];

  const floatingIcons = [
    { Icon: Binary, delay: 0 },
    { Icon: Cpu, delay: 1 },
    { Icon: Layers, delay: 2 },
    { Icon: MonitorPlay, delay: 3 },
  ];

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-stone-200 via-stone-100 to-neutral-200"
    >
      {/* SVG Filters for advanced effects */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <filter id="grain">
            <feTurbulence baseFrequency="0.8" />
            <feColorMatrix values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.05 0" />
            <feComposite operator="in" in2="SourceAlpha" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Animated grid background */}
      <canvas
        ref={gridCanvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Particle Canvas with connections */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Gradient orbs with blur */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ 
          background: 'radial-gradient(circle, rgba(90,58,30,0.3) 0%, transparent 70%)',
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-float-slow"
        style={{ 
          background: 'radial-gradient(circle, rgba(120,113,108,0.4) 0%, transparent 70%)',
          bottom: '20%',
          right: '10%',
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
        }}
      />

      {/* Floating geometric shapes with 3D effect */}
      <div 
        className="absolute w-96 h-96 border-2 border-stone-800/10 rounded-sm pointer-events-none perspective-shape"
        style={{ 
          top: '10%', 
          left: '5%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg) rotateZ(45deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
      <div 
        className="absolute w-64 h-64 border-2 border-stone-800/10 rounded-full pointer-events-none"
        style={{ 
          bottom: '15%', 
          right: '8%',
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px) scale(${1 + Math.sin(Date.now() * 0.001) * 0.05})`,
        }}
      />

      {/* Floating icons with magnetic effect */}
      {floatingIcons.map(({ Icon, delay }, index) => (
        <div
          key={index}
          className="absolute pointer-events-none animate-orbit"
          style={{
            top: '50%',
            left: '50%',
            animationDelay: `${delay}s`,
            animationDuration: '20s',
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-stone-800/10 blur-xl rounded-full" />
            <Icon className="w-8 h-8 text-stone-800/20 relative" />
          </div>
        </div>
      ))}

      {/* Floating code snippets with glitch effect */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute text-stone-800/20 font-mono text-sm animate-float pointer-events-none glitch-text"
          style={{
            top: `${15 + index * 10}%`,
            left: index % 2 === 0 ? `${10 + (index * 2)}%` : 'auto',
            right: index % 2 === 1 ? `${10 + (index * 2)}%` : 'auto',
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + index * 0.5}s`,
            textShadow: '2px 2px 0 rgba(120,113,108,0.1)',
          }}
          data-text={snippet}
        >
          {snippet}
        </div>
      ))}

      {/* Decorative brackets with enhanced animation */}
      <div className="absolute top-32 left-8 text-6xl text-stone-800/20 font-light animate-pulse-slow" style={{ fontFamily: "'Courier New', monospace", filter: 'url(#glow)' }}>{'{'}</div>
      <div className="absolute top-32 right-8 text-6xl text-stone-800/20 font-light animate-pulse-slow" style={{ fontFamily: "'Courier New', monospace", animationDelay: '1s', filter: 'url(#glow)' }}>{'}'}</div>
      <div className="absolute bottom-32 left-1/4 text-4xl text-stone-800/15 font-light animate-bounce-slow" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
      <div className="absolute bottom-40 right-1/3 text-4xl text-stone-800/15 font-light animate-bounce-slow" style={{ fontFamily: "'Courier New', monospace", animationDelay: '0.5s' }}>{'//'}</div>

      {/* 3D Overlapping decorative frames with depth */}
      <div 
        className="absolute top-20 right-16 w-48 h-64 border-4 border-stone-800/30 rotate-6 animate-tilt pointer-events-none shadow-2xl overflow-hidden backdrop-blur-sm"
        style={{
          transform: `rotate(6deg) translateZ(${mousePosition.x * 0.05}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-400 to-stone-600 opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Terminal className="w-16 h-16 text-stone-800/40 animate-pulse-slow" />
        </div>
        {/* Corner decoration */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-stone-800/50" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-stone-800/50" />
      </div>

      <div 
        className="absolute bottom-32 left-16 w-56 h-40 border-4 border-stone-800/30 -rotate-3 animate-tilt-reverse pointer-events-none shadow-2xl overflow-hidden backdrop-blur-sm" 
        style={{ 
          animationDelay: '1s',
          transform: `rotate(-3deg) translateZ(${mousePosition.y * -0.05}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-stone-700/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Server className="w-16 h-16 text-stone-800/40 animate-pulse-slow" />
        </div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-stone-800/50" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-stone-800/50" />
      </div>

      {/* Animated stamp badge with complex rotation */}
      <div className="absolute top-1/3 right-1/4 animate-stamp pointer-events-none">
        <div className="relative" style={{ filter: 'url(#grain)' }}>
          <div className="w-32 h-32 border-4 border-stone-800/40 rounded-full flex items-center justify-center bg-stone-200/80 backdrop-blur-sm rotate-badge">
            <div className="text-center">
              <div className="text-xs font-black text-stone-800 tracking-widest">PREMIUM</div>
              <div className="text-2xl font-black text-stone-800 animate-spin-slow">★</div>
              <div className="text-xs font-black text-stone-800 tracking-widest">QUALITY</div>
            </div>
          </div>
          {/* Stamp perforations with shadow */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-stone-200 rounded-full border border-stone-800/40 shadow-sm"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translateY(-64px) translateX(-50%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated year badge with parallax */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 text-stone-800/30 border border-stone-800/30 px-4 py-2 rounded-full text-sm tracking-widest animate-slide-diagonal backdrop-blur-sm" 
        style={{ 
          fontFamily: "'Courier New', monospace",
          transform: `translate(-50%, calc(-128px - ${scrollY * 0.2}px))`,
        }}
      >
        ( 2026 )
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10 flex-1 flex flex-col justify-center">
        {/* Premium badge with glow */}
        <div 
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800/90 backdrop-blur-xl border border-stone-700 rounded-md mb-12 shadow-lg animate-fade-in mx-auto hover:scale-105 transition-all duration-300"
          style={{ filter: 'url(#glow)' }}
        >
          <Sparkles className="w-4 h-4 text-stone-300 animate-spin-slow" />
          <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Premium IT Solutions
          </span>
          <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
        </div>

        {/* Main headline with 3D text effect */}
        <h1 
          className="relative text-6xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-black mb-8 animate-fade-in-up tracking-tighter leading-[0.85] uppercase"
          style={{ 
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        >
          <span className="block text-stone-900 hover-lift text-3d" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.05em' }}>
            TRANSFORM YOUR
          </span>
          <span
            className="block hover-lift text-3d"
            style={{
              fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            <span style={{ color: "#5A3A1E" }}>BUSINESS</span>{" "}
            <span className="text-stone-900">WITH</span>
          </span>
          <span className="block text-stone-900 hover-lift text-3d" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.05em' }}>
            ELITE TECH
          </span>
          
          {/* Animated underline with gradient */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-stone-800 to-transparent animate-expand-pulse" style={{ width: '16rem' }} />
        </h1>

        {/* Magnetic CTA Button */}
        <div className="flex justify-center mb-16 animate-fade-in-up delay-200">
          <button
            onClick={() => scrollToSection('#contact')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative px-12 py-4 bg-stone-200 border-2 border-stone-800 text-stone-900 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden uppercase tracking-wider text-sm magnetic-button"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <span className="relative z-10">Get Free Consultation</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-stone-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-stone-800/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </button>
        </div>

        {/* Description with decorative elements */}
        <div className="relative max-w-4xl mx-auto mb-20 animate-fade-in-up delay-400">
          <div className="absolute -top-8 -left-4 text-8xl text-stone-800/10 font-serif animate-pulse-slow">"</div>
          <div className="absolute -bottom-8 -right-4 text-8xl text-stone-800/10 font-serif rotate-180 animate-pulse-slow">"</div>
          
          <p className="relative text-lg sm:text-xl text-stone-900 leading-relaxed font-normal mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            WE'RE NOT JUST DEVELOPERS. WE'RE PROBLEM SOLVERS, INNOVATORS, AND YOUR TRUSTED PARTNERS.
          </p>
          
          <div className="flex items-start gap-3 text-left max-w-2xl mx-auto">
            <div className="text-4xl text-stone-800/30 font-light mt-1 animate-pulse-slow" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
            <p className="text-sm text-stone-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              WITH OVER 3 YEARS OF EXPERIENCE IN THE INDUSTRY, WE'RE PASSIONATE ABOUT REVIVING CLASSIC TECHNOLOGICAL STYLES. FROM LEGACY SYSTEMS TO MID-CENTURY MODERN APPLICATIONS.
            </p>
          </div>
        </div>

        {/* Stats grid with advanced hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-in-up delay-600 mb-12">
          {[
            { value: '50+', label: 'Projects Delivered', icon: Award, gradient: 'from-stone-700 to-stone-900' },
            { value: '20+', label: 'Happy Clients', icon: Users, gradient: 'from-amber-900 to-stone-800' },
            { value: '3+', label: 'Years Experience', icon: TrendingUp, gradient: 'from-stone-800 to-amber-900' },
            { value: '98%', label: 'Client Satisfaction', icon: Zap, gradient: 'from-stone-900 to-stone-700' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-stone-100/80 backdrop-blur-sm rounded-sm p-8 shadow-md border border-stone-300/50 hover:shadow-2xl hover:border-stone-800 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`} />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 20px rgba(90,58,30,0.3)' }} />
                
                {/* Icon with 3D rotation */}
                <div className="relative inline-flex p-2 rounded-sm bg-stone-800 group-hover:bg-stone-200 mb-4 transition-all duration-300 icon-3d">
                  <Icon className="w-5 h-5 text-stone-100 group-hover:text-stone-800 transition-colors duration-300" />
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-stone-800/20 group-hover:border-stone-200/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-stone-800/20 group-hover:border-stone-200/50 transition-colors duration-300" />
                
                {/* Value with counter animation */}
                <div className="relative text-5xl font-black text-stone-900 group-hover:text-stone-100 mb-2 tracking-tight transition-colors duration-300" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="relative text-xs text-stone-700 group-hover:text-stone-300 font-medium tracking-wider uppercase transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Journey CTA with pulse animation */}
        <div className="flex justify-center items-center gap-3 animate-fade-in-up delay-800">
          <div className="w-6 h-6 rounded-full border-2 border-stone-800 flex items-center justify-center animate-ping-slow">
            <ArrowRight className="w-3 h-3 text-stone-800" />
          </div>
          <button
            onClick={() => scrollToSection('#services')}
            className="text-sm font-bold text-stone-900 tracking-widest uppercase hover:underline hover:translate-x-2 transition-all duration-300 hover:text-stone-700"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Journey Through Our Projects
          </button>
        </div>
      </div>

      {/* Technologies Marquee - minimal design */}
            <div className="relative w-full py-6 bg-stone-800 border-y border-stone-700 z-10">
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...technologies, ...technologies].map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div key={index} className="inline-flex items-center gap-3 mx-8 px-6 py-2 bg-stone-700 border border-stone-600 rounded-sm hover:bg-stone-600 transition-all duration-300">
                        <Icon className="w-4 h-4 text-stone-200" />
                        <span className="text-xs font-semibold text-stone-200 tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>{tech.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

      {/* Enhanced Client Types Marquee */}
      <div className="relative w-full py-5 bg-stone-900 border-b border-stone-800 z-10">
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="inline-flex items-center gap-2 mx-8 hover:scale-105 transition-transform duration-300">
                <CheckCircle2 className="w-3 h-3 text-stone-400 animate-pulse-slow" />
                <span className="text-xs font-medium text-stone-300 tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes tilt {
          0%, 100% { transform: rotate(6deg); }
          50% { transform: rotate(-4deg); }
        }

        @keyframes tilt-reverse {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes stamp {
          0% { 
            transform: rotate(12deg) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: rotate(8deg) scale(1.05);
            opacity: 0.9;
          }
          100% { 
            transform: rotate(12deg) scale(1);
            opacity: 0.7;
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slide-diagonal {
          0%, 100% { transform: translate(-50%, -128px); }
          50% { transform: translate(calc(-50% + 10px), calc(-128px - 10px)); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes expand-pulse {
          0% { width: 0; opacity: 0; }
          50% { width: 16rem; opacity: 1; }
          100% { width: 16rem; opacity: 0.8; }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg); }
        }

        @keyframes stripes {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-marquee { animation: marquee 50s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 45s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-tilt { animation: tilt 6s ease-in-out infinite; }
        .animate-tilt-reverse { animation: tilt-reverse 5s ease-in-out infinite; }
        .animate-stamp { animation: stamp 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-slide-diagonal { animation: slide-diagonal 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-expand-pulse { animation: expand-pulse 2s ease-out forwards; }
        .animate-ping-slow { animation: ping-slow 2s ease-in-out infinite; }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .animate-stripes { animation: stripes 20s linear infinite; }

        .hover-lift {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .text-3d {
          text-shadow: 
            1px 1px 0 rgba(120, 113, 108, 0.3),
            2px 2px 0 rgba(120, 113, 108, 0.25),
            3px 3px 0 rgba(120, 113, 108, 0.2),
            4px 4px 0 rgba(120, 113, 108, 0.15),
            5px 5px 10px rgba(0, 0, 0, 0.1);
        }

        .perspective-shape {
          perspective: 1000px;
        }

        .scanlines {
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.05) 0px,
            rgba(0, 0, 0, 0.05) 1px,
            transparent 1px,
            transparent 2px
          );
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(2px); }
        }

        .glitch-text:hover {
          animation: glitch 0.3s infinite;
        }

        .magnetic-button {
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .icon-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .stat-card:hover .icon-3d {
          transform: rotateY(360deg) scale(1.1);
        }

        .shine-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          transform: translateX(-100%);
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
        }

        .stat-card:hover .shine-effect {
          transform: translateX(100%);
        }

        .tech-badge {
          position: relative;
          overflow: hidden;
        }

        .tech-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }

        .tech-badge:hover::before {
          left: 100%;
        }

        .rotate-badge {
          animation: rotate-wobble 6s ease-in-out infinite;
        }

        @keyframes rotate-wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default Hero;