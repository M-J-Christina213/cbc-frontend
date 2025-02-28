import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Function to fetch products from the backend
  const fetchProducts = async () => {
    setLoading(true); // Set loading to true while fetching
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products");
      console.log('Products fetched:', response.data); // Add this log to check the response
      setProducts(response.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false); // Stop loading when the data is fetched or an error occurs
    }
  };

  // UseEffect to fetch products when the component mounts or when the products list is updated
  useEffect(() => {
    fetchProducts(); // Fetch products whenever this component mounts or updates
  }, []); // Empty array to ensure it runs once when the component is mounted

  const handleDelete = (productID) => {
    const confirmDelete = window.confirm(`Do you want to delete ${productID} permanently?`);
    if (confirmDelete) {
      const token = localStorage.getItem("token");
      axios
        .delete(import.meta.env.VITE_BACKEND_URL + `/api/products/${productID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Product deleted successfully");
          fetchProducts(); // Re-fetch the products after deletion
        })
        .catch(() => {
          toast.error("Failed to delete product");
        });
    }
  };

  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
      <h2 className="text-xl font-bold text-center text-pink-600 mb-6">
        Welcome to Product Management Section
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
                <th className="p-3 text-left">Product ID</th>
                <th className="p-3 text-left">Product Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Subcategory</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Last Price</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center p-3">No products available</td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr key={product.productID} className={`border-b ${index % 2 === 0 ? "bg-purple-50" : "bg-white"} hover:bg-purple-100`}>
                    <td className="p-3">{product.productID}</td>
                    <td className="p-3">{product.productName}</td>
                    <td className="p-3">{product.category}</td>
                    <td className="p-3">{product.subcategory}</td>
                    <td className="p-3">{product.price}</td>
                    <td className="p-3">{product.lastPrice}</td>
                    <td className="p-3">{product.stock}</td>
                    <td className="p-3">{product.description}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        className="text-purple-600 hover:text-purple-800"
                        title="Edit Product"
                        onClick={() => navigate("/admin/products/editProduct", { state: { product } })}
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        title="Delete Product"
                        onClick={() => handleDelete(product.productID)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="mt-6 flex justify-end">
            <Link
              to="/admin/products/addProduct"
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
