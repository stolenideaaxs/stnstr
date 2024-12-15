import React from 'react';

const Notify = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-brand-white">YOU'RE</span>
          <span className="text-brand-red"> IN</span>
        </h1>
        
        <p className="text-2xl text-brand-white">
          We'll notify you when the drop is live. <span className="text-brand-red">Stay tuned.</span>
        </p>
      </div>
    </div>
  );
};

export default Notify;