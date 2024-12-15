import React from 'react';
import { useLocation } from 'react-router-dom';
import DesignSnippets from '../components/DesignSnippets';

const Notify = () => {
  const location = useLocation();
  const { email, earlyAccess } = location.state || {};

  return (
    <div className="min-h-screen bg-black text-brand-white p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-brand-white">Thanks for joining </span>
          <span className="text-brand-red">STN</span>
          <span className="text-brand-white">STREET</span>
        </h1>
        
        <p className="text-xl text-center mb-8">
          We'll keep you updated about the drop!
        </p>

        {earlyAccess && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-brand-red">
              Early Access Sneak Peek
            </h2>
            <DesignSnippets />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notify;