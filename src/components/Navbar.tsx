import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg border-b border-primary-600/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-jakarta font-bold text-white">
              <span className="text-primary-600">Admayra</span> Info Tech
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary-500 px-3 py-2 text-sm font-inter font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg font-poppins font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-lg border-t border-primary-600/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-500 block px-3 py-2 text-base font-inter font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg font-poppins font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;