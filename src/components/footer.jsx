import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Part 1: Logo, Contact, Social Media */}
          <div>
            
              {/* Logo section */}
              <img
            src="/CBC-Logo-transparent.png"
            alt="Logo"
            className="h-40 md:cursor-pointer w-36 mb-4" />
              
            <div className="mb-4">
              <h3 className="font-semibold">Get in Touch</h3>
              <p>
                <span role="img" aria-label="location">📍</span> 
                123 Marine Drive,  
                Colombo 03,  
                Sri Lanka
              </p>
              <p>
                <span role="img" aria-label="email">📧</span> info@crystalbeautyclear.com
              </p>
              <p>
                <span role="img" aria-label="contact">📞</span> Contact: +94 11 234 5678
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-600 hover:text-blue-700 text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-500 text-2xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600 hover:text-pink-700 text-2xl" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-black hover:text-gray-700 text-2xl" />
              </a>
            </div>
          </div>

          {/* Part 2: Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul>
              <li>
                <a href="/makeup" className="hover:border-b-2 hover:border-pink-500 py-2 block">Makeup</a>
              </li>
              <li>
                <a href="/skincare" className="hover:border-b-2 hover:border-pink-500 py-2 block">Skincare</a>
              </li>
              <li>
                <a href="/haircare" className="hover:border-b-2 hover:border-pink-500 py-2 block">Haircare</a>
              </li>
              <li>
                <a href="/nails" className="hover:border-b-2 hover:border-pink-500 py-2 block">Nails</a>
              </li>
              <li>
                <a href="/body-bath" className="hover:border-b-2 hover:border-pink-500 py-2 block">Bath & Body</a>
              </li>
              <li>
                <a href="/new-arrivals" className="hover:border-b-2 hover:border-pink-500 py-2 block">New Arrivals</a>
              </li>
              <li>
                <a href="/special-offers" className="hover:border-b-2 hover:border-pink-500 py-2 block">Special Offers</a>
              </li>
              <li>
                <a href="/gifts" className="hover:border-b-2 hover:border-pink-500 py-2 block">Gifts</a>
              </li>
            </ul>
          </div>

          {/* Part 3: More Info */}
          <div>
            <h3 className="font-semibold mb-4">More Info</h3>
            <ul>
              <li><a href="/contact-us" className="py-2 block">Contact Us</a></li>
              <li><a href="/about-us" className="py-2 block">About Us</a></li>
              <li><a href="/faq" className="py-2 block">FAQ</a></li>
            </ul>
          </div>

          {/* Part 4: Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4">Stay updated with our latest offers and news.</p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="border px-4 py-2  w-full"
              />
              <button className="bg-pink-500 text-white px-6 py-2  hover:bg-pink-600">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-10 border-t pt-4">
          <p>&copy; 2025 Crystal Beauty Clear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
