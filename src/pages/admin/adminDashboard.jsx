import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockData = {
  analytics: {
    totalUsers: 1200,
    totalOrders: 300,
    revenue: 45000,
    salesTrends: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [5000, 7000, 8000, 6000, 10000, 12000],
    },
  },
};

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-xl font-bold">{mockData.analytics.totalUsers}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-xl font-bold">{mockData.analytics.totalOrders}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-xl font-bold">${mockData.analytics.revenue}</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Sales Trends</h2>
        <Line
          key={JSON.stringify(mockData.analytics.salesTrends)}
          data={{
            labels: mockData.analytics.salesTrends.labels,
            datasets: [
              {
                label: 'Sales',
                data: mockData.analytics.salesTrends.data,
                fill: false,
                borderColor: '#FF7F50',
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
