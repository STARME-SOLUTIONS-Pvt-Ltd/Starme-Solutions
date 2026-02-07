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
      gradient: 'from-blue-600 to-blue-800',
      iconBg: 'from-blue-500 to-blue-700',
      accentColor: 'bg-blue-500/10',
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'Our commitment to quality and innovation has earned us recognition as industry leaders.',
      gradient: 'from-amber-500 to-amber-700',
      iconBg: 'from-amber-500 to-orange-600',
      accentColor: 'bg-amber-500/10',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Building lasting partnerships through transparency, collaboration, and dedicated support.',
      gradient: 'from-purple-600 to-purple-800',
      iconBg: 'from-purple-500 to-purple-700',
      accentColor: 'bg-purple-500/10',
    },
    {
      icon: TrendingUp,
      title: 'Future Ready',
      description: 'Leveraging emerging technologies to keep your business ahead of the curve.',
      gradient: 'from-green-600 to-green-800',
      iconBg: 'from-green-500 to-green-700',
      accentColor: 'bg-green-500/10',
    },
  ];

  const achievements = [
    { icon: Zap, label: 'Innovation Awards', value: '25+', color: 'from-blue-600 to-blue-800' },
    { icon: Shield, label: 'Security Certifications', value: '15+', color: 'from-purple-600 to-purple-800' },
    { icon: Rocket, label: 'Successful Launches', value: '500+', color: 'from-amber-600 to-amber-800' },
    { icon: Sparkles, label: 'Client Retention', value: '95%', color: 'from-green-600 to-green-800' },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full filter blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full filter blur-[120px] animate-float-slow-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">About Us</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-amber-600 bg-clip-text text-transparent">Starme Solutions</span>
          </h2>
          
          <div className="relative w-32 h-1.5 bg-gradient-to-r from-blue-900 via-blue-600 to-amber-600 mx-auto mb-8 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            A premier IT solutions provider delivering transformative technology services to enterprises worldwide.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Empowering Businesses Through <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
              </h3>
              
              <div className="space-y-5">
                <p className="text-slate-600 leading-relaxed text-lg">
                  Founded with a vision to revolutionize the digital landscape, Starme Solutions has grown into a trusted partner
                  for organizations seeking excellence in technology implementation and digital transformation.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Our team of seasoned professionals brings together decades of combined experience, cutting-edge expertise,
                  and a passion for solving complex business challenges through innovative technology solutions.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  We believe in building solutions that not only meet today's needs but anticipate tomorrow's challenges,
                  ensuring our clients stay competitive in an ever-evolving digital world.
                </p>
              </div>
            </div>

            {/* Mini Achievement Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.value}
                        </div>
                        <div className="text-xs text-slate-600 font-medium">{achievement.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Decorative background card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-amber-500/10 rounded-[2.5rem] transform rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-purple-500/5 to-amber-500/5 rounded-[2.5rem] transform -rotate-2 scale-105"></div>
            
            {/* Main content card */}
            <div className="relative bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-slate-200/50">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Hover gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Animated corner accent */}
                      <div className={`absolute top-0 right-0 w-20 h-20 ${feature.accentColor} rounded-bl-full opacity-30 group-hover:scale-150 transition-transform duration-500`}></div>
                      
                      {/* Icon */}
                      <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h4 className="relative font-bold text-slate-900 mb-3 text-lg group-hover:text-blue-900 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="relative text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Bottom shine effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  );
                })}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white px-6 py-3 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-bold text-sm">Industry Leader</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white px-10 py-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Ready to Transform?</div>
                <div className="text-sm text-blue-100">Let's build something amazing together</div>
              </div>
            </div>
            <button className="px-8 py-3 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Started
            </button>
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
      `}</style>
    </section>
  );
};

export default About;