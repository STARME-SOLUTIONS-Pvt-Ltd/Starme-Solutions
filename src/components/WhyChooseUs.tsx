import { CheckCircle2, Clock, Headphones, Lightbulb, Lock, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and methodologies to deliver solutions that give you a competitive edge.',
    },
    {
      icon: CheckCircle2,
      title: 'Proven Track Record',
      description: 'Over 500 successful projects delivered across diverse industries with measurable business impact.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance ensuring your operations run smoothly.',
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile methodologies and efficient processes ensure timely delivery without compromising quality.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and compliance standards protecting your sensitive data.',
    },
    {
      icon: Clock,
      title: 'Future-Proof Solutions',
      description: 'Scalable architectures designed to grow with your business and adapt to changing needs.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Starme Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with a technology leader committed to your success through excellence, innovation, and unwavering support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-900/5 to-amber-600/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>

                  <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-amber-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have elevated their operations with our premium technology solutions.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
