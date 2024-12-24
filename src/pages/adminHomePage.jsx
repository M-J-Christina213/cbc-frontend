import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaClipboardList, FaUserAlt, FaCommentDots } from 'react-icons/fa';

export default function AdminHomePage() {
  return (
    <div className="flex items-start min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/admin/dashboard" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaTachometerAlt className="mr-3 text-xl" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaBox className="mr-3 text-xl" /> Products
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaClipboardList className="mr-3 text-xl" /> Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/customers" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaUserAlt className="mr-3 text-xl" /> Customers
            </Link>
          </li>
          <li>
            <Link to="/admin/reviews" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaCommentDots className="mr-3 text-xl" /> Reviews
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Welcome to the Admin Panel</h2>
        {/* Add your admin page content here */}
      </div>
    </div>
  );
}