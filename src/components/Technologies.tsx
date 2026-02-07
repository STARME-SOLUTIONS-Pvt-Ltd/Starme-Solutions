import { Server, Boxes, Workflow, Binary } from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      icon: Server,
      title: 'Backend & Cloud',
      technologies: [
        'Node.js', 'Python', 'Java', '.NET', 'Go',
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
      ],
    },
    {
      icon: Boxes,
      title: 'Frontend & Mobile',
      technologies: [
        'React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript',
        'React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic',
      ],
    },
    {
      icon: Binary,
      title: 'Data & AI',
      technologies: [
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'Apache Spark', 'Hadoop',
        'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Tableau',
      ],
    },
    {
      icon: Workflow,
      title: 'DevOps & Security',
      technologies: [
        'Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus',
        'OAuth', 'JWT', 'SSL/TLS', 'OWASP', 'Penetration Testing',
      ],
    },
  ];

  return (
    <section id="technologies" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technologies & <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mastery across the most advanced and reliable technology stacks powering modern enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-br from-blue-50 to-amber-50 text-gray-700 rounded-lg text-sm font-medium hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-gray-600 font-medium">Technology Partnerships</div>
              <p className="text-sm text-gray-500">Certified experts in leading platforms</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-gray-600 font-medium">Technical Certifications</div>
              <p className="text-sm text-gray-500">Industry-recognized credentials</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 font-medium">Latest Tech Adoption</div>
              <p className="text-sm text-gray-500">Always on the cutting edge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
