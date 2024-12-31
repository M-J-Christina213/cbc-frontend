import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if(!productsLoaded){
      axios.get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setProductsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
    }
    
  }, [productsLoaded]);

  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
      <h2 className="text-xl font-bold text-center text-pink-600 mb-6">
        Welcome to Product Management Section
      </h2>

      {
  productsLoaded ? (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse text-sm">
        <thead>
          <tr className="bg-purple-100 text-purple-700 font-semibold">
            <th className="p-3 text-left">Product ID</th>
            <th className="p-3 text-left">Product Name</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Last Price</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-purple-50" : "bg-white"
              } hover:bg-purple-100`}
            >
              <td className="p-3">{product.productID}</td>
              <td className="p-3">{product.productName}</td>
              <td className="p-3">{product.price}</td>
              <td className="p-3">{product.lastPrice}</td>
              <td className="p-3">{product.stock}</td>
              <td className="p-3">{product.description}</td>
              <td className="p-3 flex gap-2">
                <button
                  className="text-purple-600 hover:text-purple-800"
                  title="Edit Product"
                >
                  <FaPencilAlt />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  title="Delete Product"
                  onClick={() => {
                    alert(product.productID);
                    const token = localStorage.getItem("token");
                    axios
                      .delete(`http://localhost:5000/api/products/${product.productId}`, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      })
                      .then((res) => {
                        console.log(res.data);
                        toast.success("Product deleted successfully");
                        setProductsLoaded(false);
                      });
                  }}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <Link
          to="/admin/products/addProduct"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-lg">+</span> Add New Product
        </Link>
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="w-[60px] h-[60px] border-[2px] border-gray-200 
        animate-spin border-b-[#3b82fb] rounded-full"
      ></div>
    </div>
  )
}

</div>
  )
};

