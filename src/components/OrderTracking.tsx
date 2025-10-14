import React from 'react';
import { Package, MapPin, CheckCircle, Clock, Truck } from 'lucide-react';

interface OrderTrackingProps {
  onComingSoonClick: () => void;
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ onComingSoonClick }) => {
  const trackingSteps = [
    {
      icon: <Package className="h-6 w-6" />,
      title: 'Pickup Scheduled',
      description: 'Your laundry pickup has been confirmed',
      status: 'completed',
      time: '2:00 PM'
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'In Transit',
      description: 'Your items are being transported to our facility',
      status: 'current',
      time: '3:30 PM'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Processing',
      description: 'Your clothes are being professionally cleaned',
      status: 'pending',
      time: 'Est. 6:00 PM'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Ready for Delivery',
      description: 'Your order is cleaned and ready for delivery',
      status: 'pending',
      time: 'Tomorrow 10:00 AM'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Track Your Order <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Live</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed every step of the way with real-time updates and GPS tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Order Tracking Demo */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Order #ZW-2025-001</h3>
                <p className="text-cyan-400 font-medium">Demo Order Tracking</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-300">Estimated Delivery</div>
                <div className="text-lg font-semibold text-cyan-400">Tomorrow 10:00 AM</div>
              </div>
            </div>

            {/* Tracking Steps */}
            <div className="space-y-6">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                      step.status === 'completed'
                        ? 'bg-green-500 border-green-500 text-white'
                        : step.status === 'current'
                        ? 'bg-cyan-400 border-cyan-400 text-white animate-pulse'
                        : 'bg-transparent border-gray-400 text-gray-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-semibold ${
                        step.status === 'completed' ? 'text-green-400' :
                        step.status === 'current' ? 'text-cyan-400' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h4>
                      <span className="text-sm text-gray-300">{step.time}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">Live Location</span>
              </div>
              <div className="bg-gray-700/50 rounded-lg h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                  <p className="text-sm text-gray-300">GPS Tracking Available at Launch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Real-Time Updates</h3>
              <div className="space-y-4">
                {[
                  'SMS and email notifications',
                  'Live GPS tracking',
                  'Photo confirmations',
                  'Delivery time windows',
                  'Special handling updates'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Try Order Tracking</h4>
              <p className="text-gray-300 mb-6">
                Experience our advanced tracking system when we launch. Never wonder about your laundry again.
              </p>
              <button
                onClick={onComingSoonClick}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;