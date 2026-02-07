import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

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
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent mb-4">
              Starme Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Delivering world-class IT and technology solutions that empower businesses to thrive in the digital age.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@starmesolutions.com" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@starmesolutions.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Silicon Valley, CA 94025, USA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Starme Solutions Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
