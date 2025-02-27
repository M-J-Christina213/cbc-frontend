import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Correct import

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false); // To track whether the product is in favorites

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isProductInWishlist = wishlist.some(item => item.productID === product.productID);
    setIsFavorite(isProductInWishlist);
  }, [product.productID]);

  const toggleFavorite = () => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (isFavorite) {
      // Remove from wishlist if it's already there
      wishlist = wishlist.filter(item => item.productID !== product.productID);
    } else {
      // Add to wishlist if it's not already there
      wishlist.push(product);
    }

    // Update the wishlist in localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Toggle favorite status
    setIsFavorite(prevState => !prevState);
  };

  return (
    <div className="bg-white shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
      <Link to={`/productInfo/${product.productID}`}>
        <img src={product.images[0]} alt={product.productName} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-center text-gray-900">{product.productName}</h3>
          <p className="text-sm text-center text-gray-600"> {product.productID}</p>
          <p className="text-purple-700 text-center font-semibold">LKR {product.lastPrice.toFixed(2)}</p>
          {product.lastPrice < product.price && (
            <p className="text-gray-500 text-center line-through">LKR {product.price.toFixed(2)}</p>
          )}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button 
            className="bg-purple-600 text-white py-2 px-4 text-center flex items-center gap-2 hover:bg-purple-800 w-full"
          >
            <FaShoppingCart size={18} /> Add to Cart
          </button>
          <button 
            className={`text-black border-2 border-black hover:text-red-500 hover:border-red-500 ${isFavorite ? 'text-red-500 fill-red-500' : 'fill-none'} ml-8`} 
            onClick={toggleFavorite}
          >
            <FaHeart size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
