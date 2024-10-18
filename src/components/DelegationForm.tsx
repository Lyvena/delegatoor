import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const DelegationForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement delegation logic
    toast({
      title: "Delegation Submitted",
      description: "Your voting power has been delegated successfully.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="delegate-address">Delegate Address</Label>
        <Input id="delegate-address" placeholder="Enter delegate's Ethereum address" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="voting-power">Voting Power</Label>
        <Input id="voting-power" type="number" placeholder="Enter amount of voting power to delegate" />
      </div>
      <Button type="submit" className="w-full">Delegate</Button>
    </form>
  );
};

export default DelegationForm;