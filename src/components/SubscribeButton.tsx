import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscribeButton = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    document.body.classList.add('time-warp');
    setTimeout(() => {
      navigate('/notify');
      document.body.classList.remove('time-warp');
    }, 2000);
  };

  return (
    <button
      onClick={handleSubscribe}
      className="px-8 py-4 bg-brand-red text-brand-white font-bold rounded-lg 
                hover:bg-brand-white hover:text-brand-black transition-all duration-300
                transform hover:scale-105"
    >
      Subscribe to be notified when the drop is live
    </button>
  );
};

export default SubscribeButton;