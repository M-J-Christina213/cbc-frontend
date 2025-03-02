import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaTrashAlt, FaUserSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch reviews from the backend
  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/reviews`
      );
      
      // Check if no reviews are returned
      if (response.data.length === 0) {
        toast.info("No reviews found for any product.");
      } else {
        setReviews(response.data);
      }
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
      toast.error("Failed to fetch reviews.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleHideReview = async (reviewID) => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${reviewID}/hide`);
      toast.success("Review hidden successfully");
      fetchReviews(); // Refresh reviews after hiding
    } catch {
      toast.error("Failed to hide review");
    }
  };

  const handleBlockCustomer = async (customerID) => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/customers/${customerID}/block`);
      toast.success("Customer blocked successfully");
    } catch {
      toast.error("Failed to block customer");
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg m-4">
      <h2 className="text-xl font-bold text-center text-pink-600 mb-6">
        Manage Product Reviews
      </h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 border-2 border-gray-200 animate-spin border-b-purple-600 rounded-full"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-purple-100 text-purple-700 font-semibold">
                <th className="p-3 text-left">Product ID</th>
                <th className="p-3 text-left">Reviews Count</th>
                <th className="p-3 text-left">Avg Rating</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-3">No reviews available</td>
                </tr>
              ) : (
                reviews.map((product) => (
                  <tr key={product.productID} className="border-b hover:bg-purple-100">
                    <td className="p-3">{product.productID}</td>
                    <td className="p-3">{product.reviewCount}</td>
                    <td className="p-3">{product.avgRating.toFixed(1)}</td>
                    <td className="p-3 flex gap-2">
                      <Link
                        to={`/admin/reviews/${product.productID}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEye />
                      </Link>
                      <button
                        onClick={() => handleHideReview(product._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrashAlt />
                      </button>
                      <button
                        onClick={() => handleBlockCustomer(product.customerID)}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <FaUserSlash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
