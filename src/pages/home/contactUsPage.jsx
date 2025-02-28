import { FiPhone, FiMail } from 'react-icons/fi';
import Header from '../../components/header';
import Footer from '../../components/footer';

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2987463919812!2d79.84967905293544!3d6.898736725348884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595ffeac7b1d%3A0x9c009a42b1587194!2s123%20Marine%20Drive%2C%20Colombo!5e0!3m2!1sen!2slk!4v1740707677126!5m2!1sen!2slk"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      {/* Customer Care Section */}
      <div className="bg-black text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Customer Care</h2>
        <p className="text-lg mb-2">📍 123 Marine Drive, Colombo 03, Sri Lanka </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FiPhone />  Contact: +94 11 234 5678
        </p>
        <p className="flex items-center justify-center gap-2 text-lg mt-2">
          <FiMail />  support@crystalclearbeauty.com
        </p>
        <p className="mt-4">Response Time: 24-48 hours</p>
      </div>
      <Footer/>
    </div>
  );
}
