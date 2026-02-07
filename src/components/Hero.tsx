import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-amber-50/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.05),transparent_50%)]"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full mb-6 shadow-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-medium text-gray-700">Premium IT Solutions</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="block text-gray-900">Transform Your Business</span>
          <span className="block bg-gradient-to-r from-blue-900 via-blue-700 to-amber-600 bg-clip-text text-transparent">
            With Elite Technology
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Starme Solutions delivers world-class IT and technology solutions tailored for enterprise excellence.
          We empower businesses with innovative digital transformation strategies and cutting-edge solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
          <button
            onClick={() => scrollToSection('#contact')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('#services')}
            className="px-8 py-4 bg-white text-blue-900 border-2 border-blue-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-lg"
          >
            Explore Services
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-600">
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '150+', label: 'Global Clients' },
            { value: '15+', label: 'Years Experience' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
