import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-100/95 backdrop-blur-md shadow-lg border-b border-stone-300'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
                    {/* Decorative bracket */}
          <span
            className="text-stone-800/40 text-2xl font-light"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            {'{'}
          </span>
          {/* Logo Image */}
          <img
            src="../src/assets/logo/logo.png"
            alt="Starme Solutions Logo"
            className="h-14 w-auto object-contain"
          />

          <h1
            className="text-2xl font-black text-stone-900 tracking-tight uppercase"
            style={{ fontFamily: "'Roboto Condensed', 'Impact', sans-serif" }}
          >
            SOLUTIONS
          </h1>

          <span
            className="text-stone-800/40 text-2xl font-light"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            {'}'}
          </span>

        </div>
      </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-stone-700 hover:text-stone-900 font-semibold transition-colors duration-200 relative group uppercase tracking-wider text-xs"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-800 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block px-6 py-2.5 bg-stone-800 text-stone-100 rounded-sm font-bold hover:bg-stone-900 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md border border-stone-900 uppercase tracking-wider text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-stone-800 hover:text-stone-900 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-stone-100/98 backdrop-blur-lg border-t border-stone-300">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-200 rounded-sm transition-all duration-200 font-semibold uppercase tracking-wider text-xs border border-transparent hover:border-stone-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="text-stone-400 mr-2" style={{ fontFamily: "'Courier New', monospace" }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full px-6 py-4 bg-stone-800 text-stone-100 rounded-sm font-bold hover:bg-stone-900 transition-all duration-300 shadow-md border-2 border-stone-900 uppercase tracking-wider text-xs mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </nav>
  );
};

export default Navigation;