import React from 'react';
import {
  Bell,
  Settings,
  Search,
  BarChart,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RecentPolicy {
  id: string;
  customer: string;
  type: string;
  status: string;
}

interface RecentClaim {
  id: string;
  customer: string;
  amount: string;
  status: string;
}

export const AdminDashboard: React.FC = () => {
  const recentPolicies: RecentPolicy[] = [
    { id: 'POL-003', customer: 'John Doe', type: 'Comprehensive', status: 'Pending Review' },
    { id: 'POL-004', customer: 'Jane Smith', type: 'Third Party', status: 'Active' },
  ];

  const recentClaims: RecentClaim[] = [
    { id: 'CLM-003', customer: 'Alice Johnson', amount: '$3,200', status: 'Needs Assessment' },
    { id: 'CLM-004', customer: 'Bob Wilson', amount: '$1,500', status: 'Under Review' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <Settings className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <input
            type="text"
            placeholder="Search policies, claims, or customers..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm text-green-600">+12% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            <div className="text-sm text-yellow-600">8 need review</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$125,400</div>
            <div className="text-sm text-green-600">+5% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <div className="text-sm text-green-600">+2% from last month</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentPolicies.map((policy) => (
                <div key={policy.id} className="py-3 flex justify-between items-center">
                  <div>
                    <div className="font-medium">{policy.customer}</div>
                    <div className="text-sm text-gray-600">{policy.id} - {policy.type}</div>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Review</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Claims Requiring Action</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentClaims.map((claim) => (
                <div key={claim.id} className="py-3 flex justify-between items-center">
                  <div>
                    <div className="font-medium">{claim.customer}</div>
                    <div className="text-sm text-gray-600">{claim.id} - {claim.amount}</div>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Assess</Button>
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