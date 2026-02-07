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
      iconGradient: 'from-yellow-500 to-amber-600',
    },
    {
      icon: CheckCircle2,
      title: 'Proven Track Record',
      description: 'Over 500 successful projects delivered across diverse industries with measurable business impact.',
      iconGradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance ensuring your operations run smoothly.',
      iconGradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile methodologies and efficient processes ensure timely delivery without compromising quality.',
      iconGradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and compliance standards protecting your sensitive data.',
      iconGradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: Clock,
      title: 'Future-Proof Solutions',
      description: 'Scalable architectures designed to grow with your business and adapt to changing needs.',
      iconGradient: 'from-cyan-500 to-teal-600',
    },
  ];

  return (
    <section ref={sectionRef} id="why-us" className="relative py-32 bg-white overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full filter blur-[150px] animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full filter blur-[150px] animate-float-slow-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-6 shadow-sm">
            <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
            <span className="text-sm font-semibold text-gray-700">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Starme Solutions</span>
          </h2>
          
          <div className="relative w-32 h-1.5 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto mb-8 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with a technology leader committed to your success through excellence, innovation, and unwavering support.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Top corner accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-900/5 to-amber-600/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative">
                  {/* Icon with unique color gradient */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.iconGradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Animated bottom line */}
                  <div className="h-0.5 bg-gradient-to-r from-blue-900 to-amber-600 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-600/20 to-transparent rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full filter blur-3xl"></div>
            
            {/* Animated sparkles */}
            <div className="absolute top-8 left-8 text-amber-400/30 animate-pulse">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="absolute bottom-8 right-8 text-blue-300/30 animate-pulse delay-500">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="relative text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of satisfied clients who have elevated their operations with our premium technology solutions.
              </p>

              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-10 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-blue-100">Projects Delivered</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-sm text-blue-100">Global Clients</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-blue-100">Client Satisfaction</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-blue-100">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -30px);
          }
        }

        @keyframes float-slow-delayed {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slow-delayed {
          animation: float-slow-delayed 25s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;