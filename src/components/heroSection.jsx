import React, { useState } from "react";
import valentineoffer from "../assets/images-cbc/valentineoffer.png";
import makeupSlide from "../assets/images-cbc/makeupSlide.png";
import saleskincare from "../assets/images-cbc/saleskincare.png";
import skincare from "../assets/images-cbc/skincare.png";

import { RxDotFilled } from "react-icons/rx";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function HeroSection() {
    const slides = [
        {
            url: valentineoffer,
        },
        {
            url: makeupSlide,
        },
        {
            url: saleskincare,
        },
        {
            url: skincare,
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newindex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newindex);
    }
    
    const nextSlide = () => {
       const isLastSlide = currentSlide === slides.length - 1;
       const newindex = isLastSlide ? 0 : currentSlide + 1;
         setCurrentSlide(newindex);
    }


    return (
        <div className="max-w-[1400px] min-h-screen w-full m-auto relative group">
            <div 
                style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
                className="w-full h-[500px] bg-center bg-cover bg-no-repeat duration-500">

                </div>
            
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] left-5 transform -translate-y-1/2 cursor-pointer text-2xl rounded-full bg-black/20 p-2">
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] right-5 transform -translate-y-1/2 cursor-pointer text-2xl rounded-full bg-black/20 p-2">
                <BsChevronCompactRight  onClick={nextSlide} size={30}/>
            </div>

            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} 
                    onClick={() => setCurrentSlide(slideIndex)}
                    className="text-2xl cursor-pointer">
                        <RxDotFilled/>
                    </div>
                ))}
            </div>
        </div>
    );
}
