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
    <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
      <h1 className="text-xl font-bold text-center text-pink-600 mb-6">
        Admin Dashboard
      </h1>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-50 p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-purple-700">Total Users</h2>
          <p className="text-xl font-bold text-purple-900">{mockData.analytics.totalUsers}</p>
        </div>
        <div className="bg-purple-50 p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-purple-700">Total Orders</h2>
          <p className="text-xl font-bold text-purple-900">{mockData.analytics.totalOrders}</p>
        </div>
        <div className="bg-purple-50 p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-purple-700">Revenue</h2>
          <p className="text-xl font-bold text-purple-900">${mockData.analytics.revenue}</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-purple-50 p-6 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-purple-700 mb-4">Sales Trends</h2>
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