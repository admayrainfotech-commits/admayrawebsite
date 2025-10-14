import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 gradient-green-radial blur-3xl animate-pulse-slow"></div>
          <Zap className="w-20 h-20 text-lime-500 animate-float relative z-10 mx-auto" />
        </div>
        <h2 className="text-3xl font-bold text-gradient mb-4">Admayra Infotech</h2>
        <div className="flex gap-2 justify-center">
          <div className="w-3 h-3 bg-lime-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-lime-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-lime-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
