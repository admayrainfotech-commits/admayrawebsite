import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 via-primary-900/10 to-dark-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-6">
            What Our <span className="text-primary-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main testimonial card */}
          <div className="relative bg-gradient-to-br from-dark-700/50 to-dark-800/80 backdrop-blur-lg rounded-3xl border border-primary-600/20 p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={120} className="text-primary-500" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current mx-1"
                    size={24}
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl text-gray-200 font-inter leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-3 border-primary-500/50 mr-4"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-jakarta font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary-400 font-inter">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid for larger screens */}
        <div className={`hidden lg:grid lg:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-dark-700/30 to-dark-800/50 backdrop-blur-sm rounded-2xl border border-primary-600/10 p-6 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-300 font-inter text-sm mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-primary-500/30 mr-3"
                />
                <div>
                  <h5 className="text-white font-jakarta font-semibold text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-primary-400 font-inter text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;