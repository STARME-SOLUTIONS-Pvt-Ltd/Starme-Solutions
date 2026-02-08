import { Server, Boxes, Workflow, Binary, Sparkles, Award, Code, PenTool } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Technologies = () => {
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

  const techCategories = [
    {
      icon: Server,
      title: 'Backend & Cloud',
      technologies: [
        'Node.js', 'Python', '.NET', 'Go',
        'AWS', 'Azure', 'Google Cloud', 'Docker',
      ],
    },
    {
      icon: Boxes,
      title: 'Frontend & Mobile',
      technologies: [
        'React', 'Next.js', 'TypeScript',
        'React Native', 'Flutter', 'Swift', 'Kotlin',
      ],
    },
    {
      icon: Binary,
      title: 'Data & AI',
      technologies: [
        'TensorFlow', 'PyTorch', 'Scikit-learn',
        'MongoDB', 'PostgreSQL',
      ],
    },
    {
      icon: Workflow,
      title: 'DevOps & Security',
      technologies: [
        'Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus',
        'OAuth', 'JWT', 'SSL/TLS', 'OWASP', 'Penetration Testing',
      ],
    },
    {
      icon: PenTool,
      title: 'Design & Branding',
      technologies: [
        'UI/UX Design',
        'Figma',
        'Adobe XD',
        'Poster Design',
        'Marketing Creatives',
        'Business Cards',
        'Brand Guidelines',
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="technologies" className="relative py-32 bg-gradient-to-br from-stone-200 via-stone-100 to-neutral-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'{'}</div>
      <div className="absolute bottom-20 right-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'}'}</div>
      <div className="absolute top-1/2 right-1/4 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>
      <div className="absolute bottom-1/3 left-1/4 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800/90 border border-stone-700 rounded-md mb-8 shadow-md">
            <Code className="w-4 h-4 text-stone-300" />
            <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Technologies</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tighter uppercase leading-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.03em' }}>
            TECHNOLOGIES & EXPERTISE
          </h2>
          
          <div className="relative w-32 h-1 bg-stone-800 mx-auto mb-8"></div>
          
          <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Mastery across advanced technology stacks.
          </p>
        </div>

        {/* Technology Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-300/50 hover:border-stone-800 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Top corner number */}
                <div className="absolute top-3 right-3 text-xs font-bold text-stone-400 tracking-wider" style={{ fontFamily: "'Courier New', monospace" }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Category Header */}
                <div className="relative flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-stone-800 rounded-sm flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-7 h-7 text-stone-100" />
                  </div>
                  <h3 className="text-xl font-black text-stone-900 group-hover:text-stone-900 transition-colors duration-300 uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                    {category.title}
                  </h3>
                </div>

                {/* Technology Tags */}
                <div className="relative flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 bg-stone-200 text-stone-800 rounded-sm text-xs font-semibold hover:bg-stone-300 hover:-translate-y-0.5 transition-all duration-300 border border-stone-300 cursor-default uppercase tracking-wide"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className={`relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-12 shadow-xl border border-stone-300 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-2xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
            <div className="absolute top-4 right-4 text-2xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

            <div className="relative grid lg:grid-cols-3 gap-12 text-center">
              {/* Partnerships */}
              <div className="group space-y-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-stone-800 rounded-sm mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-stone-100" />
                </div>
                <div className="text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  10+
                </div>
                <div className="text-base text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                  Technology Partnerships
                </div>
                <p className="text-xs text-stone-700 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Trusted tools, platforms, and ecosystems
                </p>
              </div>

              {/* Experience */}
              <div className="group space-y-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-stone-800 rounded-sm mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-stone-100" />
                </div>
                <div className="text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  25+
                </div>
                <div className="text-base text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                  Projects Delivered
                </div>
                <p className="text-xs text-stone-700 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Across web, mobile, AI, and blockchain
                </p>
              </div>

              {/* Tech Focus */}
              <div className="group space-y-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-stone-800 rounded-sm mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-7 h-7 text-stone-100" />
                </div>
                <div className="text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  100%
                </div>
                <div className="text-base text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                  Modern Tech Stack
                </div>
                <p className="text-xs text-stone-700 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Built with scalable, future-ready technologies
                </p>
              </div>
            </div>

            {/* Divider lines between stats (hidden on mobile) */}
            <div className="absolute top-1/2 left-1/3 hidden lg:block w-px h-32 bg-stone-300 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-1/3 hidden lg:block w-px h-32 bg-stone-300 -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
};

export default Technologies;