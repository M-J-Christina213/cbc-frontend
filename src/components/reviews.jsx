import React, { useState, useEffect } from "react";

// Sample reviews data
const reviews = [
  { id: 1, name: "Ayesha Fernando", rating: 5, review: "The foundation blends effortlessly, giving a flawless finish. Perfect for my skin tone!", type: "good" },
  { id: 2, name: "Nimali Perera", rating: 5, review: "This moisturizer keeps my skin hydrated all day. Lightweight and non-greasy!", type: "good" },
  { id: 3, name: "Sajini De Silva", rating: 4, review: "Loved the lipstick! Vibrant color and long-lasting. Just wish it was more moisturizing.", type: "good" },
  { id: 4, name: "Dinesha Wijesinghe", rating: 5, review: "This serum worked wonders! My skin feels smoother and brighter within weeks.", type: "good" },
  { id: 5, name: "Kasuni Jayawardena", rating: 5, review: "Shampoo smells divine and leaves my hair silky soft. A must-have!", type: "good" },
  { id: 6, name: "Tharushi Senanayake", rating: 4, review: "The nail polish has a rich color and lasts long. Great quality for the price!", type: "good" },
  { id: 7, name: "Ravindi Karunaratne", rating: 5, review: "This body wash feels luxurious and smells amazing. My skin feels so refreshed!", type: "good" },
  { id: 8, name: "Shanika Ranasinghe", rating: 4, review: "Good eyebrow pencil, easy to apply. Stays on well throughout the day!", type: "good" },
  { id: 9, name: "Dinusha Wickramasinghe", rating: 3, review: "Makeup brushes are super soft and blend everything beautifully. Worth every rupee!", type: "good" },
  { id: 10, name: "Piumi Rathnayake", rating: 5, review: "The hand cream is rich yet absorbs quickly. Perfect for dry hands!", type: "good" }
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews]);

  const renderStars = (rating) => {
    const stars = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
      stars[i] = true;
    }
    return stars.map((star, index) => (
      <span key={index} className={star ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="w-full py-1 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Customer Reviews</h2>

      {/* Review Slideshow */}
      <div className="bg-pink-500 text-white shadow-lg p-6 w-full sm:w-3/4 md:w-1/2 mx-auto text-center relative">
        {/* Review Content */}
        <h3 className="text-xl font-semibold">{reviews[currentReview]?.name}</h3>
        <div className="text-yellow-500">{renderStars(reviews[currentReview]?.rating)}</div>
        <p className="text-lg italic mt-2">"{reviews[currentReview]?.review}"</p>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:bg-gray-100 transition-all"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:bg-gray-100 transition-all"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
