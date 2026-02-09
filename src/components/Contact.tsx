import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'contact@starmesolutions.com',
      link: 'mailto:contact@starmesolutions.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 99402 47213',
      link: 'tel:+919940247213',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'III 394, Vanmathi Nagar, Kandhan Kollai, Tirur Post, Thiruvallur District, Tamil Nadu, 601204',
      link: '#',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 bg-gradient-to-br from-stone-100 via-neutral-50 to-stone-200 overflow-hidden">
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
            <MessageSquare className="w-4 h-4 text-stone-300" />
            <span className="text-xs font-semibold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Contact Us</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tighter uppercase leading-tight" style={{ fontFamily: "'Roboto Condensed', 'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.03em' }}>
            GET IN TOUCH
          </h2>
          
          <div className="relative w-32 h-1 bg-stone-800 mx-auto mb-8"></div>
          
          <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ready to transform your business? Let's discuss.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className={`group relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-300/50 hover:border-stone-800 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Top corner number */}
                <div className="absolute top-3 right-3 text-xs font-bold text-stone-400 tracking-wider" style={{ fontFamily: "'Courier New', monospace" }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative w-12 h-12 bg-stone-800 rounded-sm flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-6 h-6 text-stone-100" />
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-black text-stone-900 mb-2 group-hover:text-stone-900 transition-colors duration-300 uppercase tracking-tight" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                  {info.title}
                </h3>
                <p className="relative text-stone-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{info.detail}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className={`relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-stone-50/90 backdrop-blur-sm rounded-sm p-8 md:p-12 shadow-xl border border-stone-300 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-2xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
            <div className="absolute top-4 right-4 text-2xl text-stone-800/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

            <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition-all duration-200 outline-none hover:border-stone-400 text-stone-900"
                    placeholder="John Doe"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition-all duration-200 outline-none hover:border-stone-400 text-stone-900"
                    placeholder="john@company.com"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition-all duration-200 outline-none hover:border-stone-400 text-stone-900"
                    placeholder="Your Company"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition-all duration-200 outline-none hover:border-stone-400 text-stone-900"
                    placeholder="+91 12345 67890"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition-all duration-200 outline-none hover:border-stone-400 text-stone-900"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <option value="">Select a service</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="development">Custom Development</option>
                  <option value="security">Web Solutions</option>
                  <option value="mobile">Mobile Solutions</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="ai">AI & Automation</option>
                  <option value="transformation">Digital Transformation</option>
                  <option value="consulting">IT Consulting</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition-all duration-200 outline-none resize-none hover:border-stone-400 text-stone-900"
                  placeholder="Tell us about your project requirements..."
                  style={{ fontFamily: "'Inter', sans-serif" }}
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-stone-200 border-2 border-stone-800 rounded-sm text-stone-900 text-center font-bold shadow-sm uppercase tracking-wider text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-stone-800 text-stone-100 rounded-sm font-bold shadow-lg hover:bg-stone-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-stone-900 uppercase tracking-wider text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-stone-100 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
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

export default Contact;