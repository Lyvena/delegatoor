import React from 'react';
import { Button } from "@/components/ui/button";
import { Activity, Settings, User, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <div className="relative">
            <Activity className="h-8 w-8 text-blue-500" />
            <Activity className="h-8 w-8 text-blue-300 absolute top-0 left-0 rotate-45 opacity-50" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Delegatoor
          </span>
        </Link>
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
            <li>
              <Link to="/auth">
                <Button variant="default">
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign In
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;