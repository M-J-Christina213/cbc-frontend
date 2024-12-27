import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="text-center w-full max-w-4xl px-6 py-8 bg-white rounded-lg shadow-lg">
        <header className="mb-4">
          <h1 className="text-4xl font-bold text-purple-700">Beauty Essentials</h1>
          <p className="text-xl text-gray-600">Your one-stop shop for beauty products</p>
        </header>
        <Link to="/login" className="inline-block py-2 px-6 mb-6 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors">
          Login
        </Link>
        <section className="products mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6">Our Top Picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="product-item bg-gray-100 rounded-lg p-4 text-center">
              <img src="product-image-1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <p className="text-lg text-gray-700">Product Name 1</p>
            </div>
            <div className="product-item bg-gray-100 rounded-lg p-4 text-center">
              <img src="product-image-2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <p className="text-lg text-gray-700">Product Name 2</p>
            </div>
            <div className="product-item bg-gray-100 rounded-lg p-4 text-center">
              <img src="product-image-3.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <p className="text-lg text-gray-700">Product Name 3</p>
            </div>
          </div>
        </section>
        <footer>
          <p className="text-gray-600">Contact us at: beauty@example.com</p>
        </footer>
      </div>
    </div>
  );
}
