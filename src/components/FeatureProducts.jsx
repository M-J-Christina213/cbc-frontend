import { useState } from "react";
import makeup from "../assets/images-cbc/categoryMakeup.png";
import eyeshadow from "../assets/images-cbc/categoryMakeup.png";
import foundation from "../assets/images-cbc/categoryMakeup.png";
import highlighter from "../assets/images-cbc/categoryMakeup.png";
import lipgloss from "../assets/images-cbc/categoryMakeup.png";
import shimmerEyeshadow from "../assets/images-cbc/categoryMakeup.png";
import bbCream from "../assets/images-cbc/categoryMakeup.png";
import mascara from "../assets/images-cbc/categoryMakeup.png";
import exclusiveLipstick from "../assets/images-cbc/categoryMakeup.png";
import exclusivePalette from "../assets/images-cbc/categoryMakeup.png";
import exclusiveFoundation from "../assets/images-cbc/categoryMakeup.png";
import exclusiveBlush from "../assets/images-cbc/categoryMakeup.png";

const productCategories = {
  "Best Sellers": [
    { id: 1, name: "Matte Liquid Lipstick", price: "$15.99", image: makeup },
    { id: 2, name: "Velvet Eyeshadow Palette", price: "$22.49", image: eyeshadow },
    { id: 3, name: "Full-Coverage Foundation", price: "$18.99", image: foundation },
    { id: 4, name: "Glow Highlighter", price: "$12.99", image: highlighter },
  ],
  "New Arrivals": [
    { id: 5, name: "Hydrating Lip Gloss", price: "$14.99", image: lipgloss },
    { id: 6, name: "Shimmer Eyeshadow Palette", price: "$24.99", image: shimmerEyeshadow },
    { id: 7, name: "BB Cream SPF 30", price: "$19.99", image: bbCream },
    { id: 8, name: "Long-Wear Mascara", price: "$16.49", image: mascara },
  ],
  "Exclusives": [
    { id: 9, name: "Limited Edition Lipstick", price: "$21.99", image: exclusiveLipstick },
    { id: 10, name: "Diamond Glow Palette", price: "$29.99", image: exclusivePalette },
    { id: 11, name: "Luxury Foundation Stick", price: "$26.99", image: exclusiveFoundation },
    { id: 12, name: "Silk Finish Blush", price: "$17.99", image: exclusiveBlush },
  ],
};

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("Best Sellers");

  return (
    <div className="w-full py-10 px-6 md:px-12">
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
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-primary font-bold mt-1">{product.price}</p>
            <button className="mt-3 px-4 py-2 bg-primary text-white rounded-md w-full hover:bg-opacity-80 transition-all duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
