import { ArrowRight, Sparkles, Award, TrendingUp, Users, Zap, Code, Database, Cloud, Lock, Globe, Rocket, Shield, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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
    'Early-Stage Startups', 'Growing Businesses', 'Small & Medium Enterprises',
    'Product-Based Companies', 'Service-Based Companies', 'Independent Founders',
    'Emerging Brands', 'Local & Remote Clients',
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: Award },
    { value: '20+', label: 'Happy Clients', icon: Users },
    { value: '3+', label: 'Years Experience', icon: TrendingUp },
    { value: '98%', label: 'Client Satisfaction', icon: Zap },
  ];

  return (
    <section ref={heroRef} id="home" className="fabric-hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Static fabric texture layers */}
      <div className="fabric-weave absolute inset-0" />
      <div className="fabric-crosshatch absolute inset-0" />
      <div className="fabric-grain absolute inset-0" />

      {/* Decorative corner ornaments */}
      <div className="corner-ornament absolute top-6 left-6 w-24 h-24 pointer-events-none" />
      <div className="corner-ornament absolute top-6 right-6 w-24 h-24 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
      <div className="corner-ornament absolute bottom-6 left-6 w-24 h-24 pointer-events-none" style={{ transform: 'scaleY(-1)' }} />
      <div className="corner-ornament absolute bottom-6 right-6 w-24 h-24 pointer-events-none" style={{ transform: 'scale(-1)' }} />

      {/* Tapestry frame borders */}
      <div className="tapestry-border absolute inset-4 pointer-events-none" />
      <div className="tapestry-inner-border absolute inset-8 pointer-events-none opacity-40" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center flex-1 flex flex-col justify-center w-full">

        {/* Premium badge */}
        <div className="flex justify-center mb-10 animate-rise">
          <div className="premium-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium IT Solutions</span>
            <div className="badge-dot" />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="hero-headline animate-rise-delay-1" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
          <span className="headline-line-1">TRANSFORM YOUR</span>
          <span className="headline-line-2">
            <span className="headline-accent">BUSINESS</span>
            <span className="headline-plain"> WITH</span>
          </span>
          <span className="headline-line-3">ELITE TECH</span>
          <div className="headline-rule" />
        </h1>

        {/* CTA Button */}
        <div className="flex justify-center mb-16 animate-rise-delay-2">
          <button onClick={() => scrollToSection('#contact')} className="cta-button">
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div className="description-block animate-rise-delay-3">
          <div className="desc-ornament left">❝</div>
          <div className="desc-ornament right">❞</div>
          <p className="desc-primary">
            WE'RE NOT JUST DEVELOPERS. WE'RE PROBLEM SOLVERS, INNOVATORS, AND YOUR TRUSTED PARTNERS.
          </p>
          <div className="desc-divider">
            <span className="divider-line" />
            <span className="divider-gem">◆</span>
            <span className="divider-line" />
          </div>
          <p className="desc-secondary">
            WITH OVER 3 YEARS OF EXPERIENCE, WE'RE PASSIONATE ABOUT CRAFTING BESPOKE DIGITAL SOLUTIONS.
            FROM LEGACY SYSTEMS TO MODERN APPLICATIONS — WE DELIVER WITH PRECISION AND CARE.
          </p>
        </div>

        {/* Stats grid */}
        <div className="stats-grid animate-rise-delay-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="stat-card">
                <div className="stat-corner tl" />
                <div className="stat-corner tr" />
                <div className="stat-corner bl" />
                <div className="stat-corner br" />
                <div className="stat-icon-wrap">
                  <Icon className="stat-icon" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-shimmer" />
              </div>
            );
          })}
        </div>

        {/* Journey link */}
        <div className="journey-link animate-rise-delay-5">
          <div className="journey-pip" />
          <button onClick={() => scrollToSection('#services')} className="journey-text">
            ✦ Journey Through Our Projects ✦
          </button>
          <div className="journey-pip" />
        </div>
      </div>

      {/* Technologies marquee */}
      <div className="marquee-band band-tech relative w-full z-10">
        <div className="marquee-inner">
          <div className="marquee-track">
            {[...technologies, ...technologies].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="tech-chip">
                  <Icon className="chip-icon" />
                  <span className="chip-text">{tech.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Clients marquee */}
      <div className="marquee-band band-clients relative w-full z-10">
        <div className="marquee-inner">
          <div className="marquee-track-reverse">
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="client-chip">
                <CheckCircle2 className="client-icon" />
                <span className="client-text">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

        :root {
          --c-deepbrown: #472825;
          --c-taupe: #96786F;
          --c-sand: #D3AB80;
          --c-cream: #FDE4BC;
          --c-ivory: #FFF4E2;
          --c-amber: #B8865A;
          --c-darkest: #2A1510;
        }

        /* ===== FABRIC BACKGROUND ===== */
        .fabric-hero {
          background-color: var(--c-ivory);
          font-family: 'Cormorant Garamond', serif;
        }

        .fabric-weave {
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(71,40,37,0.04) 2px, rgba(71,40,37,0.04) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(71,40,37,0.03) 2px, rgba(71,40,37,0.03) 4px);
          z-index: 0;
        }

        .fabric-crosshatch {
          background-image:
            repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(150,120,111,0.06) 6px, rgba(150,120,111,0.06) 7px),
            repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(150,120,111,0.04) 6px, rgba(150,120,111,0.04) 7px);
          z-index: 1;
        }

        .fabric-grain {
          z-index: 2;
          opacity: 0.5;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
          background-size: 256px 256px;
          pointer-events: none;
        }

        .fabric-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 70% at 50% 40%, rgba(253,228,188,0.6) 0%, rgba(253,228,188,0.2) 50%, rgba(71,40,37,0.18) 100%);
          z-index: 3;
          pointer-events: none;
        }

        .fabric-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(211,171,128,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 10% 80%, rgba(71,40,37,0.1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 90% 20%, rgba(71,40,37,0.08) 0%, transparent 70%);
          z-index: 4;
          pointer-events: none;
        }

        /* ===== TAPESTRY BORDERS ===== */
        .tapestry-border {
          border: 3px solid var(--c-deepbrown);
          border-image: repeating-linear-gradient(90deg, var(--c-deepbrown) 0px, var(--c-deepbrown) 8px, var(--c-sand) 8px, var(--c-sand) 12px, var(--c-deepbrown) 12px, var(--c-deepbrown) 20px) 3;
          z-index: 5;
        }

        .tapestry-inner-border {
          border: 1px solid var(--c-taupe);
          z-index: 5;
        }

        /* ===== CORNER ORNAMENTS ===== */
        .corner-ornament { z-index: 6; opacity: 0.7; }

        .corner-ornament::before,
        .corner-ornament::after {
          content: '';
          position: absolute;
          border-color: var(--c-deepbrown);
          border-style: solid;
        }

        .corner-ornament::before {
          width: 100%; height: 100%;
          top: 0; left: 0;
          border-width: 2px 0 0 2px;
        }

        .corner-ornament::after {
          width: 60%; height: 60%;
          top: 8px; left: 8px;
          border-width: 1px 0 0 1px;
          border-color: var(--c-sand);
        }

        /* ===== PREMIUM BADGE ===== */
        .premium-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 22px;
          background: linear-gradient(135deg, var(--c-deepbrown), #5A3A1E);
          border: 1px solid var(--c-sand);
          border-radius: 4px;
          color: var(--c-cream);
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          box-shadow: 0 4px 20px rgba(71,40,37,0.3);
        }

        .badge-dot {
          width: 6px; height: 6px;
          background: #7EC8A2;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        /* ===== HERO HEADLINE ===== */
        .hero-headline {
          position: relative;
          margin-bottom: 2.5rem;
          line-height: 0.88;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .headline-line-1, .headline-line-3 {
          display: block;
          color: var(--c-deepbrown);
          font-size: clamp(3rem, 9vw, 9rem);
          text-shadow: 2px 3px 0 rgba(150,120,111,0.2), 0 8px 30px rgba(71,40,37,0.1);
        }

        .headline-line-2 {
          display: block;
          font-size: clamp(3rem, 9vw, 9rem);
          text-shadow: 2px 3px 0 rgba(150,120,111,0.2), 0 8px 30px rgba(71,40,37,0.1);
        }

        .headline-accent { color: var(--c-amber); font-style: italic; }
        .headline-plain { color: var(--c-deepbrown); }

        .headline-rule {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 240px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--c-sand), var(--c-amber), var(--c-sand), transparent);
          animation: ruleExpand 1.5s ease-out 0.5s both;
        }

        @keyframes ruleExpand {
          from { width: 0; opacity: 0; }
          to { width: 240px; opacity: 1; }
        }

        /* ===== CTA BUTTON ===== */
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 44px;
          background: transparent;
          border: 2px solid var(--c-deepbrown);
          color: var(--c-deepbrown);
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: color 0.35s ease, box-shadow 0.35s ease;
          box-shadow: 3px 3px 0 var(--c-sand);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--c-deepbrown);
          transform: translateX(-105%);
          transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .cta-button:hover::before { transform: translateX(0); }
        .cta-button:hover { color: var(--c-cream); box-shadow: 6px 6px 0 var(--c-taupe); }
        .cta-button span, .cta-button svg { position: relative; z-index: 1; }

        /* ===== DESCRIPTION ===== */
        .description-block {
          position: relative;
          max-width: 800px;
          margin: 0 auto 3rem;
          padding: 2rem 3rem;
        }

        .description-block::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(150,120,111,0.25);
          border-radius: 2px;
        }

        .desc-ornament {
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          line-height: 1;
          color: rgba(150,120,111,0.2);
          font-weight: 400;
        }

        .desc-ornament.left { top: -12px; left: 12px; }
        .desc-ornament.right { bottom: -28px; right: 12px; transform: scaleX(-1); }

        .desc-primary {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-weight: 700;
          font-style: italic;
          letter-spacing: 0.05em;
          color: var(--c-deepbrown);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .desc-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
        }

        .divider-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--c-taupe)); }
        .divider-line:last-child { background: linear-gradient(90deg, var(--c-taupe), transparent); }
        .divider-gem { color: var(--c-sand); font-size: 10px; }

        .desc-secondary {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: var(--c-taupe);
          line-height: 1.9;
          text-transform: uppercase;
        }

        /* ===== STATS GRID ===== */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 900px;
          margin: 0 auto 3rem;
        }

        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .stat-card {
          position: relative;
          background: linear-gradient(145deg, rgba(255,244,226,0.9), rgba(253,228,188,0.6));
          border: 1px solid rgba(150,120,111,0.3);
          padding: 28px 16px 24px;
          backdrop-filter: blur(8px);
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--c-deepbrown), #5A3A1E);
          transform: translateY(100%);
          transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
          z-index: 0;
        }

        .stat-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(71,40,37,0.25); }
        .stat-card:hover::before { transform: translateY(0); }
        .stat-card:hover .stat-value { color: var(--c-cream); }
        .stat-card:hover .stat-label { color: var(--c-sand); }
        .stat-card:hover .stat-icon { color: var(--c-cream); }
        .stat-card:hover .stat-icon-wrap { background: rgba(255,255,255,0.15); border-color: rgba(211,171,128,0.5); }

        .stat-corner {
          position: absolute;
          width: 12px; height: 12px;
          border-color: var(--c-sand);
          border-style: solid;
          z-index: 1;
        }
        .stat-corner.tl { top: 6px; left: 6px; border-width: 1px 0 0 1px; }
        .stat-corner.tr { top: 6px; right: 6px; border-width: 1px 1px 0 0; }
        .stat-corner.bl { bottom: 6px; left: 6px; border-width: 0 0 1px 1px; }
        .stat-corner.br { bottom: 6px; right: 6px; border-width: 0 1px 1px 0; }

        .stat-icon-wrap {
          position: relative;
          display: inline-flex;
          padding: 8px;
          background: rgba(71,40,37,0.08);
          border: 1px solid rgba(150,120,111,0.3);
          margin-bottom: 12px;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .stat-icon {
          width: 16px; height: 16px;
          color: var(--c-deepbrown);
          transition: color 0.3s ease;
        }

        .stat-value {
          position: relative;
          z-index: 1;
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 900;
          color: var(--c-deepbrown);
          line-height: 1;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .stat-label {
          position: relative;
          z-index: 1;
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--c-taupe);
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .stat-shimmer {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0s;
        }

        .stat-card:hover .stat-shimmer {
          transform: translateX(100%);
          transition: transform 0.5s ease;
        }

        /* ===== JOURNEY LINK ===== */
        .journey-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .journey-pip { width: 32px; height: 1px; background: var(--c-taupe); }

        .journey-text {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--c-taupe);
          text-transform: uppercase;
          transition: color 0.3s ease, letter-spacing 0.3s ease;
        }

        .journey-text:hover { color: var(--c-deepbrown); letter-spacing: 0.28em; }

        /* ===== MARQUEE BANDS ===== */
        .marquee-band { overflow: hidden; }
        .band-tech { background: var(--c-deepbrown); padding: 14px 0; border-top: 1px solid var(--c-sand); border-bottom: 1px solid rgba(211,171,128,0.4); }
        .band-clients { background: var(--c-darkest); padding: 12px 0; border-bottom: 1px solid rgba(150,120,111,0.3); }

        .marquee-inner { position: relative; overflow: hidden; }
        .marquee-inner::before, .marquee-inner::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .band-tech .marquee-inner::before { left: 0; background: linear-gradient(90deg, var(--c-deepbrown), transparent); }
        .band-tech .marquee-inner::after { right: 0; background: linear-gradient(270deg, var(--c-deepbrown), transparent); }
        .band-clients .marquee-inner::before { left: 0; background: linear-gradient(90deg, var(--c-darkest), transparent); }
        .band-clients .marquee-inner::after { right: 0; background: linear-gradient(270deg, var(--c-darkest), transparent); }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 50s linear infinite;
        }

        .marquee-track-reverse {
          display: flex;
          white-space: nowrap;
          animation: marqueeReverse 45s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeReverse {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }

        .tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 12px;
          padding: 6px 18px;
          border: 1px solid rgba(211,171,128,0.35);
          background: rgba(255,255,255,0.05);
          flex-shrink: 0;
          transition: background 0.3s;
        }

        .tech-chip:hover { background: rgba(211,171,128,0.15); }
        .chip-icon { width: 14px; height: 14px; color: var(--c-sand); flex-shrink: 0; }
        .chip-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--c-cream);
          text-transform: uppercase;
        }

        .client-chip { display: inline-flex; align-items: center; gap: 8px; margin: 0 20px; flex-shrink: 0; }
        .client-icon { width: 12px; height: 12px; color: var(--c-taupe); flex-shrink: 0; }
        .client-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: rgba(253,228,188,0.65);
          text-transform: uppercase;
        }

        /* ===== ENTRANCE ANIMATIONS ===== */
        .animate-rise { animation: rise 0.9s ease-out both; }
        .animate-rise-delay-1 { animation: rise 1s ease-out 0.15s both; }
        .animate-rise-delay-2 { animation: rise 1s ease-out 0.3s both; }
        .animate-rise-delay-3 { animation: rise 1s ease-out 0.45s both; }
        .animate-rise-delay-4 { animation: rise 1s ease-out 0.6s both; }
        .animate-rise-delay-5 { animation: rise 1s ease-out 0.75s both; }

        @keyframes rise {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;