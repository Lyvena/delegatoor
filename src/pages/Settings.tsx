import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Settings as SettingsIcon, Key } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = React.useState('');

  const handleSaveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    toast({
      title: "API Key Saved",
      description: "Your OpenAI API key has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <SettingsIcon className="h-6 w-6 text-blue-500" />
                <CardTitle>AI Settings</CardTitle>
              </div>
              <CardDescription>Configure your AI preferences and API keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="apiKey">OpenAI API Key</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="apiKey"
                    type="password"
                    placeholder="sk-..."
                    className="pl-10"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Enter your OpenAI API key to enable AI features. Get your API key from the
                  <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
                    OpenAI dashboard
                  </a>.
                </p>
                <Button onClick={handleSaveApiKey} className="mt-4">
                  Save API Key
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;