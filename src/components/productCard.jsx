import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/productInfo/${product.productID}`}
      className="group"
    >
      <div className="bg-white w-[280px] h-[380px] m-[15px] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="h-[65%] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-between p-4">
          <h1 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
            {product.productName}
          </h1>
          <p className="text-sm text-gray-600 truncate">
            {product.description || "No description available."}
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-bold text-purple-700">
              ${product.price || "0.00"}
            </span>
            <button className="px-4 py-1 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
