import { Link } from 'react-router-dom';

export default function AdminHomepage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-300">
      {/* Sidebar */}
      <div className="w-64 bg-pink-500 text-white p-4 rounded-r-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-center mb-8">Admin Dashboard</h1>
        <ul>
          <li>
            <Link to="/admin/create-admin" className="block py-2 text-lg hover:bg-pink-400 rounded-lg">Create Admin Account</Link>
          </li>
          <li>
            <Link to="/admin/post-product" className="block py-2 text-lg hover:bg-pink-400 rounded-lg">Post Products</Link>
          </li>
          <li>
            <Link to="/admin/manage-reviews" className="block py-2 text-lg hover:bg-pink-400 rounded-lg">Manage Reviews</Link>
          </li>
          <li>
            <Link to="/admin/manage-users" className="block py-2 text-lg hover:bg-pink-400 rounded-lg">Manage Users</Link>
          </li>
          <li>
            <Link to="/admin/view-orders" className="block py-2 text-lg hover:bg-pink-400 rounded-lg">View Orders</Link>
          </li>
          <li>
            <Link to="/admin/order-status" className="block py-2 text-lg hover:bg-pink-400 rounded-lg">Change Order Status</Link>
          </li>
          <li>
            <Link to="/admin/view-customer-history" className="block py-2 text-lg hover:bg-pink-400 rounded-lg">Customer Order History</Link>
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8 bg-white rounded-l-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-pink-600 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin Features */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-pink-600 mb-3">Create Admin Account</h3>
            <p className="mb-4">Create new admin accounts to manage the website.</p>
            <Link to="/admin/create-admin">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600">Create Account</button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-pink-600 mb-3">Post Products</h3>
            <p className="mb-4">Add new products with multiple images to the website.</p>
            <Link to="/admin/post-product">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600">Add Product</button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-pink-600 mb-3">Manage Reviews</h3>
            <p className="mb-4">Hide unnecessary or inappropriate reviews.</p>
            <Link to="/admin/manage-reviews">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600">Manage Reviews</button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-pink-600 mb-3">Manage Users</h3>
            <p className="mb-4">Block or manage users accessing the website.</p>
            <Link to="/admin/manage-users">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600">Manage Users</button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-pink-600 mb-3">View Orders</h3>
            <p className="mb-4">View all orders placed by users.</p>
            <Link to="/admin/view-orders">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600">View Orders</button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-pink-600 mb-3">Change Order Status</h3>
            <p className="mb-4">Update the status of user orders.</p>
            <Link to="/admin/order-status">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600">Update Status</button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl text-pink-600 mb-3">View Customer History</h3>
            <p className="mb-4">View customer history of previous orders.</p>
            <Link to="/admin/view-customer-history">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600">Customer History</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
