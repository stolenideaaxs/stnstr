import React, { useState, useEffect } from 'react';
import SubscribeButton from '../components/SubscribeButton';
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [flash, setFlash] = useState(false);
  const [whiteFlash, setWhiteFlash] = useState(false);
  const [earlyAccess, setEarlyAccess] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const australiaDay = new Date('2025-01-26T00:00:00+11:00');
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
    <div className={`min-h-screen flex items-center justify-center bg-black relative overflow-hidden
        ${flash ? 'animate-[flash_500ms]' : ''} 
        ${whiteFlash ? 'animate-[whiteFlash_1s]' : ''}`}>
      
      {/* Ambient glow effect */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-brand-red/40 via-transparent to-transparent animate-[radial-blur_10s_linear_infinite] z-0"
        style={{
          transform: 'rotate(0deg)',
        }} 
      />

      {/* Background pattern layer */}
      <div className="absolute inset-0 grid grid-cols-4 gap-4 animate-[scale-in_60s_ease-in-out_infinite] z-10">
        {[...Array(16)].map((_, i) => (
          <img
            key={i}
            src="/lovable-uploads/3bea4f6c-4da9-4d52-a7bb-d13492cd4fbf.png"
            alt=""
            className="w-full h-auto object-contain opacity-100"
          />
        ))}
      </div>

      <div className="text-center relative z-20 space-y-8">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-brand-white">STN</span>
          <span className="text-brand-red">STREET</span>
        </h1>
        
        <p className="text-3xl font-bold text-brand-white">
          Run the Streets, <span className="text-brand-red">Own Your Style.</span>
        </p>

        <div className="mt-8">
          <h2 className="text-xl text-brand-white mb-2">2025 LTD AUSTRALIA DAY DROP</h2>
          <div className="text-4xl font-mono text-brand-red">
            {formatTime(timeLeft)}
          </div>
        </div>

        <p className="text-xl text-brand-white/60">
          Only the Bold Snag the Gold – Don't Let It Slip!
        </p>

        <div className="mt-8">
          <SubscribeButton earlyAccess={earlyAccess} />
        </div>

        <div className="flex items-center space-x-2 justify-center mt-4">
          <Checkbox 
            id="early-access" 
            checked={earlyAccess}
            onCheckedChange={(checked) => setEarlyAccess(checked as boolean)}
            className="border-brand-red data-[state=checked]:bg-brand-red"
          />
          <label
            htmlFor="early-access"
            className="text-sm font-medium leading-none text-brand-white cursor-pointer"
          >
            Opt in for early access and exclusive design leaks
          </label>
        </div>
      </div>
    </div>
  );
};

export default Index;