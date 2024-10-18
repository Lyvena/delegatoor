import React from 'react';
import { Button } from "@/components/ui/button";
import { Activity, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold">Delegatoor</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost">
                <User className="h-5 w-5 mr-2" />
                Profile
              </Button>
            </li>
            <li>
              <Button variant="ghost">
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;