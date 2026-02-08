import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'News & Press', href: '#' },
    ],
    services: [
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Custom Development', href: '#services' },
      { name: 'Cybersecurity', href: '#services' },
      { name: 'IT Consulting', href: '#services' },
    ],
    resources: [
      { name: 'Case Studies', href: '#testimonials' },
      { name: 'Technologies', href: '#technologies' },
      { name: 'Why Choose Us', href: '#why-us' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-stone-900 text-stone-100 overflow-hidden">
      {/* Decorative code symbols */}
      <div className="absolute top-12 right-16 text-6xl text-stone-700/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'</>'}</div>
      <div className="absolute bottom-12 left-16 text-6xl text-stone-700/20 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'{ }'}</div>
      <div className="absolute top-1/3 left-1/4 text-4xl text-stone-700/15 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
      <div className="absolute bottom-1/3 right-1/3 text-4xl text-stone-700/15 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 z-10">
        
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="relative bg-stone-800/50 backdrop-blur-sm border-2 border-stone-700 rounded-sm p-8 md:p-10 shadow-xl overflow-hidden">
            {/* Corner decorative elements */}
            <div className="absolute top-3 left-3 text-xl text-stone-600/40 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'\\\\'}</div>
            <div className="absolute top-3 right-3 text-xl text-stone-600/40 font-light" style={{ fontFamily: "'Courier New', monospace" }}>{'//'}</div>
            <div className="absolute bottom-3 left-3 text-sm text-stone-600/30 font-bold tracking-wider" style={{ fontFamily: "'Courier New', monospace" }}>001</div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-700 border border-stone-600 rounded-sm mb-4">
                  <span className="text-xs font-bold text-stone-200 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Newsletter</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black mb-3 text-stone-100 uppercase tracking-tighter" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif", letterSpacing: '-0.02em' }}>
                  Stay Updated
                </h3>
                <p className="text-sm md:text-base text-stone-300 uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Get insights on technology trends.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="flex-1 px-4 md:px-5 py-3 md:py-3.5 bg-stone-900/50 backdrop-blur-sm border-2 border-stone-600 rounded-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-400/20 transition-all duration-200 text-sm md:text-base uppercase tracking-wide font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <button className="group px-6 md:px-7 py-3 md:py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base uppercase tracking-wider border-2 border-stone-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Subscribe
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12 md:mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl font-black text-stone-100 mb-2 uppercase tracking-tighter" style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif", letterSpacing: '-0.03em' }}>
                Starme Solutions
              </h3>
              <div className="h-1 w-24 bg-stone-100 mx-auto sm:mx-0"></div>
            </div>
            <p className="text-sm md:text-base text-stone-300 leading-relaxed mb-8 max-w-md mx-auto sm:mx-0 uppercase tracking-wide font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              World-class IT solutions for the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a href="mailto:contact@starmesolutions.com" className="group flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-all duration-300 justify-center sm:justify-start">
                <div className="p-2.5 bg-stone-800 border border-stone-700 rounded-sm group-hover:bg-stone-700 group-hover:border-stone-600 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm md:text-base break-all sm:break-normal" style={{ fontFamily: "'Inter', sans-serif" }}>contact@starmesolutions.com</span>
              </a>
              <a href="tel:+919940247213" className="group flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-all duration-300 justify-center sm:justify-start">
                <div className="p-2.5 bg-stone-800 border border-stone-700 rounded-sm group-hover:bg-stone-700 group-hover:border-stone-600 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>+91 99402 47213</span>
              </a>
              <div className="group flex items-center gap-3 text-stone-300 justify-center sm:justify-start">
                <div className="p-2.5 bg-stone-800 border border-stone-700 rounded-sm transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>III 394, Vanmathi Nagar, Kandhan Kollai, Tirur Post, Thiruvallur District, Tamil Nadu, 602025</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-black mb-6 text-stone-100 uppercase tracking-tight relative inline-block" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
              Company
              <span className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-0.5 bg-stone-100"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group text-stone-400 hover:text-stone-100 transition-all duration-300 flex items-center gap-2 text-sm md:text-base mx-auto sm:mx-0 justify-center sm:justify-start font-medium uppercase tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-stone-100 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-black mb-6 text-stone-100 uppercase tracking-tight relative inline-block" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
              Services
              <span className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-0.5 bg-stone-100"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group text-stone-400 hover:text-stone-100 transition-all duration-300 flex items-center gap-2 text-sm md:text-base mx-auto sm:mx-0 justify-center sm:justify-start font-medium uppercase tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-stone-100 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-black mb-6 text-stone-100 uppercase tracking-tight relative inline-block" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
              Resources
              <span className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-0.5 bg-stone-100"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group text-stone-400 hover:text-stone-100 transition-all duration-300 flex items-center gap-2 text-sm md:text-base mx-auto sm:mx-0 justify-center sm:justify-start font-medium uppercase tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-stone-100 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-0.5 mb-10 bg-stone-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
          
          {/* Copyright */}
          <p className="text-stone-400 text-xs md:text-sm font-bold text-center md:text-left uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {currentYear} Starme Solutions Pvt. Ltd.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 md:gap-4 order-first md:order-none">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-11 h-11 bg-stone-800 border-2 border-stone-700 rounded-sm flex items-center justify-center hover:bg-stone-700 hover:border-stone-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="w-5 h-5 text-stone-300 group-hover:text-stone-100 transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-xs md:text-sm">
            <a href="#" className="text-stone-400 hover:text-stone-100 transition-colors duration-300 font-bold uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
              Privacy
            </a>
            <span className="text-stone-700">|</span>
            <a href="#" className="text-stone-400 hover:text-stone-100 transition-colors duration-300 font-bold uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
              Terms
            </a>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-10 flex justify-center">
          <div className="h-1 w-32 bg-stone-100"></div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;