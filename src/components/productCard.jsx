import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { addToCart } from '../utilis/cartFunction.jsx'; // Import the addToCart function

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isProductInWishlist = wishlist.some(item => item.productID === product.productID);
    setIsFavorite(isProductInWishlist);
  }, [product.productID]);

  const toggleFavorite = () => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (isFavorite) {
      wishlist = wishlist.filter(item => item.productID !== product.productID);
    } else {
      wishlist.push(product);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    setIsFavorite(prevState => !prevState);
  };

  // ⭐ Function to generate star rating
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest 0.5

    for (let i = 1; i <= maxStars; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  // ⭐ Function to generate a random rating from predefined options
  const generateRandomRating = () => {
    const ratings = [3, 3.2, 3.5, 3.8, 4, 5, 4.2, 4.4, 4.6, 4.5, 4.8]; // Possible ratings
    const randomIndex = Math.floor(Math.random() * ratings.length);
    return ratings[randomIndex];
  };

  // ⭐ Get a random rating for the product
  const randomReviewRating = generateRandomRating();

  const handleAddToCart = () => {
    addToCart(product.productID, 1); // Add product to cart with quantity 1
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

          {/* ⭐ Rating Section */}
          <div className="flex justify-center items-center mt-2">
            {renderStars(randomReviewRating)} {/* Use the random rating here */}
            <span className="ml-2 text-gray-600 text-sm">({randomReviewRating})</span> {/* Show random rating */}
          </div>
        </div>

        <div className="mt-4 flex justify-center items-center">
          <button 
            onClick={handleAddToCart} // Add to cart when button is clicked
            className="bg-purple-600 text-white py-2 px-16 text-center flex justify-center items-center gap-2 hover:bg-purple-800 w-full"
          >
            <FaShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
