import { ArrowRight, Sparkles, Award, TrendingUp, Users, Zap, Code, Database, Cloud, Lock, Globe, Rocket, Shield, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system for subtle texture
    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.speedZ = Math.random() * 1.5 + 0.5;
        
        this.color = 'rgba(100, 100, 100, 0.15)';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z -= this.speedZ;

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

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

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

  // Marquee content
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


  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-stone-200 via-stone-100 to-neutral-200">
      {/* Subtle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Decorative brackets */}
      <div className="absolute top-32 left-8 text-6xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'{'}</div>
      <div className="absolute top-32 right-8 text-6xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'}'}</div>
      <div className="absolute bottom-32 left-1/4 text-4xl text-stone-800/15 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
      <div className="absolute bottom-40 right-1/3 text-4xl text-stone-800/15 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

      {/* Year badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-32 text-stone-800/30 border border-stone-800/30 px-4 py-2 rounded-full text-sm tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>
        ( 2026 )
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10 flex-1 flex flex-col justify-center">
        {/* Small header badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800/90 backdrop-blur-xl border border-stone-700 rounded-md mb-12 shadow-lg animate-fade-in mx-auto">
          <Sparkles className="w-4 h-4 text-stone-300" />
          <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Premium IT Solutions
          </span>
        </div>

        {/* Main headline - BOLD vintage style */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-black mb-8 animate-fade-in-up tracking-tighter leading-[0.85] uppercase">
          <span className="block text-stone-900" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.05em' }}>
            TRANSFORM YOUR
          </span>
          <span
            className="block"
            style={{
              fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            <span style={{ color: "#5A3A1E" }}>BUSINESS</span>{" "}
            <span className="text-stone-900">WITH</span>
          </span>
          <span className="block text-stone-900" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.05em' }}>
            ELITE TECH
          </span>
        </h1>

        {/* CTA Button */}
        <div className="flex justify-center mb-16 animate-fade-in-up delay-200">
          <button
            onClick={() => scrollToSection('#contact')}
            className="group relative px-12 py-4 bg-stone-200 border-2 border-stone-800 text-stone-900 rounded-full font-bold shadow-lg hover:bg-stone-800 hover:text-stone-100 transition-all duration-300 flex items-center gap-3 overflow-hidden uppercase tracking-wider text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="relative">Get Free Consultation</span>
          </button>
        </div>

        {/* Description section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up delay-400">
          <p className="text-lg sm:text-xl text-stone-900 leading-relaxed font-normal mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            WE'RE NOT JUST DEVELOPERS. WE'RE PROBLEM SOLVERS, INNOVATORS, AND YOUR TRUSTED PARTNERS.
          </p>
          
          <div className="flex items-start gap-3 text-left max-w-2xl mx-auto">
            <div className="text-4xl text-stone-800/30 font-light mt-1" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
            <p className="text-sm text-stone-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              WITH OVER 3 YEARS OF EXPERIENCE IN THE INDUSTRY, WE'RE PASSIONATE ABOUT REVIVING CLASSIC TECHNOLOGICAL STYLES. FROM LEGACY SYSTEMS TO MID-CENTURY MODERN APPLICATIONS.
            </p>
          </div>
        </div>

        {/* Stats grid - minimalist cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-in-up delay-600 mb-12">
          {[
            { value: '50+', label: 'Projects Delivered', icon: Award },
            { value: '20+', label: 'Happy Clients', icon: Users },
            { value: '3+', label: 'Years Experience', icon: TrendingUp },
            { value: '98%', label: 'Client Satisfaction', icon: Zap },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-stone-100/80 backdrop-blur-sm rounded-sm p-8 shadow-md border border-stone-300/50 hover:shadow-xl hover:border-stone-800 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon */}
                <div className="inline-flex p-2 rounded-sm bg-stone-800 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-stone-100" />
                </div>
                
                {/* Value */}
                <div className="text-5xl font-black text-stone-900 mb-2 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-xs text-stone-700 font-medium tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Journey CTA */}
        <div className="flex justify-center items-center gap-3 animate-fade-in-up delay-800">
          <div className="w-6 h-6 rounded-full border-2 border-stone-800 flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-stone-800" />
          </div>
          <button
            onClick={() => scrollToSection('#services')}
            className="text-sm font-bold text-stone-900 tracking-widest uppercase hover:underline"
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

      {/* Client Types Marquee */}
      <div className="relative w-full py-5 bg-stone-900 border-b border-stone-800 z-10">
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="inline-flex items-center gap-2 mx-8">
                <CheckCircle2 className="w-3 h-3 text-stone-400" />
                <span className="text-xs font-medium text-stone-300 tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
};

export default Hero;