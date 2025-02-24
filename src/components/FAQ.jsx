import { useState } from "react";

export default function FAQ() {

  const [openQuestion, setOpenQuestion] = useState(null);

  
  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="w-full py-10 px-6 md:px-12 bg-pink-50">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {/* FAQ 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <button
            onClick={() => toggleAnswer(1)}
            className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center"
          >
            What products are best for sensitive skin?
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${openQuestion === 1 ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 1 && (
            <p className="text-gray-700 mt-2 transition-all duration-300 ease-in-out">
              Our skincare line includes products specifically formulated for sensitive skin, like our calming Moisturizer and Soothing Serum.
            </p>
          )}
        </div>
        
        {/* FAQ 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <button
            onClick={() => toggleAnswer(2)}
            className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center"
          >
            How can I get a natural makeup look?
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${openQuestion === 2 ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 2 && (
            <p className="text-gray-700 mt-2 transition-all duration-300 ease-in-out">
              For a natural makeup look, try our lightweight foundation and soft blush for a subtle glow, paired with our nude lip gloss for a fresh finish.
            </p>
          )}
        </div>
        
        {/* FAQ 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <button
            onClick={() => toggleAnswer(3)}
            className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center"
          >
            Do you have products for dry hair?
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${openQuestion === 3 ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 3 && (
            <p className="text-gray-700 mt-2 transition-all duration-300 ease-in-out">
              Yes, our Haircare Collection offers nourishing shampoos and conditioners designed to hydrate and repair dry hair, leaving it soft and shiny.
            </p>
          )}
        </div>
        
        {/* FAQ 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <button
            onClick={() => toggleAnswer(4)}
            className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center"
          >
            What’s the best way to maintain healthy nails?
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${openQuestion === 4 ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 4 && (
            <p className="text-gray-700 mt-2 transition-all duration-300 ease-in-out">
              Our Nail Care Kit includes everything you need to keep your nails healthy, including a strengthening serum, cuticle oil, and a nourishing base coat.
            </p>
          )}
        </div>
        
        {/* FAQ 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <button
            onClick={() => toggleAnswer(5)}
            className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center"
          >
            Do you offer international shipping?
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${openQuestion === 5 ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 5 && (
            <p className="text-gray-700 mt-2 transition-all duration-300 ease-in-out">
              Yes! We offer worldwide shipping, so no matter where you are, you can enjoy Crystal Beauty Clear’s amazing products.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
