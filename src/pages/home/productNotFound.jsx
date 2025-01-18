import React from 'react';

export default function ProductNotFound() {
    return (
        <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center bg-gray-50">
            <div
                className="text-center bg-white p-8 rounded-lg shadow-xl max-w-lg w-full"
                style={{
                    backgroundColor: "#f9f9f9",
                    borderRadius: "12px",
                }}
            >
                <h1
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#9338eb" }}
                >
                    Product Not Found
                </h1>
                <p
                    className="text-lg mb-6"
                    style={{ color: "#4b5563" }}
                >
                    We couldn't find the product you're looking for. Please check back later or explore other options.
                </p>
                <button
                    className="py-3 px-6 text-white text-xl rounded-full shadow-lg"
                    style={{
                        backgroundColor: "#9338eb",
                        transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#f9a8d4";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#9338eb";
                    }}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}
