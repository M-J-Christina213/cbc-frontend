import React, { useEffect } from 'react';

export default function AdminDashboard() {
  // Example Data
  const salesData = [200, 450, 300, 500, 600, 700, 800, 900, 1000]; // Sales trends
  const customerStats = {
    active: 1200,
    new: 200,
    returning: 1000
  };
  const orderStats = {
    pending: 50,
    shipped: 100,
    delivered: 150,
    canceled: 10
  };
  const reviewStats = {
    total: 500,
    highestRated: "Product A"
  };

  // Canvas drawing for the Sales Trends Chart
  useEffect(() => {
    const canvas = document.getElementById("salesLineChart");
    const ctx = canvas.getContext("2d");

    const drawChart = () => {
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#3b82f6';
      ctx.fillStyle = '#3b82f6';

      // Draw the line chart for Sales Data
      ctx.beginPath();
      ctx.moveTo(50, 500 - salesData[0]);
      salesData.forEach((data, index) => {
        ctx.lineTo(50 + (index * 100), 500 - data);
      });
      ctx.stroke();

      // Add circles at each data point
      salesData.forEach((data, index) => {
        ctx.beginPath();
        ctx.arc(50 + (index * 100), 500 - data, 5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    drawChart();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-8">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Customer Stats */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Customers</h3>
          <p className="text-gray-600">Active: {customerStats.active}</p>
          <p className="text-gray-600">New: {customerStats.new}</p>
          <p className="text-gray-600">Returning: {customerStats.returning}</p>
        </div>

        {/* Order Stats */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Orders</h3>
          <p className="text-gray-600">Pending: {orderStats.pending}</p>
          <p className="text-gray-600">Shipped: {orderStats.shipped}</p>
          <p className="text-gray-600">Delivered: {orderStats.delivered}</p>
          <p className="text-gray-600">Canceled: {orderStats.canceled}</p>
        </div>

        {/* Review Stats */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Reviews</h3>
          <p className="text-gray-600">Total: {reviewStats.total}</p>
          <p className="text-gray-600">Highest Rated: {reviewStats.highestRated}</p>
        </div>
      </div>

      <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Sales Trends</h3>
        <canvas id="salesLineChart" width="800" height="400"></canvas>
      </div>

      <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Products</h3>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">Add New Product</button>
      </div>

      <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Website Visits</h3>
        <p className="text-gray-600">Daily: 1200 views</p>
        <p className="text-gray-600">Weekly: 8500 views</p>
        <p className="text-gray-600">Monthly: 25000 views</p>
      </div>
    </div>
  );
}
