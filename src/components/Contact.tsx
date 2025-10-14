import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Users, Award } from 'lucide-react';
import { contactInfo } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Admayra Info Tech! I'm interested in your services. Can we discuss my project?`
  );

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-6">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            Ready to start your next project? Contact us today and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-dark-700/50 to-dark-800/80 backdrop-blur-lg rounded-2xl border border-primary-600/20 p-8">
              <h3 className="text-2xl font-jakarta font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-xl mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-poppins font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300 font-inter">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-xl mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-poppins font-semibold mb-1">Email</h4>
                    <p className="text-gray-300 font-inter">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-xl mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-poppins font-semibold mb-1">Address</h4>
                    <p className="text-gray-300 font-inter">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-poppins font-semibold flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 hover:scale-105"
              >
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </a>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-jakarta font-bold text-primary-500">50+</div>
                  <div className="text-gray-400 font-inter text-xs">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-jakarta font-bold text-primary-500">4+</div>
                  <div className="text-gray-400 font-inter text-xs">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-jakarta font-bold text-primary-500">30+</div>
                  <div className="text-gray-400 font-inter text-xs">Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-dark-700/50 to-dark-800/80 backdrop-blur-lg rounded-2xl border border-primary-600/20 p-8">
              <h3 className="text-2xl font-jakarta font-bold text-white mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-poppins font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-600/50 border border-primary-600/30 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-poppins font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-600/50 border border-primary-600/30 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-poppins font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-dark-600/50 border border-primary-600/30 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-white font-poppins font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-dark-600/50 border border-primary-600/30 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="cyber-security">Cyber Security</option>
                      <option value="ui-design">UI/UX Design</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-poppins font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-dark-600/50 border border-primary-600/30 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 hover:scale-105 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>

              {/* Response time info */}
              <div className="mt-6 flex items-center justify-center text-gray-400 font-inter text-sm">
                <Clock className="mr-2" size={16} />
                We typically respond within 24 hours
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-700/5 backdrop-blur-lg rounded-2xl border border-primary-600/30 p-8">
            <h3 className="text-2xl font-jakarta font-bold text-white text-center mb-8">
              Why Choose Admayra Info Tech?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-jakarta font-bold text-white mb-2">Expert Team</h4>
                <p className="text-gray-300 font-inter">4+ years of experience with diverse skill sets</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-jakarta font-bold text-white mb-2">Quality Assurance</h4>
                <p className="text-gray-300 font-inter">Rigorous testing and quality control processes</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-jakarta font-bold text-white mb-2">24/7 Support</h4>
                <p className="text-gray-300 font-inter">Round-the-clock support and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;