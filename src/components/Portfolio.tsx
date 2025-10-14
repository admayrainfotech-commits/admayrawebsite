import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioItems } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-dark-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-6">
            Our <span className="text-primary-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            Showcase of our finest work and successful projects that demonstrate our expertise across various domains.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-xl font-poppins font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-dark-700/50 text-gray-300 hover:bg-dark-600/50 hover:text-white border border-primary-600/20 hover:border-primary-500/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-primary-600/20 hover:border-primary-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-600/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors shadow-lg">
                    <ExternalLink size={20} />
                  </button>
                  <button className="bg-dark-800/90 hover:bg-dark-700 text-white p-3 rounded-full transition-colors shadow-lg">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-primary-500 font-poppins font-medium text-sm bg-primary-600/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-jakarta font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 font-inter text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-inter text-gray-400 bg-dark-600/50 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-poppins font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 hover:scale-105">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;