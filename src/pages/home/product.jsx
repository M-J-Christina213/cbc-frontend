import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";


export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    if (loadingStatus === "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch(() => {
            toast.error("Failed to fetch products", {
                position: "top-center"} // Center the toast message
                
            )
              setLoadingStatus("error");
            });
    }
  }, [loadingStatus]);

  return (

    <div className="bg-gray-100 w-full min-h-screen p-6 flex flex-col items-center">
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
         <div className="flex flex-wrap justify-center">
           {products.map((product) => (
             <ProductCard key={product.productID} product={product} />
           ))}
         </div>
       )}
     </div>
   );
 }
