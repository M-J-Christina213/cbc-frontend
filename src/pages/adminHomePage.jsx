import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaClipboardList, FaUserAlt, FaCommentDots, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

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
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-purple-100 text-purple-700">
                <th className="p-3 text-left">Product Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Hydra Luxe Moisturizer</td>
                <td className="p-3">$240.99</td>
                <td className="p-3">100</td>
                <td className="p-3">An ultra-nourishing moisturizer that deeply hydrates and improves skin texture.</td>
                <td className="p-3">
                  <button className="text-purple-600 hover:text-purple-800 mx-2"><FaPencilAlt /></button>
                  <button className="text-red-600 hover:text-red-800 mx-2"><FaTrashAlt /></button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Glow Radiance Serum</td>
                <td className="p-3">$155.49</td>
                <td className="p-3">50</td>
                <td className="p-3">A serum that brightens and evens out skin tone, leaving a radiant glow.</td>
                <td className="p-3">
                  <button className="text-purple-600 hover:text-purple-800 mx-2"><FaPencilAlt /></button>
                  <button className="text-red-600 hover:text-red-800 mx-2"><FaTrashAlt /></button>
                </td>
              </tr>
              {/* Add more product rows here */}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Link to="/admin/products/add" className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700">
            Add New Product
          </Link>
        </div>
      </div>
      
    </div>
  );
}
