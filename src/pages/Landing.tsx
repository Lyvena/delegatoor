import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Activity, ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Activity className="h-16 w-16 text-blue-500" />
                <Activity className="h-16 w-16 text-blue-300 absolute top-0 left-0 rotate-45 opacity-50" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Welcome to Delegatoor
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empower your voice in AI-PGF governance through smart delegation
            </p>
            <Link to="/auth">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;