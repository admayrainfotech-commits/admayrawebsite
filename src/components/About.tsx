import React from 'react';
import { teamMembers } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-6">
            About <span className="text-primary-500">Admayra Info Tech</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            Founded with a vision to revolutionize digital experiences, we combine expertise in technology, 
            marketing, and security to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-jakarta font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-6">
              Admayra Info Tech was born from the passion to bridge the gap between cutting-edge technology 
              and business success. Our founder, with extensive experience in cybersecurity and design, 
              assembled a dream team of experts who share the same vision.
            </p>
            <p className="text-gray-300 font-inter leading-relaxed mb-8">
              We believe in the power of "Advertise with Mayra" - not just as a tagline, but as a promise 
              to deliver marketing solutions that truly work, backed by robust technology and uncompromising security.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-600/10 to-primary-700/5 p-6 rounded-xl border border-primary-600/20">
                <h4 className="text-2xl font-jakarta font-bold text-primary-500 mb-2">Innovation</h4>
                <p className="text-gray-400 font-inter text-sm">Cutting-edge solutions for modern challenges</p>
              </div>
              <div className="bg-gradient-to-br from-primary-600/10 to-primary-700/5 p-6 rounded-xl border border-primary-600/20">
                <h4 className="text-2xl font-jakarta font-bold text-primary-500 mb-2">Excellence</h4>
                <p className="text-gray-400 font-inter text-sm">Delivering results that exceed expectations</p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-dark-900 p-8 rounded-2xl border border-primary-600/20">
                <h4 className="text-2xl font-jakarta font-bold text-white mb-6">Why Choose Us?</h4>
                <ul className="space-y-4">
                  {[
                    '4+ years of industry experience',
                    'Expert team in multiple domains',
                    'Proven track record of success',
                    'Client-first approach',
                    '24/7 support and maintenance',
                    'Cutting-edge technology stack'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300 font-inter">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-jakarta font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-dark-700 to-dark-800 p-6 rounded-2xl border border-primary-600/20 hover:border-primary-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary-600/10"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-primary-500/50 group-hover:border-primary-400 transition-colors">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-jakarta font-bold text-white text-center mb-2">{member.name}</h4>
                <p className="text-primary-400 font-inter text-center mb-2">{member.role}</p>
                {member.experience && (
                  <p className="text-gray-400 font-inter text-sm text-center">{member.experience}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;