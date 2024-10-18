import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DelegationList = () => {
  // TODO: Fetch actual delegation data
  const delegations = [
    { id: 1, delegate: '0x1234...5678', votingPower: 100, date: '2023-05-01' },
    { id: 2, delegate: '0xabcd...efgh', votingPower: 50, date: '2023-05-15' },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Delegate</TableHead>
          <TableHead>Voting Power</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {delegations.map((delegation) => (
          <TableRow key={delegation.id}>
            <TableCell>{delegation.delegate}</TableCell>
            <TableCell>{delegation.votingPower}</TableCell>
            <TableCell>{delegation.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DelegationList;