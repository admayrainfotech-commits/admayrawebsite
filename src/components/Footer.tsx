import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-primary-600/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-jakarta font-bold text-white mb-4">
              <span className="text-primary-600">Admayra</span> Info Tech
            </h3>
            <p className="text-gray-300 font-inter mb-6 leading-relaxed">
              Transforming businesses through innovative technology, strategic marketing, and robust cybersecurity solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-jakarta font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-500 font-inter transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-jakarta font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Digital Marketing',
                'Cyber Security',
                'UI/UX Design',
                'Consultation',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-primary-500 font-inter transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-jakarta font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-primary-500 mt-1 mr-3" size={18} />
                <div>
                  <p className="text-gray-300 font-inter">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary-500 mt-1 mr-3" size={18} />
                <div>
                  <p className="text-gray-300 font-inter">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary-500 mt-1 mr-3" size={18} />
                <div>
                  <p className="text-gray-300 font-inter">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-poppins font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-dark-700 border border-primary-600/30 rounded-l-lg px-3 py-2 text-white font-inter text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-600/20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-inter text-sm mb-4 md:mb-0">
              © 2024 Admayra Info Tech. All rights reserved. | Advertise with Mayra
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-500 font-inter text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 font-inter text-sm transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;