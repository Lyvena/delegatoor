import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Settings, User, ChartLine } from 'lucide-react';
import Header from '@/components/Header';
import DelegationForm from '@/components/DelegationForm';
import DelegationList from '@/components/DelegationList';
import Analytics from '@/components/Analytics';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Delegatoor</h1>
        <Tabs defaultValue="delegate" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="delegate">Delegate</TabsTrigger>
            <TabsTrigger value="mydelegations">My Delegations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="delegate">
            <Card>
              <CardHeader>
                <CardTitle>Delegate Your Voting Power</CardTitle>
                <CardDescription>Choose a delegate to represent your interests in AI-PGF governance.</CardDescription>
              </CardHeader>
              <CardContent>
                <DelegationForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mydelegations">
            <Card>
              <CardHeader>
                <CardTitle>My Delegations</CardTitle>
                <CardDescription>View and manage your current delegations.</CardDescription>
              </CardHeader>
              <CardContent>
                <DelegationList />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Delegation Analytics</CardTitle>
                <CardDescription>Explore delegation trends and statistics.</CardDescription>
              </CardHeader>
              <CardContent>
                <Analytics />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;