import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";

export default function ProductPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");

  // Convert category to Title Case (first letter uppercase, rest lowercase)
  const formattedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    : "";

  useEffect(() => {
    setLoadingStatus("loading");
    console.log("Fetching products for category:", formattedCategory);

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/products?category=${formattedCategory}`)
      .then((res) => {
        console.log("Fetched products:", res.data.length);
        console.log("Product details:", JSON.stringify(res.data, null, 2)); // Logs fetched products
        setProducts(res.data);
        setLoadingStatus("loaded");
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        toast.error("Failed to fetch products", { position: "top-center" });
        setLoadingStatus("error");
      });
  }, [category]); // Ensure fetching updates when category changes

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Category: {formattedCategory}</h2>

      {loadingStatus === "loading" && <p>Loading products...</p>}
      {loadingStatus === "error" && <p className="text-red-500">Failed to load products</p>}
      {loadingStatus === "loaded" && products.length === 0 && <p>No products found</p>}

      {loadingStatus === "loaded" && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.productID} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
