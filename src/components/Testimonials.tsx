import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CTO, Global Finance Corp',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Starme Solutions transformed our legacy infrastructure into a modern, scalable cloud platform. Their expertise and professionalism exceeded all expectations.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, Healthcare Innovations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The mobile application they developed revolutionized our patient engagement. Outstanding quality, delivered on time and within budget.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'VP Technology, Retail Dynamics',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Their data analytics solution provided insights that drove a 40% increase in operational efficiency. True partners in our digital transformation.',
      rating: 5,
    },
    {
      name: 'Emily Thompson',
      role: 'Director IT, Manufacturing Pro',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Exceptional cybersecurity implementation. Their proactive approach and attention to detail gave us complete peace of mind.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'COO, Logistics Solutions',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The custom ERP system streamlined our entire operation. Starme Solutions delivers world-class solutions with unmatched support.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'CIO, Education Network',
      image: 'https://images.pexels.com/photos/3756665/pexels-photo-3756665.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Their AI-powered platform revolutionized our learning management system. Innovative, reliable, and always exceeding expectations.',
      rating: 5,
    },
  ];

  const clients = [
    'Global Finance Corp',
    'Healthcare Innovations',
    'Retail Dynamics',
    'Manufacturing Pro',
    'Logistics Solutions',
    'Education Network',
    'Tech Ventures',
    'Energy Solutions',
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide for delivering exceptional results and lasting partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-blue-900" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100 group-hover:border-amber-400 transition-colors duration-300"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed relative z-10">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-br from-blue-50 to-amber-50 rounded-lg font-semibold text-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
