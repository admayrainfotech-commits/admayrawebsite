import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedNetwork from './AnimatedNetwork';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <AnimatedNetwork />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-jakarta font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Advertise
              </span>{' '}
              with{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Mayra
              </span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-inter max-w-3xl mx-auto leading-relaxed">
              Transform your digital presence with cutting-edge web development, strategic marketing, and bulletproof cybersecurity solutions.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 hover:scale-105 animate-glow">
                Get Started Today
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="group flex items-center text-white px-8 py-4 rounded-xl font-poppins font-medium text-lg border-2 border-primary-600/50 hover:border-primary-500 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Demo
              </button>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '4+', label: 'Years Experience' },
                { number: '30+', label: 'Happy Clients' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-jakarta font-bold text-primary-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-inter text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;