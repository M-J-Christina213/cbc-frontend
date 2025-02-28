import React from 'react';


import Header from '../../components/header';
import Footer from '../../components/footer';
import banner from "../../assets/images-cbc/aboutUs/banner.png"
import mission from "../../assets/images-cbc/aboutUs/mission.jpg"
import ourvision from "../../assets/images-cbc/aboutUs/ourvision.jpg"
import story from "../../assets/images-cbc/aboutUs/story.png"

export default function AboutUs() {
  return (
   
    <div className="bg-white text-gray-900">
         <Header/>
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        <img
          src={banner}
          alt="Crystal Beauty Clear Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Section: Our Story */}
      <section className="container mx-auto py-12 px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={story}
            alt="Our Story"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Crystal Beauty Clear was founded with a passion for beauty and self-care. 
            Our journey began with a mission to provide premium beauty products that are safe, 
            effective, and cruelty-free. We believe that beauty is more than skin deep—it’s about confidence, 
            self-love, and empowerment.
          </p>
        </div>
      </section>

      {/* Section: Our Mission */}
      <section className="bg-purple-50 py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={mission}
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our mission is to empower individuals by providing high-quality beauty products 
              that enhance natural beauty while being kind to the skin and the planet. 
              We are committed to innovation, sustainability, and inclusivity in the beauty industry.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Our Vision */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={ourvision}
              alt="Our Vision"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              Our vision is to redefine beauty by making self-care accessible to everyone. 
              We strive to create a world where confidence and elegance go hand in hand, 
              helping people feel their best every day.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Our Values */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-pink-400 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-pink-300">Quality</h3>
              <p className="text-gray-300">
                We ensure our products are safe, effective, and made with the highest standards.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-pink-300">Inclusivity</h3>
              <p className="text-gray-300">
                Beauty is for everyone. We celebrate diversity and uniqueness in all forms.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-pink-300">Sustainability</h3>
              <p className="text-gray-300">
                Our products are ethically sourced, cruelty-free, and environmentally friendly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
     
    </div>
  );
}
