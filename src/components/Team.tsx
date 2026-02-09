import { Linkedin, Mail, Award, Users, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Jai from '../assets/team/jaiganesh.jpg';
import Harish from '../assets/team/harish.jpeg';
import allwyn from '../assets/team/allwyn.jpeg';
import abhi from '../assets/team/abhi.jpeg';
import muthu from '../assets/team/muthu.jpeg';
import dilli from '../assets/team/dilli.jpeg';
import lallu from '../assets/team/lallu.jpeg';
import dinseh from '../assets/team/dinesh.jpeg';
import ajay from '../assets/team/ajay.jpeg';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

const team = [
  {
    name: 'Jai Ganesh H',
    role: 'Full-Stack Developer, Founder & CEO',
    image: Jai,
    bio: 'Founder driving vision, strategy, and overall execution of the company.',
  },
  {
    name: 'Harish V',
    role: 'Co-Founder, Marketing & Finance',
    image: Harish,
    bio: 'Managing business growth, marketing strategy, and financial planning.',
  },
  {
    name: 'Abhishak Timothy',
    role: 'Chief Product Officer (CPO)',
    image: abhi,
    bio: 'Overseeing product vision, user experience, and feature roadmap.',
  },
  {
    name: 'Lalethesh S',
    role: 'Chief Operating Officer (COO)',
    image: lallu,
    bio: 'Handling operations, delivery processes, and internal coordination.',
  },
  {
    name: 'Allwyn V',
    role: 'R&D Lead',
    image: allwyn,
    bio: 'Focused on research, innovation, and emerging technology exploration.',
  },
  {
    name: 'Dilli Basker M',
    role: 'Chief Technology Officer (CTO)',
    image: dilli,
    bio: 'Leading technical architecture, development strategy, and engineering decisions.',
  },
  {
    name: 'Muthu Ganesh S',
    role: 'Human Resources Manager',
    image: muthu,
    bio: 'Managing people operations, culture, and talent growth.',
  },
    {
    name: 'Ajay U',
    role: 'Marketing & Finance Manager',
    image: ajay,
    bio: 'Managing marketing campaigns, financial planning, and business development.',
  },
    {
    name: 'Dinseh S',
    role: 'Marketing & Finance Manager',
    image: dinseh,
    bio: 'Managing marketing campaigns, financial planning, and business development.',
  },
];

  return (
    <section ref={sectionRef} id="team" className="relative py-32 bg-gradient-to-br from-stone-100 via-neutral-50 to-stone-200 overflow-hidden">
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
            <Users className="w-4 h-4 text-stone-300" />
            <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Our Team</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tighter uppercase leading-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.03em' }}>
            MEET OUR LEADERSHIP
          </h2>
          
          <div className="relative w-32 h-1 bg-stone-800 mx-auto mb-8"></div>
          
          <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Visionaries, innovators, and experts dedicated to success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-stone-50/90 backdrop-blur-sm rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-300/50 hover:border-stone-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Top corner number */}
              <div className="absolute top-3 right-3 z-20 text-xs font-bold text-white bg-stone-800/80 backdrop-blur-sm px-2 py-1 rounded-sm tracking-wider" style={{ fontFamily: "'Courier New', monospace" }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Member Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-stone-300 font-bold mb-3 text-sm uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {member.role}
                  </p>
                  <p className="text-stone-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button className="w-9 h-9 bg-stone-800/90 backdrop-blur-sm rounded-sm flex items-center justify-center hover:bg-stone-700 text-stone-100 transition-all duration-300 shadow-lg hover:scale-110">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 bg-stone-800/90 backdrop-blur-sm rounded-sm flex items-center justify-center hover:bg-stone-700 text-stone-100 transition-all duration-300 shadow-lg hover:scale-110">
                  <Mail className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-12 shadow-xl border border-stone-300 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-2xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
            <div className="absolute top-4 right-4 text-2xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

            <div className="relative grid lg:grid-cols-3 gap-12 text-center">
              <div className="group space-y-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-stone-800 rounded-sm mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-stone-100" />
                </div>
                <div className="text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  3+
                </div>
                <div className="text-base text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                  Years Combined Experience
                </div>
                <p className="text-xs text-stone-700 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Industry veterans leading the way
                </p>
              </div>

              <div className="group space-y-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-stone-800 rounded-sm mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-stone-100" />
                </div>
                <div className="text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  9
                </div>
                <div className="text-base text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                  Expert Team Members
                </div>
                <p className="text-xs text-stone-700 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Dedicated professionals at your service
                </p>
              </div>

              <div className="group space-y-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-stone-800 rounded-sm mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-stone-100" />
                </div>
                <div className="text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  100%
                </div>
                <div className="text-base text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                  Client Satisfaction
                </div>
                <p className="text-xs text-stone-700 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Committed to excellence always
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

export default Team;