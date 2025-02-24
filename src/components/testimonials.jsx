import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alicia Green',
    role: 'Makeup Enthusiast',
    testimonial: 'I absolutely love the Matte Liquid Lipstick! It’s long-lasting and the color is perfect for any occasion. My go-to now!',
    image: '/images/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Rachel Lee',
    role: 'Skincare Lover',
    testimonial: 'The Hydrating Lip Gloss is a game-changer! It keeps my lips moisturized all day and adds the perfect shine. I’m hooked!',
    image: '/images/testimonial2.jpg',
  },
  {
    id: 3,
    name: 'Liam Turner',
    role: 'Haircare Specialist',
    testimonial: 'I’ve been using the Luxury Foundation Stick for a few weeks now and I’m amazed by how smooth it applies and how natural it looks. Highly recommended!',
    image: '/images/testimonial3.jpg',
  },
  {
    id: 4,
    name: 'Sophia Scott',
    role: 'Body & Bath Enthusiast',
    testimonial: 'The Silk Finish Blush is incredible! It gives my skin a beautiful, glowing finish that lasts all day. Plus, the application is flawless.',
    image: '/images/testimonial4.jpg',
  },
  {
    id: 5,
    name: 'Maya Roberts',
    role: 'Beauty Blogger',
    testimonial: 'The Long-Wear Mascara is the best I’ve ever used. It’s smudge-proof and really lengthens my lashes. I wear it every day!',
    image: '/images/testimonial5.jpg',
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="w-full py-10 px-6 md:px-12 bg-pink-50">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>

      <div className="flex justify-center items-center relative">
        {/* Testimonial Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-3/4 md:w-1/2 transition-opacity duration-1000 ease-in-out opacity-100">
          {/* Testimonial Content */}
          <div className="flex items-center mb-6">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h3>
              <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg italic">{testimonials[currentTestimonial].testimonial}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:bg-gray-100 transition-all"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:bg-gray-100 transition-all"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
