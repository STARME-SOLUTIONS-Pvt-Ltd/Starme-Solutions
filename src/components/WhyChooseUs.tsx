import { CheckCircle2, Clock, Headphones, Lightbulb, Lock, Zap, Sparkles, ArrowRight, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const reasons = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and methodologies to deliver solutions that give you a competitive edge.',
    },
    {
      icon: CheckCircle2,
      title: 'Proven Track Record',
      description: 'Over 500 successful projects delivered across diverse industries with measurable business impact.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance ensuring your operations run smoothly.',
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile methodologies and efficient processes ensure timely delivery without compromising quality.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and compliance standards protecting your sensitive data.',
    },
    {
      icon: Clock,
      title: 'Future-Proof Solutions',
      description: 'Scalable architectures designed to grow with your business and adapt to changing needs.',
    },
  ];

  return (
    <section ref={sectionRef} id="why-us" className="relative py-32 bg-gradient-to-br from-stone-100 via-neutral-50 to-stone-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'}'}</div>
      <div className="absolute bottom-20 left-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'{'}</div>
      <div className="absolute top-1/3 left-1/4 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
      <div className="absolute bottom-1/3 right-1/4 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800/90 border border-stone-700 rounded-md mb-8 shadow-md">
            <Star className="w-4 h-4 text-stone-300" />
            <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Why Choose Us</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tighter uppercase leading-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.03em' }}>
            WHY CHOOSE <span className="block sm:inline">STARME SOLUTIONS</span>
          </h2>
          
          <div className="relative w-32 h-1 bg-stone-800 mx-auto mb-8"></div>
          
          <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Partner with a technology leader committed to your success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-300/50 hover:border-stone-800 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Top corner number */}
                <div className="absolute top-3 right-3 text-xs font-bold text-stone-400 tracking-wider" style={{ fontFamily: "'Courier New', monospace" }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-stone-800 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Icon className="w-7 h-7 text-stone-100" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-stone-900 mb-3 group-hover:text-stone-900 transition-colors duration-300 uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-700 leading-relaxed mb-6 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {reason.description}
                  </p>

                  {/* Animated bottom line */}
                  <div className="h-0.5 bg-stone-800 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-stone-800 rounded-sm p-12 shadow-2xl overflow-hidden border border-stone-700">
            {/* Decorative corner quotes */}
            <div className="absolute top-6 left-6 text-4xl text-stone-700/30 font-serif leading-none">"</div>
            <div className="absolute bottom-6 right-6 text-4xl text-stone-700/30 font-serif leading-none">"</div>
            
            {/* Year badge */}
            <div className="absolute top-6 right-6 text-xs text-stone-500 border border-stone-700 px-3 py-1.5 rounded-full tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>
              ( EST. 2021 )
            </div>

            <div className="relative text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-100 mb-4 uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                READY TO TRANSFORM YOUR BUSINESS?
              </h3>
              
              <p className="text-sm text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                Join hundreds of satisfied clients who have elevated their operations.
              </p>

              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-stone-200 text-stone-900 rounded-sm font-bold hover:bg-stone-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg border-2 border-stone-800 uppercase tracking-wider text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-10 pt-8 border-t border-stone-700">
                <div className="text-center">
                  <div className="text-4xl font-black text-stone-100 mb-1 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>50+</div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Projects Delivered</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-stone-700"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-stone-100 mb-1 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>15+</div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Trusted Clients</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-stone-700"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-stone-100 mb-1 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>98%</div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Client Satisfaction</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-stone-700"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-stone-100 mb-1 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>24/7</div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;