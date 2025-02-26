import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";
import { Link, useParams } from "react-router-dom"; 

const DropdownLinks = [
  { id: 1, name: "Makeup", link: "/makeup" }, 
  { id: 2, name: "Skincare", link: "/skincare" }, 
  { id: 3, name: "Haircare", link: "/haircare" }, 
  { id: 4, name: "Nails", link: "/nails" }, 
  { id: 5, name: "Fragrances", link: "/fragrances" }, 
  { id: 6, name: "Bath & Body", link: "/bath-body" }, 
  { id: 7, name: "Tools & Brushes", link: "/tools-brushes" }
];

export default function ProductPage() {
  const { category } = useParams(); // Capture category from URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    setLoadingStatus("loading");
    const categoryFilter = category ? `category=${category}` : "";

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/products?${categoryFilter}`)
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoadingStatus("loaded");
      })
      .catch(() => {
        toast.error("Failed to fetch products", { position: "top-center" });
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
          toast.error("Failed to fetch products", { position: "top-center" });
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
          toast.error("Failed to fetch products", { position: "top-center" });
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
        {DropdownLinks.map((item) => (
          <Link key={item.id} to={item.link} className="text-blue-500 hover:underline">
            {item.name}
          </Link>
        ))}
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
