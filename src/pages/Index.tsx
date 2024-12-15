import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SubscribeButton from '@/components/SubscribeButton';

const Landing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [earlyAccess, setEarlyAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(days).padStart(2, '0')}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M ${String(secs).padStart(2, '0')}S`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black text-brand-white p-4">
      <div className="absolute top-4 right-4">
        <Button 
          variant="ghost" 
          className="text-brand-white hover:text-brand-red transition-colors duration-200"
          onClick={() => navigate('/admin')}
        >
          Admin
        </Button>
      </div>

      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-7xl font-bold tracking-tight">
          <span className="text-brand-white">STN</span>
          <span className="text-brand-red">STREET</span>
        </h1>
        
        <h2 className="text-4xl font-bold">
          Run the Streets, <span className="text-brand-red">Own Your Style.</span>
        </h2>
        
        <div className="text-2xl font-medium text-brand-white/80">
          2025 LTD AUSTRALIA DAY DROP
        </div>
        
        <div className="text-5xl font-mono tracking-wider text-brand-red">
          {formatTime(timeLeft)}
        </div>
        
        <p className="text-xl text-brand-white/60">
          Only the Bold Snag the Gold – Don't Let It Slip!
        </p>

        <div className="space-y-6">
          <SubscribeButton earlyAccess={earlyAccess} />
          
          <div className="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="earlyAccess"
              checked={earlyAccess}
              onChange={(e) => setEarlyAccess(e.target.checked)}
              className="w-4 h-4 accent-brand-red"
            />
            <label htmlFor="earlyAccess" className="text-sm text-brand-white/80">
              Opt in for early access and exclusive design leaks
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;