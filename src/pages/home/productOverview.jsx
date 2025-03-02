import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";
import ImageSlider from "../../components/imageSlider";
import { addToCart } from "../../utilis/cartFunction";
import toast from "react-hot-toast";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Reviews from "../../components/reviews";

export default function ProductOverview() {
  const params = useParams(); // Now useParams is defined and can be used here
  const productID = params.productID;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [cart, setCart] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", email: "", rating: 5, review: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productID}`);
        setProduct(response.data);
        setStatus("found");
      } catch (error) {
        if (error.response?.status === 404) {
          setStatus("not_found");
        } else {
          setStatus("error");
        }
      }
    };

    fetchProduct();
  }, [productID]);

  function onAddtoCartClick() {
    addToCart(product.productID, 1);
    toast.success(product.productID + " Added to Cart");
    setCart(loadCart());
  }

  function onBuyNowClick() {
    navigate("/shipping", {
      state: {
        items: [{ productId: product.productID, qty: 1 }],
      },
    });
  }

  const submitReview = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/reviews`, {
        ...newReview,
        productID,  // Include the productID in the review request
      });
      alert("Review submitted successfully!");
      setNewReview({ name: "", email: "", rating: 5, review: "" });
    } catch (error) {
      alert("Error submitting review.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {status === "loading" && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500 border-b-accent"></div>
        </div>
      )}
      {status === "not_found" && <ProductNotFound />}
      {status === "error" && (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-red-500 text-xl">Something went wrong. Please try again later.</h1>
        </div>
      )}
      {status === "found" && (
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center p-4 space-y-4 lg:space-y-0">
          <h1 className="text-3xl font-bold lg:hidden text-gray-800 mb-2">{product.productName}</h1>
          <p className="text-xl text-gray-600 lg:hidden">
            {product.price > product.lastPrice && (
              <span className="line-through text-red-500">${product.price}</span>
            )}
            <span> LKR.{product.lastPrice} </span>
          </p>

          {/* Image Section */}
          <div className="w-[100%] lg:w-[35%] h-full mb-4 lg:mb-0 mt-0">
            <ImageSlider
              images={product.images}
              style={{ height: "100%", maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          {/* Product Details Section */}
          <div className="w-full md:w-[65%] mt-0 py-0 p-6 relative">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 hidden lg:block">{product.productName}</h1>
            <h1 className="text-xl font-bold text-gray-600 mb-4">{product.altNames.join(" | ")}</h1>
            <p className="text-xl text-gray-600 hidden lg:block">
              {product.price > product.lastPrice && (
                <span className="line-through text-red-500">${product.price}</span>
              )}
              <span> LKR.{product.lastPrice} </span>
            </p>
            <p className="text-base text-gray-600 mb-6">{product.description}</p>
            <button onClick={onAddtoCartClick} className="bg-primary text-white p-2 mb-2 w-full sm:w-auto">
              Add to Cart
            </button>
            <button onClick={onBuyNowClick} className="text-primary border-primary border mx-1 p-2 mb-4 w-full sm:w-auto">
              Buy now
            </button>
            
            {/* Review Section */}
            <div className="mt-2 relative bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-2">
              <h3 className="text-xl font-bold mb-4 text-white">Leave a Review</h3>
              <div className="flex gap-2"> 
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-2 mb-4 w-[300px] text-gray-700"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                />
                
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border p-2 mb-4 w-[800px] text-gray-700"
                  value={newReview.email}
                  onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                />
              </div>
              
              {/* Review Textarea */}
              <textarea
                placeholder="Your Review"
                className="border p-2 w-full mb-2 text-gray-700"
                value={newReview.review}
                onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
              />
              
              <div className="flex gap-2"> 
                {/* Rating Select */}
                <select
                  className="border p-2 mb-4 text-gray-700"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}⭐
                    </option>
                  ))}
                </select>
                
                {/* Submit Review Button */}
                <button
                  className="bg-primary text-white mx-1 p-2 mb-4 w-[500px] hover:bg-primary/80 transition duration-300"
                  onClick={submitReview}
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Reviews />
      <Footer />
    </div>
  );
}
