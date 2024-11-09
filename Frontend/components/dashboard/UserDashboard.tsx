import React from 'react';
import {
  Car,
  FileText,
  AlertCircle,
  Settings,
  User,
  Users,
  Bell,
  Plus,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Policy {
  id: string;
  type: string;
  status: string;
  premium: string;
}

interface Claim {
  id: string;
  date: string;
  status: string;
  amount: string;
}

export const UserDashboard: React.FC = () => {
  const policies: Policy[] = [
    { id: 'POL-001', type: 'Comprehensive', status: 'Active', premium: 'Rs 750/year' },
    { id: 'POL-002', type: 'Third Party', status: 'Pending Renewal', premium: 'Rs 400/year' },
  ];

  const claims: Claim[] = [
    { id: 'CLM-001', date: '2024-03-15', status: 'Processing', amount: 'Rs 2,500' },
    { id: 'CLM-002', date: '2024-02-01', status: 'Settled', amount: 'Rs 1,800' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Insurance Dashboard</h1>
        <div className="flex gap-4">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <User className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Button className="bg-blue-600">
          <Plus className="mr-2 h-4 w-4" /> New Policy Quote
        </Button>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" /> File a Claim
        </Button>
        <Button variant="outline">
          <AlertCircle className="mr-2 h-4 w-4" /> Report Emergency
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Open Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Premium</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs 1,150</div>
          </CardContent>
        </Card>
      </div>

      {/* Policies and Claims */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {policies.map((policy) => (
                <div key={policy.id} className="py-3 flex justify-between items-center">
                  <div>
                    <div className="font-medium">{policy.id}</div>
                    <div className="text-sm text-gray-600">{policy.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{policy.premium}</div>
                    <div className="text-sm text-gray-600">{policy.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {claims.map((claim) => (
                <div key={claim.id} className="py-3 flex justify-between items-center">
                  <div>
                    <div className="font-medium">{claim.id}</div>
                    <div className="text-sm text-gray-600">{claim.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{claim.amount}</div>
                    <div className="text-sm text-gray-600">{claim.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
