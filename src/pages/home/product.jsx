import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Heart, ShoppingCart } from "lucide-react";

const categories = ["Makeup", "Skincare", "Haircare", "Nails", "Body & Bath", "Tools & Brushes"];

export default function ProductPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");
  
  const formattedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    : "";

  useEffect(() => {
    setLoadingStatus("loading");
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products?category=${formattedCategory}`)
      .then((res) => {
        setProducts(res.data);
        setLoadingStatus("loaded");
      })
      .catch((err) => {
        toast.error("Failed to fetch products");
        setLoadingStatus("error");
      });
  }, [category]);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-purple-700 text-white py-4 px-6 flex justify-center gap-6 shadow-md">
        {categories.map((cat) => (
          <Link 
            key={cat} 
            to={`/${cat.toLowerCase()}`} 
            className="hover:underline text-lg font-semibold">
            {cat}
          </Link>
        ))}
      </nav>
      
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-6">{formattedCategory}</h2>
        {loadingStatus === "loading" && <p className="text-center">Loading products...</p>}
        {loadingStatus === "error" && <p className="text-center text-red-500">Failed to load products</p>}
        {loadingStatus === "loaded" && products.length === 0 && <p className="text-center">No products found</p>}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.productID} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
