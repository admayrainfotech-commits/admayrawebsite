import React from 'react';
import { X, Calendar, Bell, Mail } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Calendar className="h-8 w-8" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            We're putting the finishing touches on this feature. 
            Zen Wash will be launching in <strong>March 2025</strong> with all the amazing features you see here.
          </p>

          {/* Features List */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Bell className="h-4 w-4 text-cyan-500 mr-2" />
              What to expect:
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Full service launch in 5 major cities</li>
              <li>• Complete mobile app with live tracking</li>
              <li>• 24/7 customer support</li>
              <li>• Premium eco-friendly cleaning</li>
            </ul>
          </div>

          {/* Email Signup */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <Mail className="h-4 w-4 text-blue-600" />
              <input
                type="email"
                placeholder="Get launch updates"
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
                disabled
              />
            </div>
            <p className="text-xs text-gray-500">Email signup will be available soon</p>
          </div>

          {/* CTA Button */}
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-900 to-cyan-400 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Got it, thanks!
          </button>

          {/* Footer Note */}
          <p className="text-xs text-gray-400 mt-4">
            Follow us on social media for the latest updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;