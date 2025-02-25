import { FiPhone, FiMail } from 'react-icons/fi';
import Header from '../components/header';
import Footer from '../components/footer';

export default function ContactUs() {
  return (
    <div className="w-full">
        <Header/>
      {/* Banner Section */}
      <div className="w-full h-60 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
        Contact Us
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-black mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" required />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" required></textarea>
          <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition">Send Message</button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-80 my-12">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092177!2d144.95373531550417!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f5a6f7%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2s!4v1644465738456!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Customer Care Section */}
      <div className="bg-black text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Customer Care</h2>
        <p className="text-lg mb-2">📍 123 Beauty St, Crystal City, CC 45678</p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FiPhone /> +1 234 567 890
        </p>
        <p className="flex items-center justify-center gap-2 text-lg mt-2">
          <FiMail /> support@crystalclearbeauty.com
        </p>
        <p className="mt-4">Response Time: 24-48 hours</p>
      </div>
      <Footer/>
    </div>
  );
}
