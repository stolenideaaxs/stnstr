import React, { useState, useEffect } from 'react';
import SubscribeButton from '../components/SubscribeButton';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [flash, setFlash] = useState(false);
  const [whiteFlash, setWhiteFlash] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const australiaDay = new Date('2025-01-26T00:00:00+11:00'); // Australia Day 2025
      const now = new Date();
      const difference = australiaDay.getTime() - now.getTime();
      return Math.max(0, Math.floor(difference / 1000));
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}D ${hours}H ${minutes}M ${secs}S`;
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-black 
        ${flash ? 'animate-[flash_500ms]' : ''} 
        ${whiteFlash ? 'animate-[whiteFlash_1s]' : ''}`}>
      {/* Radial blur glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-red/20 via-transparent to-transparent animate-[radial-blur_10s_linear_infinite] mix-blend-overlay" 
           style={{
             transform: 'rotate(0deg)',
             animation: 'radial-blur 10s linear infinite',
           }} />

      <div className="text-center relative z-10 space-y-8 animate-[scale-in_60s_ease-in-out_infinite]">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-brand-white">STN</span>
          <span className="text-brand-red">STREET</span>
        </h1>
        
        <p className="text-3xl font-bold text-brand-white">
          Run the Streets, <span className="text-brand-red">Own Your Style.</span>
        </p>

        <div className="mt-8">
          <h2 className="text-xl text-brand-white mb-2">AUSTRALIA DAY DROP</h2>
          <div className="text-4xl font-mono text-brand-red">
            {formatTime(timeLeft)}
          </div>
        </div>

        <p className="text-xl text-brand-white/60">
          Only the Bold Snag the Gold – Don't Let It Slip!
        </p>

        <div className="mt-8">
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};

export default Index;