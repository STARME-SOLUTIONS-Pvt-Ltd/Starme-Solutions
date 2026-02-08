import { Cloud, Code, Shield, Smartphone, Database, Cpu, Globe, Layers, ArrowRight, Sparkles, CheckCircle2, Palette } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

const services = [
  {
    icon: Code,
    title: 'Web Application Development',
    description:
      'Modern, scalable web applications built using proven Web2 technologies and best engineering practices.',
    features: ['React & Next.js', 'Backend APIs', 'SaaS Platforms'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'High-performance mobile applications designed for both Android and iOS using modern frameworks.',
    features: ['React Native', 'Cross-Platform Apps', 'API Integration'],
  },
  {
    icon: Cpu,
    title: 'AI & Chatbot Solutions',
    description:
      'Intelligent chatbots and AI-powered tools that automate workflows and enhance customer experiences.',
    features: ['AI Chatbots', 'Workflow Automation', 'AI Integration'],
  },
  {
    icon: Database,
    title: 'Backend & Cloud Services',
    description:
      'Reliable backend systems and cloud deployments designed for scalability, security, and performance.',
    features: ['Node.js & APIs', 'Databases', 'Cloud Deployment'],
  },
  {
    icon: Layers,
    title: 'Web3 & Blockchain Solutions',
    description:
      'Blockchain-based applications and integrations for secure, transparent, and decentralized systems.',
    features: ['Smart Contracts', 'DApps', 'Blockchain Integration'],
  },
  {
    icon: Shield,
    title: 'Security & Best Practices',
    description:
      'Security-first development practices to protect applications, user data, and infrastructure.',
    features: ['Authentication', 'Secure APIs', 'Data Protection'],
  },
  {
    icon: Globe,
    title: 'Product & Digital Consulting',
    description:
      'Technical guidance to help startups and businesses plan, build, and scale digital products.',
    features: ['Product Planning', 'Tech Stack Guidance', 'Scalable Architecture'],
  },
  {
    icon: Palette,
    title: 'UI, Poster & Card Design',
    description:
      'Creative visual designs that strengthen brand identity and support product launches and marketing efforts.',
    features: ['UI Design', 'Posters & Banners', 'Business Cards & Creatives'],
  },
];

  return (
    <section ref={sectionRef} id="services" className="relative py-32 bg-gradient-to-br from-stone-200 via-stone-100 to-neutral-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'{'}</div>
      <div className="absolute bottom-20 right-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'}'}</div>
      <div className="absolute top-1/2 left-1/4 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
      <div className="absolute top-2/3 right-1/3 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800/90 border border-stone-700 rounded-md mb-8 shadow-md">
            <Sparkles className="w-4 h-4 text-stone-300" />
            <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Our Services</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tighter uppercase leading-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.03em' }}>
            OUR SERVICES
          </h2>
          
          <div className="relative w-32 h-1 bg-stone-800 mx-auto mb-8"></div>
          
          <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Comprehensive technology solutions for business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-300/50 hover:border-stone-800 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Top corner number indicator */}
                <div className="absolute top-3 right-3 text-xs font-bold text-stone-400 tracking-wider" style={{ fontFamily: "'Courier New', monospace" }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className="relative w-12 h-12 bg-stone-800 rounded-sm flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-stone-100" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-black mb-3 text-stone-900 transition-all duration-300 uppercase tracking-tight leading-tight"
                    style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-700 mb-5 leading-relaxed text-xs min-h-[60px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start text-xs text-stone-700 transition-colors duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <CheckCircle2 className="w-3 h-3 mr-2 text-stone-500 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <button className="group/btn flex items-center gap-2 text-xs font-bold text-stone-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 text-stone-900 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-stone-800 text-stone-100 p-10 rounded-sm shadow-2xl border border-stone-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-stone-300" />
                  <span className="text-xs font-semibold text-stone-300 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Custom Solutions</span>
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  NEED A TAILORED SOLUTION?
                </h3>
                <p className="text-stone-300 text-sm uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Let's discuss how we can help your business grow
                </p>
              </div>
              <button className="group px-10 py-4 bg-stone-200 text-stone-900 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-stone-100 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-stone-800 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Services;