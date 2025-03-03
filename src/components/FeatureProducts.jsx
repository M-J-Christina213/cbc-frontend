import { useState } from "react";
import makeup from "../assets/featured/Lipstick.jpeg";
import paletteImage from "../assets/featured/palette.jpeg";
import foundation from "../assets/featured/foundation.jpeg";
import highlighter from "../assets/featured/highlighter.jpeg";
import lipgloss from "../assets/featured/lipgloss.jpeg";
import shimmerEyeshadow from "../assets/featured/shimmer.jpeg";
import bbCream from "../assets/featured/bbcream1.webp";
import mascara from "../assets/featured/mascara.jpg";
import exclusiveLipstick from "../assets/featured/exlipstick.jpg";
import exclusivePalette from "../assets/featured/diamond.jpeg";
import exclusiveFoundation from "../assets/featured/luxuryStick.avif";
import exclusiveBlush from "../assets/featured/blush.jpg";


const productCategories = {
  "Best Sellers": [
    { id: 1, name: "Matte Liquid Lipstick", price: "Rs 1500.99", image: makeup, rating: 4 },
    { id: 2, name: "Velvet Eyeshadow Palette", price: "Rs 2200.49", image: paletteImage, rating: 5 },
    { id: 3, name: "Full-Coverage Foundation", price: "Rs 1800.99", image: foundation, rating: 3 },
    { id: 4, name: "Glow Highlighter", price: "Rs 1200.99", image: highlighter, rating: 4 },
  ],
  "New Arrivals": [
    { id: 5, name: "Hydrating Lip Gloss", price: "Rs 1400.99", image: lipgloss, rating: 4 },
    { id: 6, name: "Shimmer Eyeshadow Palette", price: "Rs 2400.99", image: shimmerEyeshadow, rating: 5 },
    { id: 7, name: "BB Cream SPF 30", price: "Rs 1900.99", image: bbCream, rating: 3 },
    { id: 8, name: "Long-Wear Mascara", price: "Rs 1600.49", image: mascara, rating: 4 },
  ],
  "Exclusives": [
    { id: 9, name: "Limited Edition Lipstick", price: "Rs 2100.99", image: exclusiveLipstick, rating: 5 },
    { id: 10, name: "Diamond Glow Palette", price: "Rs 2900.99", image: exclusivePalette, rating: 4 },
    { id: 11, name: "Luxury Foundation Stick", price: "Rs 2600.99", image: exclusiveFoundation, rating: 4 },
    { id: 12, name: "Silk Finish Blush", price: "Rs 1700.99", image: exclusiveBlush, rating: 3 },
  ],
};

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className="flex space-x-1">
      {stars.map((filled, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-400"}`}
        >
          <path
            d="M12 17.75l-5.763 3.037 1.093-6.388-4.653-4.52 6.428-.934L12 2l2.855 5.95 6.428.934-4.653 4.52 1.093 6.388z"
          />
        </svg>
      ))}
    </div>
  );
};

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("Best Sellers");

  return (
    <div className="w-full py-10 px-6 md:px-12 bg-pink-100">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-6 mb-6">
        {Object.keys(productCategories).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 font-medium border-b-2 transition-all duration-300 ${
              selectedCategory === category
                ? "border-primary text-primary"
                : "border-transparent text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid with Tailwind Transition */}
      <div
        key={selectedCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-500 ease-in-out opacity-100"
      >
        {productCategories[selectedCategory].map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-65 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-primary font-bold mt-1">{product.price}</p>
            <StarRating rating={product.rating} />
          </div>
        ))}
      </div>
    </div>
  );
}
