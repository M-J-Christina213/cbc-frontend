import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'react-icons/fa'; // Ensure you're using correct icon imports

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false); // To track whether the product is in favorites

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState); // Toggle the favorite status
    // Logic to add/remove from wishlist or favorites can go here (e.g., save to localStorage or backend)
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <Link to={`/productInfo/${product.productID}`}>
        <img src={product.images[0]} alt={product.productName} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{product.productName}</h3>
        <p className="text-sm text-gray-600">Product ID: {product.productID}</p>
        <p className="text-purple-700 font-semibold">LKR {product.lastPrice.toFixed(2)}</p>
        {product.lastPrice < product.price && (
          <p className="text-gray-500 line-through">LKR {product.price.toFixed(2)}</p>
        )}
        <div className="mt-4 flex justify-between">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-purple-800">
            <ShoppingCart size={18} /> Add to Cart
          </button>
          <button 
            className={`text-purple-600 hover:text-red-500 ${isFavorite ? 'text-red-500' : ''}`} 
            onClick={toggleFavorite}
          >
            <Heart size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
