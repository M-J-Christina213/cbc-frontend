import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";
import { useParams } from "react-router-dom"; 

export default function ProductPage() {
  const { category } = useParams(); // Capture category from URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingStatus, setLoadingStatus] = useState("loading");

  // Fetch products based on category
  useEffect(() => {
    setLoadingStatus("loading");

    // Assuming the URL directly maps to the Product ID
    const categoryFilter = category ? `category=${category}` : "";

    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/products?${categoryFilter}`
      )
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoadingStatus("loaded");
      })
      .catch(() => {
        toast.error("Failed to fetch products", {
          position: "top-center",
        });
        setLoadingStatus("error");
      });
  }, [category]);

  function search(e) {
    const query = e.target.value;
    setSearchQuery(query);
    setLoadingStatus("loading");

    if (query === "") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          setProducts(res.data);
          setFilteredProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch(() => {
          toast.error("Failed to fetch products", {
            position: "top-center",
          });
          setLoadingStatus("error");
        });
    } else {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products/search/" + query)
        .then((res) => {
          setProducts(res.data);
          setFilteredProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch(() => {
          toast.error("Failed to fetch products", {
            position: "top-center",
          });
          setLoadingStatus("error");
        });
    }
  }

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={search}
        className="w-1/2 p-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Category Navigation */}
      <div className="flex space-x-4 mt-4">
        <a href="/makeup" className="text-blue-500">Makeup</a>
        <a href="/skincare" className="text-blue-500">Skincare</a>
        <a href="/haircare" className="text-blue-500">Haircare</a>
        <a href="/nails" className="text-blue-500">Nails</a>
        <a href="/fragrances" className="text-blue-500">Fragrances</a>
        <a href="/bath-body" className="text-blue-500">Bath & Body</a>
        <a href="/tools-brushes" className="text-blue-500">Tools & Brushes</a>
      </div>

      {loadingStatus === "loading" && (
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="relative flex justify-center items-center w-[100px] h-[100px]">
            <div className="absolute w-full h-full border-[6px] border-purple-500 rounded-full animate-spin border-t-transparent"></div>
            <div className="absolute w-[60px] h-[60px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full shadow-lg"></div>
          </div>
          <p className="mt-5 text-xl text-gray-600 font-medium">Loading products...</p>
        </div>
      )}

      {loadingStatus === "error" && (
        <div className="mt-10 text-center">
          <p className="text-2xl font-bold text-pink-600">Failed to fetch products 😢</p>
          <p className="mt-2 text-gray-600">Please check your internet connection or try again later.</p>
          <button
            onClick={() => setLoadingStatus("loading")}
            className="mt-4 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
          >
            Retry
          </button>
        </div>
      )}

      {loadingStatus === "loaded" && (
        <div className="flex flex-wrap justify-center mt-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.productID} product={product} />
            ))
          ) : (
            <p className="text-gray-600 mt-4">No products found</p>
          )}
        </div>
      )}
    </div>
  );
}
