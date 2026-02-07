import { Cloud, Code, Shield, Smartphone, Database, Cpu, Globe, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for seamless digital transformation.',
      features: ['AWS & Azure', 'Cloud Migration', 'DevOps Integration'],
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business requirements and workflows.',
      features: ['Web Applications', 'Enterprise Software', 'API Development'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions protecting your digital assets and infrastructure.',
      features: ['Security Audits', 'Threat Detection', 'Compliance'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android ecosystems.',
      features: ['iOS & Android', 'React Native', 'Flutter'],
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics and BI solutions.',
      features: ['Big Data', 'AI/ML', 'Business Intelligence'],
    },
    {
      icon: Cpu,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions leveraging artificial intelligence and machine learning.',
      features: ['Process Automation', 'Predictive Analytics', 'NLP'],
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies aligned with your business vision.',
      features: ['Strategy Planning', 'Change Management', 'Innovation'],
    },
    {
      icon: Layers,
      title: 'IT Consulting',
      description: 'Expert guidance and strategic advisory for technology decisions and implementations.',
      features: ['Architecture Design', 'Tech Advisory', 'Best Practices'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-900/5 to-amber-600/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-900 to-amber-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
