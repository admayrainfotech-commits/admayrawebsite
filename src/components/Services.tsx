import React from 'react';
import { Code, TrendingUp, Shield, Palette, ArrowRight } from 'lucide-react';
import { services } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  Code,
  TrendingUp,
  Shield,
  Palette,
};

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-6">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            Comprehensive digital solutions designed to elevate your business and secure your digital future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden bg-gradient-to-br from-dark-700/50 to-dark-800/80 backdrop-blur-lg rounded-2xl border border-primary-600/20 hover:border-primary-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-600/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-600/25">
                      <IconComponent className="text-white" size={28} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-jakarta font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 font-inter mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400 font-inter text-sm">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="group/btn flex items-center text-primary-500 font-poppins font-semibold hover:text-primary-400 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-700/5 backdrop-blur-lg rounded-2xl border border-primary-600/30 p-8 md:p-12">
            <h3 className="text-3xl font-jakarta font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital goals and secure your business future.
            </p>
            <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 hover:scale-105 animate-glow">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;