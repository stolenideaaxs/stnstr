import React from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="h-16 bg-gray-900 text-white fixed top-0 right-0 left-64 px-6 flex items-center justify-between z-10">
      <div>
        <h2 className="text-lg">Welcome, Admin</h2>
      </div>
      <Button variant="ghost" className="text-white hover:text-gray-300">
        <LogOut className="h-5 w-5 mr-2" />
        Logout
      </Button>
    </header>
  );
};

export default Header;