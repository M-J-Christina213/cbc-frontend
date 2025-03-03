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
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-full w-full min-h-screen flex justify-center items-center relative group">
            <div 
                style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
                className="w-full h-[730px] bg-center bg-cover bg-no-repeat transition-all duration-500"
            ></div>
            
            {/* Left Arrow */}
            <button 
                onClick={prevSlide} 
                className="hidden group-hover:flex absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-3xl rounded-full bg-black/30 text-white p-2"
            >
                <BsChevronCompactLeft size={30}/>
            </button>
            
            {/* Right Arrow */}
            <button 
                onClick={nextSlide} 
                className="hidden group-hover:flex absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-3xl rounded-full bg-black/30 text-white p-2"
            >
                <BsChevronCompactRight size={30}/>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 flex justify-center w-full gap-2">
                {slides.map((_, slideIndex) => (
                    <button 
                        key={slideIndex} 
                        onClick={() => setCurrentSlide(slideIndex)}
                        className={`text-2xl cursor-pointer transition-all duration-300 ${currentSlide === slideIndex ? 'text-gray-900' : 'text-gray-500'}`}
                    >
                        <RxDotFilled />
                    </button>
                ))}
            </div>
        </div>
    );
}
