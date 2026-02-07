import { Cloud, Code, Shield, Smartphone, Database, Cpu, Globe, Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
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
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for seamless digital transformation.',
      features: ['AWS & Azure', 'Cloud Migration', 'DevOps Integration'],
      gradient: 'from-blue-600 to-blue-800',
      iconBg: 'from-blue-500 to-blue-700',
      accentColor: 'bg-blue-500/10',
      glowColor: 'shadow-blue-500/20',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business requirements and workflows.',
      features: ['Web Applications', 'Enterprise Software', 'API Development'],
      gradient: 'from-purple-600 to-purple-800',
      iconBg: 'from-purple-500 to-purple-700',
      accentColor: 'bg-purple-500/10',
      glowColor: 'shadow-purple-500/20',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions protecting your digital assets and infrastructure.',
      features: ['Security Audits', 'Threat Detection', 'Compliance'],
      gradient: 'from-red-600 to-red-800',
      iconBg: 'from-red-500 to-red-700',
      accentColor: 'bg-red-500/10',
      glowColor: 'shadow-red-500/20',
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android ecosystems.',
      features: ['iOS & Android', 'React Native', 'Flutter'],
      gradient: 'from-green-600 to-green-800',
      iconBg: 'from-green-500 to-green-700',
      accentColor: 'bg-green-500/10',
      glowColor: 'shadow-green-500/20',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics and BI solutions.',
      features: ['Big Data', 'AI/ML', 'Business Intelligence'],
      gradient: 'from-amber-600 to-amber-800',
      iconBg: 'from-amber-500 to-orange-600',
      accentColor: 'bg-amber-500/10',
      glowColor: 'shadow-amber-500/20',
    },
    {
      icon: Cpu,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions leveraging artificial intelligence and machine learning.',
      features: ['Process Automation', 'Predictive Analytics', 'NLP'],
      gradient: 'from-indigo-600 to-indigo-800',
      iconBg: 'from-indigo-500 to-indigo-700',
      accentColor: 'bg-indigo-500/10',
      glowColor: 'shadow-indigo-500/20',
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies aligned with your business vision.',
      features: ['Strategy Planning', 'Change Management', 'Innovation'],
      gradient: 'from-cyan-600 to-cyan-800',
      iconBg: 'from-cyan-500 to-cyan-700',
      accentColor: 'bg-cyan-500/10',
      glowColor: 'shadow-cyan-500/20',
    },
    {
      icon: Layers,
      title: 'IT Consulting',
      description: 'Expert guidance and strategic advisory for technology decisions and implementations.',
      features: ['Architecture Design', 'Tech Advisory', 'Best Practices'],
      gradient: 'from-pink-600 to-pink-800',
      iconBg: 'from-pink-500 to-pink-700',
      accentColor: 'bg-pink-500/10',
      glowColor: 'shadow-pink-500/20',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-100/40 to-transparent rounded-full filter blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-amber-100/40 to-transparent rounded-full filter blur-[120px] animate-float-slow-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-amber-600 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <div className="relative w-32 h-1.5 bg-gradient-to-r from-blue-900 via-blue-600 to-amber-600 mx-auto mb-8 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive technology solutions designed to accelerate your business growth and digital excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-100 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Top corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.accentColor} rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 ${service.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Icon glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} rounded-2xl opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300`}></div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-5 leading-relaxed text-sm min-h-[60px]">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
                      >
                        <CheckCircle2 className={`w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600 transition-colors duration-300`} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <button className={`group/btn flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>

                {/* Decorative corner dots */}
                <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-1.5 h-1.5 bg-gradient-to-br ${service.gradient} rounded-full animate-pulse`}></div>
                  <div className={`w-1.5 h-1.5 bg-gradient-to-br ${service.gradient} rounded-full animate-pulse delay-75`}></div>
                  <div className={`w-1.5 h-1.5 bg-gradient-to-br ${service.gradient} rounded-full animate-pulse delay-150`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-12 py-8 rounded-2xl shadow-2xl">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-semibold text-blue-200">Custom Solutions</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Need a Tailored Solution?</h3>
              <p className="text-blue-100 text-sm">Let's discuss how we can help your business grow</p>
            </div>
            <button className="group px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -30px);
          }
        }

        @keyframes float-slow-delayed {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slow-delayed {
          animation: float-slow-delayed 25s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </section>
  );
};

export default Services;