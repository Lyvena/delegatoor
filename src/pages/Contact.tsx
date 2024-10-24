import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
              <CardDescription>Get in touch with the Delegatoor team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-lg">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href="mailto:info@lyvena.xyz" className="text-blue-500 hover:underline">
                  info@lyvena.xyz
                </a>
              </div>
              <p className="text-gray-600">
                We\'re here to help with any questions about delegation or the platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;