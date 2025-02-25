import React from 'react';
import { FaUser, FaBox, FaShoppingCart, FaStar, FaChartLine, FaPercentage } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const mockData = {
  customers: {
    active: 1200,
    new: 300,
    returning: 900,
  },
  products: {
    total: 150,
    bestSeller: 'Product X',
  },
  orders: {
    recentOrders: 45,
    totalRevenue: 5000,
  },
  reviews: {
    totalReviews: 230,
    highestRated: 'Product Y',
  },
  visits: {
    dailyViews: 2000,
    activeUsers: 150,
    bounceRate: '25%',
  },
  promotions: {
    activeCampaigns: 3,
    revenueGenerated: 1200,
  },
  analytics: {
    salesTrends: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      data: [500, 700, 600, 800],
    },
  },
};

export default function AdminDashboard() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-pink-600 p-4 text-white text-2xl font-semibold">
        Admin Dashboard
      </header>

      <div className="flex flex-1 p-6 space-x-6">
        {/* Sidebar */}
        <div className="w-1/4 bg-white rounded-lg shadow-lg p-4">
          <h3 className="font-bold text-lg mb-4">Navigation</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaUser />
              <span>Customers</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBox />
              <span>Products</span>
            </li>
            <li className="flex items-center gap-2">
              <FaShoppingCart />
              <span>Orders</span>
            </li>
            <li className="flex items-center gap-2">
              <FaStar />
              <span>Reviews</span>
            </li>
            <li className="flex items-center gap-2">
              <FaChartLine />
              <span>Analytics</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPercentage />
              <span>Promotions</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Customer Stats */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-4">Customers</h3>
            <div className="space-y-2">
              <p>Active: {mockData.customers.active}</p>
              <p>New: {mockData.customers.new}</p>
              <p>Returning: {mockData.customers.returning}</p>
            </div>
          </div>

          {/* Product Stats */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <p>Total Products: {mockData.products.total}</p>
            <p>Best Seller: {mockData.products.bestSeller}</p>
          </div>

          {/* Orders Stats */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-4">Orders</h3>
            <p>Recent Orders: {mockData.orders.recentOrders}</p>
            <p>Total Revenue: ${mockData.orders.totalRevenue}</p>
          </div>

          {/* Reviews Stats */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-4">Reviews</h3>
            <p>Total Reviews: {mockData.reviews.totalReviews}</p>
            <p>Highest Rated: {mockData.reviews.highestRated}</p>
          </div>

          {/* Visits Stats */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-4">Website Visits</h3>
            <p>Daily Views: {mockData.visits.dailyViews}</p>
            <p>Active Users: {mockData.visits.activeUsers}</p>
            <p>Bounce Rate: {mockData.visits.bounceRate}</p>
          </div>

          {/* Promotions Stats */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-4">Promotions</h3>
            <p>Active Campaigns: {mockData.promotions.activeCampaigns}</p>
            <p>Revenue Generated: ${mockData.promotions.revenueGenerated}</p>
          </div>

          {/* Analytics: Sales Trends Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4 col-span-2">
            <h3 className="font-bold text-lg mb-4">Sales Trends</h3>
            <Line
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
      </div>
    </div>
  );
}
