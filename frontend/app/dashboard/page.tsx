'use client';

import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api';

interface HealthStatus {
  status: string;
  timestamp: string;
  service: string;
  version: string;
  database: string;
  uptime: number;
}

export default function Dashboard() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const data = await apiClient.get('/health');
        setHealth(data);
      } catch (error) {
        console.error('Failed to fetch health status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHealth();
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              System Status
            </h2>
            {loading ? (
              <p className="text-gray-600">Loading...</p>
            ) : health ? (
              <div>
                <p className="text-2xl font-bold text-success">
                  {health.status.toUpperCase()}
                </p>
                <p className="text-sm text-gray-600">
                  Database: {health.database}
                </p>
              </div>
            ) : (
              <p className="text-error">Failed to load</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Test Reports
            </h2>
            <p className="text-2xl font-bold text-primary">0</p>
            <p className="text-sm text-gray-600">Total reports</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Active Patches
            </h2>
            <p className="text-2xl font-bold text-secondary">0</p>
            <p className="text-sm text-gray-600">In progress</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <p className="text-gray-600">No recent activity to display.</p>
        </div>
      </div>
    </Layout>
  );
}