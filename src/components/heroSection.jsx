import React, { useState, useEffect } from "react";
import valentineoffer from "../assets/images-cbc/valentineoffer.png";
import makeupSlide from "../assets/images-cbc/makeupSlide.png";
import saleskincare from "../assets/images-cbc/saleskincare.png";
import skincare from "../assets/images-cbc/skincare.png";

import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function HeroSection() {
    const slides = [
        { url: valentineoffer },
        { url: makeupSlide },
        { url: saleskincare },
        { url: skincare },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="max-w-[1400px] min-h-screen w-full m-auto relative group">
            <div 
                style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
                className="w-full h-[500px] bg-center bg-cover bg-no-repeat duration-500"
            ></div>
            
            {/* Left Arrow */}
            <div 
                onClick={prevSlide} 
                className="hidden group-hover:block absolute top-[50%] left-5 transform -translate-y-1/2 cursor-pointer text-2xl rounded-full bg-black/20 p-2"
            >
                <BsChevronCompactLeft size={30}/>
            </div>
            
            {/* Right Arrow */}
            <div 
                onClick={nextSlide} 
                className="hidden group-hover:block absolute top-[50%] right-5 transform -translate-y-1/2 cursor-pointer text-2xl rounded-full bg-black/20 p-2"
            >
                <BsChevronCompactRight size={30}/>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center py-2">
                {slides.map((_, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        onClick={() => setCurrentSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${currentSlide === slideIndex ? 'text-gray-800' : 'text-gray-400'}`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}
