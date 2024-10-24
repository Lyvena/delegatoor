import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Activity, ArrowRight, Brain, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Landing = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations for delegation decisions based on historical data and voting patterns."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Secure Delegation",
      description: "Your voting power is safely delegated using blockchain technology and smart contracts."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Real-time Analytics",
      description: "Monitor delegation impact and voting power distribution with live updates and visualizations."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto py-16"
          >
            <div className="flex justify-center mb-6">
              <motion.div 
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Activity className="h-16 w-16 text-blue-500" />
                <Activity className="h-16 w-16 text-blue-300 absolute top-0 left-0 rotate-45 opacity-50" />
              </motion.div>
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
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;