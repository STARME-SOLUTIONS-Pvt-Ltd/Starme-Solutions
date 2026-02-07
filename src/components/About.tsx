import { Target, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'We align technology with your business objectives to create measurable impact and sustainable growth.',
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'Our commitment to quality and innovation has earned us recognition as industry leaders.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Building lasting partnerships through transparency, collaboration, and dedicated support.',
    },
    {
      icon: TrendingUp,
      title: 'Future Ready',
      description: 'Leveraging emerging technologies to keep your business ahead of the curve.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Starme Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A premier IT solutions provider delivering transformative technology services to enterprises worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Empowering Businesses Through Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to revolutionize the digital landscape, Starme Solutions has grown into a trusted partner
              for organizations seeking excellence in technology implementation and digital transformation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of seasoned professionals brings together decades of combined experience, cutting-edge expertise,
              and a passion for solving complex business challenges through innovative technology solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in building solutions that not only meet today's needs but anticipate tomorrow's challenges,
              ensuring our clients stay competitive in an ever-evolving digital world.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-amber-600/10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
