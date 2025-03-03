import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../components/productCard";
import Header from "../components/header";
import Footer from "../components/footer";

const themes = {
  "new-arrivals": { title: "New Arrivals", color: "bg-pink-600" },
  "special-offers": { title: "Special Offers", color: "bg-pink-600" },
  "gifts": { title: "Gifts", color: "bg-pink-600" },
};

export default function ExclusiveProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");

  const formattedCategory = category ? category.replace("-", " ") : "";
  const theme = themes[category] || { title: "Products", color: "bg-gray-200" };

  useEffect(() => {
    setLoadingStatus("loading");

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/products?category=${formattedCategory}`)
      .then((res) => {
        setProducts(res.data);
        setLoadingStatus("loaded");
      })
      .catch(() => {
        toast.error("Failed to fetch products");
        setLoadingStatus("error");
      });
  }, [category]);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />

      {/* Banner */}
      <div className={`text-center py-8 text-white font-bold text-3xl ${theme.color}`}>
        {theme.title}
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {loadingStatus === "loading" ? (
          <p className="text-center">Loading...</p>
        ) : loadingStatus === "error" ? (
          <p className="text-center text-red-500">Failed to load products</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.productID} product={product} />
                ))
                ) : (
                <p className="text-center col-span-full text-gray-500">
                    No products yet, stay tuned...
                </p>
                )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
