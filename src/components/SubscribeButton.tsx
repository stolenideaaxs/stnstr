import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import DesignSnippets from './DesignSnippets';
import { toast } from 'sonner';

const SubscribeButton = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    document.body.classList.add('time-warp');
    setTimeout(() => {
      navigate('/notify');
      document.body.classList.remove('time-warp');
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md">
      <div className="flex w-full gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/10 border-brand-red/20 text-brand-white placeholder:text-brand-white/50"
        />
        <button
          onClick={handleSubscribe}
          className="px-6 py-2 bg-brand-red text-brand-white font-bold rounded-lg 
                    hover:bg-brand-white hover:text-brand-black transition-all duration-300
                    transform hover:scale-105 flex items-center gap-2"
        >
          <Bell className="h-5 w-5" />
          <span>Notify Me</span>
        </button>
      </div>
      
      <DesignSnippets />
    </div>
  );
};

export default SubscribeButton;