import { Target, Award, Users, TrendingUp, Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const features = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'We align technology with your business objectives to create measurable impact and sustainable growth.',
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'Our commitment to quality and innovation has earned us recognition as industry leaders.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Building lasting partnerships through transparency, collaboration, and dedicated support.',
    },
    {
      icon: TrendingUp,
      title: 'Future Ready',
      description: 'Leveraging emerging technologies to keep your business ahead of the curve.',
    },
  ];

  const achievements = [
    {
      value: '50+',
      label: 'Completed Projects',
      icon: Award,
    },
    {
      value: '15+',
      label: 'Trusted Clients',
      icon: Users,
    },
    {
      value: '3+',
      label: 'Years of Learning & Delivery',
      icon: TrendingUp,
    },
    {
      value: '98%',
      label: 'Positive Feedback',
      icon: Zap,
    },
  ];


  return (
    <section ref={sectionRef} id="about" className="relative py-32 bg-gradient-to-br from-stone-100 via-neutral-50 to-stone-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'}'}</div>
      <div className="absolute bottom-20 left-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'{'}</div>
      <div className="absolute top-1/3 right-1/4 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800/90 border border-stone-700 rounded-md mb-8 shadow-md">
            <Sparkles className="w-4 h-4 text-stone-300" />
            <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>About Us</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tighter uppercase leading-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.03em' }}>
            ABOUT <span className="block sm:inline">STARME SOLUTIONS</span>
          </h2>
          
          <div className="relative w-32 h-1 bg-stone-800 mx-auto mb-8"></div>
          
          <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            A premier IT solutions provider delivering transformative technology services.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-stone-900 mb-8 leading-tight uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                EMPOWERING BUSINESSES THROUGH INNOVATION
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="text-3xl text-stone-800/30 font-light mt-1" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
                  <p className="text-stone-700 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    STARME SOLUTIONS IS A TECHNOLOGY-DRIVEN COMPANY FOCUSED ON BUILDING MODERN DIGITAL PRODUCTS
                    FOR STARTUPS AND GROWING BUSINESSES. WE TURN IDEAS INTO ROBUST, SCALABLE SOLUTIONS USING
                    PROVEN ENGINEERING PRACTICES.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed text-sm pl-9" style={{ fontFamily: "'Inter', sans-serif" }}>
                  OUR TEAM WORKS CLOSELY WITH CLIENTS TO UNDERSTAND THEIR CHALLENGES AND DELIVER CLEAN,
                  EFFICIENT, AND SECURE SYSTEMS USING THE LATEST WEB AND CLOUD TECHNOLOGIES.
                </p>

                <p className="text-stone-700 leading-relaxed text-sm pl-9" style={{ fontFamily: "'Inter', sans-serif" }}>
                  WE DON'T JUST BUILD FOR TODAY — WE ARCHITECT SOLUTIONS WITH FLEXIBILITY AND LONG-TERM
                  GROWTH IN MIND, HELPING BUSINESSES STAY COMPETITIVE AS TECHNOLOGY EVOLVES.
                </p>
              </div>
            </div>

            {/* Mini Achievement Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-stone-100/80 backdrop-blur-sm rounded-sm p-6 shadow-md border border-stone-300/50 hover:shadow-xl hover:border-stone-800 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="p-2 rounded-sm bg-stone-800 w-fit group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-stone-100" />
                      </div>
                      <div>
                        <div className="text-4xl font-black text-stone-900 tracking-tight mb-1" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                          {achievement.value}
                        </div>
                        <div className="text-xs text-stone-700 font-medium uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {achievement.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main content card */}
            <div className="relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-8 shadow-xl border border-stone-300">
              <div className="grid gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white rounded-sm p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-stone-200 overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex gap-5">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-sm flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Icon className="w-6 h-6 text-stone-100" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="font-black text-stone-900 mb-2 text-base uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                            {feature.title}
                          </h4>
                          <p className="text-xs text-stone-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  );
                })}
              </div>

              {/* Corner year badge */}
              <div className="absolute -top-4 -right-4 bg-stone-800 text-stone-100 px-5 py-3 rounded-sm shadow-xl border-2 border-stone-200">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-xs tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>EST. 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-stone-800 text-stone-100 p-10 rounded-sm shadow-2xl border border-stone-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-stone-700 rounded-sm flex items-center justify-center border border-stone-600">
                  <Sparkles className="w-8 h-8 text-stone-200" />
                </div>
                <div className="text-left">
                  <div className="font-black text-2xl uppercase tracking-tight mb-1" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                    READY TO TRANSFORM?
                  </div>
                  <div className="text-sm text-stone-300 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Let's build something amazing together
                  </div>
                </div>
              </div>
              <button className="px-10 py-4 bg-stone-200 text-stone-900 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-stone-100 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-stone-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Decorative quote marks */}
        <div className="absolute top-1/2 left-8 text-8xl text-stone-800/5 font-serif leading-none">"</div>
        <div className="absolute bottom-1/4 right-8 text-8xl text-stone-800/5 font-serif leading-none">"</div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default About;