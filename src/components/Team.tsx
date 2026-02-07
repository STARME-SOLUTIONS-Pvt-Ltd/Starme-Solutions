import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 20+ years in enterprise technology.',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Tech innovator specializing in AI and cloud architecture.',
    },
    {
      name: 'Amit Patel',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Engineering excellence advocate with proven delivery record.',
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning designer crafting exceptional user experiences.',
    },
    {
      name: 'Vikram Singh',
      role: 'Director of Security',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Cybersecurity expert protecting enterprise infrastructures.',
    },
    {
      name: 'Ananya Gupta',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3756665/pexels-photo-3756665.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Operations strategist ensuring seamless project delivery.',
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A team of visionaries, innovators, and experts dedicated to driving your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-lg">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-lg">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
