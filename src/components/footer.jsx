import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Part 1 - Get in Touch */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-xl">📍</span>
            <p>Location: Colombo, Sri Lanka</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-xl">📧</span>
            <p>info@crystalbeautyclear.com</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-xl">📞</span>
            <p>Contact: +94 77 654 3210</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <FaFacebookF className="text-2xl hover:text-pink-500 transition-all cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-pink-500 transition-all cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-pink-500 transition-all cursor-pointer" />
              <FaTiktok className="text-2xl hover:text-pink-500 transition-all cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Part 2 - Nav Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Product Categories</h3>
          <ul>
            <li><a href="/makeup" className="text-white hover:text-pink-500">Makeup</a></li>
            <li><a href="/skincare" className="text-white hover:text-pink-500">Skincare</a></li>
            <li><a href="/haircare" className="text-white hover:text-pink-500">Haircare</a></li>
            <li><a href="/nails" className="text-white hover:text-pink-500">Nails</a></li>
            <li><a href="/bath-and-body" className="text-white hover:text-pink-500">Bath & Body</a></li>
            <li><a href="/new-arrivals" className="text-white hover:text-pink-500">New Arrivals</a></li>
            <li><a href="/special-offers" className="text-white hover:text-pink-500">Special Offers</a></li>
            <li><a href="/gifts" className="text-white hover:text-pink-500">Gifts</a></li>
          </ul>
        </div>

        {/* Part 3 - More Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">More Info</h3>
          <ul>
            <li><a href="/contact-us" className="text-white hover:text-pink-500">Contact Us</a></li>
            <li><a href="/about-us" className="text-white hover:text-pink-500">About Us</a></li>
            <li><a href="/faq" className="text-white hover:text-pink-500">FAQ</a></li>
          </ul>
        </div>

        {/* Part 4 - Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 w-full rounded-md text-black"
            />
            <button
              type="submit"
              className="p-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-all"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Payment Methods</h3>
            <img
              src="/images/payment-methods.png"
              alt="Payment Methods"
              className="w-1/2"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm">
        <p>&copy; 2025 Crystal Beauty Clear. All rights reserved.</p>
      </div>
    </footer>
  );
}
