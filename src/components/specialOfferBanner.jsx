import { useState } from 'react';
import offer1 from "../assets/specialOffer/offer1.jpeg";
import offer2 from "../assets/specialOffer/offer2.jpeg";
import offer3 from "../assets/specialOffer/offer3.jpeg";

const specialOffers = [
  {
    id: 1,
    title: 'Exclusive 50% OFF',
    description: 'Get 50% off on all skincare products. Limited time only!',
    price: 'Rs. 1,500',
    newPrice: 'Rs. 1,200',
    image: offer1,
  },
  {
    id: 2,
    title: 'Buy 1 Get 1 Free',
    description: 'Buy any lipstick and get another one for free!',
    price: 'Rs. 1,000',
    newPrice: 'Rs. 500',
    image: offer2,
  },
  {
    id: 3,
    title: 'Free Shipping on Orders Above Rs. 2,000',
    description: 'Shop now and enjoy free shipping on orders above Rs. 2,000.',
    price: 'Rs. 2,000',
    newPrice: 'Rs. 2,000',
    image: offer3,
  },
];

export default function SpecialOffersBanner() {
  const [hoveredOffer, setHoveredOffer] = useState(null);

  return (
    <div className="w-full min-h-screen py-12 px-6 md:px-16 bg-purple-100">
      <h2 className="text-4xl font-bold text-center mb-10">Special Offers</h2>

      {/* Special Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialOffers.map((offer) => (
          <div
            key={offer.id}
            onMouseEnter={() => setHoveredOffer(offer.id)}
            onMouseLeave={() => setHoveredOffer(null)}
            className={`relative bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform ${
              hoveredOffer === offer.id ? 'scale-105 shadow-2xl' : ''
            }`}
          >
            {/* Offer Image */}
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-58 object-cover"
            />

            {/* Offer Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{offer.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{offer.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">{offer.newPrice}</span>
                <span className="text-sm line-through text-gray-400">{offer.price}</span>
              </div>
            </div>

            {/* Hover Effect - Highlight Offer */}
            {hoveredOffer === offer.id && (
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
