import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch customers from the backend
  const fetchCustomers = async () => {
    setLoading(true); // Set loading to true while fetching
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/customers");
      console.log('Customers fetched:', response.data); // Check the response
      setCustomers(response.data);
    } catch (err) {
      console.error("Failed to fetch customers:", err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchCustomers(); 
  }, []); 

  const handleBlock = async (customerID) => {
    try {
      const response = await axios.patch(import.meta.env.VITE_BACKEND_URL + `/api/block-user/${customerID}`);
      toast.success(response.data.message);
      fetchCustomers(); // Re-fetch the customer list
    } catch (err) {
      toast.error('Failed to block/unblock user');
      console.error("Error blocking user:", err);
    }
  };

  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
      <h2 className="text-xl font-bold text-center text-pink-600 mb-6">
        Welcome to Customer Management Section
      </h2>

      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[60px] h-[60px] border-[2px] border-gray-200 animate-spin border-b-[#3b82fb] rounded-full"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-purple-100 text-purple-700 font-semibold">
                <th className="p-3 text-left">Customer Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Sign-up Date</th>
                <th className="p-3 text-left">Reviews Given</th>
                <th className="p-3 text-left">Blocked</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-3">No customers available</td>
                </tr>
              ) : (
                customers.map((customer, index) => (
                  <tr key={customer._id} className={`border-b ${index % 2 === 0 ? "bg-purple-50" : "bg-white"} hover:bg-purple-100`}>
                    <td className="p-3">{customer.firstName} {customer.secondName}</td>
                    <td className="p-3">{customer.email}</td>
                    <td className="p-3">{new Date(customer.createdAt).toLocaleDateString()}</td>
                    <td className="p-3">{customer.reviewsGiven ? 'Yes' : 'No'}</td>
                    <td className="p-3">{customer.isBlocked ? 'Yes' : 'No'}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        className="text-purple-600 hover:text-purple-800"
                        title="Edit Customer"
                        onClick={() => navigate("/admin/customers/editCustomer", { state: { customer } })}
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        className={`text-${customer.isBlocked ? 'green' : 'red'}-600 hover:text-${customer.isBlocked ? 'green' : 'red'}-800`}
                        title={customer.isBlocked ? "Unblock" : "Block"}
                        onClick={() => handleBlock(customer._id)}
                      >
                        {customer.isBlocked ? 'Unblock' : 'Block'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="mt-6 flex justify-end">
            <Link
              to="/admin/customers/addCustomer"
              className="flex items-center justify-center px-4 py-2 text-primary border-2 border-primary font-bold text-2xl rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-80 transform"
            >
              +
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
