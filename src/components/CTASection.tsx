import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTASection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-jakarta font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Join the digital revolution with our cutting-edge solutions. Let's build something extraordinary together.
          </p>

          {/* Feature highlights */}
          <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-jakarta font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/80 font-inter text-center">Quick turnaround times without compromising quality</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-jakarta font-bold text-white mb-2">Secure & Reliable</h3>
              <p className="text-white/80 font-inter text-center">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-jakarta font-bold text-white mb-2">Growth Focused</h3>
              <p className="text-white/80 font-inter text-center">Strategies designed to scale your business</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="group bg-white text-primary-700 px-8 py-4 rounded-xl font-poppins font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center">
              Start Your Project Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Schedule Free Consultation
            </button>
          </div>

          {/* Trust indicators */}
          <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-white/70 font-inter mb-4">Trusted by 30+ businesses across India</p>
            <div className="flex justify-center items-center space-x-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-jakarta font-bold">50+</div>
                <div className="text-sm font-inter">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-jakarta font-bold">100%</div>
                <div className="text-sm font-inter">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-jakarta font-bold">24/7</div>
                <div className="text-sm font-inter">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;