import React from 'react';
import { Smartphone, Clock, Shield, Leaf, MapPin, Star } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Smart App Control',
      description: 'Schedule pickups, track orders, and manage preferences with our intuitive mobile app.',
      status: 'Coming Soon'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Availability',
      description: 'Pickup and delivery windows that work around your schedule, including weekends.',
      status: 'Coming Soon'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Premium Care',
      description: 'Professional-grade cleaning with insurance coverage for your valuable garments.',
      status: 'Coming Soon'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Eco-Friendly',
      description: 'Sustainable cleaning processes with biodegradable detergents and minimal packaging.',
      status: 'Coming Soon'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Real-Time Tracking',
      description: 'Know exactly where your clothes are with live GPS tracking and status updates.',
      status: 'Coming Soon'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guaranteed or we clean it again for free, no questions asked.',
      status: 'Coming Soon'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent">Zen Wash</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of laundry with our innovative features designed to make your life easier.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-900 to-cyan-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {feature.status}
              </div>
              
              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white p-3 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
            <span className="text-blue-900 font-medium">More features launching soon</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;