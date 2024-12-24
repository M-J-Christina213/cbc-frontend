import { Link } from 'react-router-dom';

export default function AdminHomePage() {
  return (
    <div className="flex items-start min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/admin/create-admin" className="block p-3 text-purple-600 hover:bg-purple-100 rounded-lg">Create Admin</Link>
          </li>
          <li>
            <Link to="/admin/post-product" className="block p-3 text-purple-600 hover:bg-purple-100 rounded-lg">Post Product</Link>
          </li>
          <li>
            <Link to="/admin/reviews" className="block p-3 text-purple-600 hover:bg-purple-100 rounded-lg">Hide Reviews</Link>
          </li>
          <li>
            <Link to="/admin/block-users" className="block p-3 text-purple-600 hover:bg-purple-100 rounded-lg">Block Users</Link>
          </li>
          <li>
            <Link to="/admin/orders" className="block p-3 text-purple-600 hover:bg-purple-100 rounded-lg">View Orders</Link>
          </li>
          <li>
            <Link to="/admin/order-status" className="block p-3 text-purple-600 hover:bg-purple-100 rounded-lg">Change Order Status</Link>
          </li>
          <li>
            <Link to="/admin/order-history" className="block p-3 text-purple-600 hover:bg-purple-100 rounded-lg">Customer Order History</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Welcome to the Admin Panel</h2>
        {/* Add your admin page content here */}
      </div>
    </div>
  );
}
