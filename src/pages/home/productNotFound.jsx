import { Link } from "react-router-dom";

export default function ProductNotFound() {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-grey-800 mb-4"> 404 </h1>
        <p className="text-xl font-bold text-pink-500 mb-6">Oops! Product Not Found</p>
        <p className="text-lg text-gray-700 mb-6">The product you're looking for may have been moved or no longer exists.</p>
        <div className="flex justify-center">
          <Link 
            to="/products" 
              className="py-3 px-8 bg-primary text-white rounded-lg font-semibold hover:scale-105 transform transition duration-300 ease-out shadow-md"
            >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
