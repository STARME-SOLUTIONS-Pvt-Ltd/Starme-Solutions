import { Star, Quote, Award, Users, Sparkles, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CTO, Global Finance Corp',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Starme Solutions transformed our legacy infrastructure into a modern, scalable cloud platform. Their expertise and professionalism exceeded all expectations.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, Healthcare Innovations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The mobile application they developed revolutionized our patient engagement. Outstanding quality, delivered on time and within budget.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'VP Technology, Retail Dynamics',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Their data analytics solution provided insights that drove a 40% increase in operational efficiency. True partners in our digital transformation.',
      rating: 5,
    },
    {
      name: 'Emily Thompson',
      role: 'Director IT, Manufacturing Pro',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Exceptional cybersecurity implementation. Their proactive approach and attention to detail gave us complete peace of mind.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'COO, Logistics Solutions',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The custom ERP system streamlined our entire operation. Starme Solutions delivers world-class solutions with unmatched support.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'CIO, Education Network',
      image: 'https://images.pexels.com/photos/3756665/pexels-photo-3756665.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Their AI-powered platform revolutionized our learning management system. Innovative, reliable, and always exceeding expectations.',
      rating: 5,
    },
  ];

  const clients = [
    'Global Finance Corp',
    'Healthcare Innovations',
    'Retail Dynamics',
    'Manufacturing Pro',
    'Logistics Solutions',
    'Education Network',
    'Tech Ventures',
    'Energy Solutions',
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 bg-gradient-to-br from-stone-200 via-stone-100 to-neutral-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'{'}</div>
      <div className="absolute bottom-20 right-12 text-6xl text-stone-800/10 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'}'}</div>
      <div className="absolute top-1/3 right-1/4 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>
      <div className="absolute bottom-1/3 left-1/4 text-4xl text-stone-800/8 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800/90 border border-stone-700 rounded-md mb-8 shadow-md">
            <Star className="w-4 h-4 text-stone-300" />
            <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Testimonials</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tighter uppercase leading-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.03em' }}>
            CLIENT SUCCESS STORIES
          </h2>
          
          <div className="relative w-32 h-1 bg-stone-800 mx-auto mb-8"></div>
          
          <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Trusted by industry leaders worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-300/50 hover:border-stone-800 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-stone-900" />
              </div>

              {/* Top corner number */}
              <div className="absolute top-3 left-3 text-xs font-bold text-stone-400 tracking-wider z-10" style={{ fontFamily: "'Courier New', monospace" }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Client Info */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-sm object-cover border-2 border-stone-300 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-black text-stone-900 group-hover:text-stone-900 transition-colors duration-300 uppercase tracking-tight text-sm" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-stone-600 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>{testimonial.role}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="relative flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-stone-800 text-stone-800 group-hover:scale-110 transition-transform duration-300" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="relative text-stone-700 leading-relaxed z-10 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                {testimonial.text}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className={`relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-12 shadow-xl border border-stone-300 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-2xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
            <div className="absolute top-4 right-4 text-2xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

            <h3 className="relative text-2xl sm:text-3xl font-black text-center text-stone-900 mb-8 uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
              TRUSTED BY LEADING ORGANIZATIONS
            </h3>
            
            {/* Client badges */}
            <div className="relative flex flex-wrap justify-center items-center gap-3 mb-12">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-stone-200 rounded-sm font-semibold text-stone-800 hover:bg-stone-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-stone-300 text-xs uppercase tracking-wider"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {client}
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="relative grid md:grid-cols-3 gap-8 text-center pt-8 border-t border-stone-300">
              <div className="group space-y-2 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-800 rounded-sm mb-2 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-stone-100" />
                </div>
                <div className="text-4xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  98%
                </div>
                <div className="text-xs text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Client Satisfaction</div>
              </div>

              <div className="group space-y-2 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-800 rounded-sm mb-2 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-stone-100" />
                </div>
                <div className="text-4xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  500+
                </div>
                <div className="text-xs text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Happy Clients</div>
              </div>

              <div className="group space-y-2 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-800 rounded-sm mb-2 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-stone-100" />
                </div>
                <div className="text-4xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}>
                  95%
                </div>
                <div className="text-xs text-stone-900 font-black uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Repeat Business</div>
              </div>
            </div>
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

export default Testimonials;