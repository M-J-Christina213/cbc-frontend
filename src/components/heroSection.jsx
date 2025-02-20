import React from "react";
import valentineoffer from "../assets/images-cbc/valentineoffer.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function HeroSection() {
    const slides = [
        {
            url: valentineoffer,
        },
        {
            url: '/images-cbc/valentineoffer.png',
        },
        {
            url: '/images/valentineoffer.png',
        }
    ];

    return (
        <div className="max-w-[1400px] min-h-screen w-full m-auto relative">
            <div 
                style={{ backgroundImage: `url(${slides[0].url})` }}
                className="w-full h-[500px] bg-center bg-cover bg-no-repeat duration-500">

                </div>
            
            {/* Left Arrow */}
            <div className="absolute top-[50%] left-5 transform -translate-y-1/2 cursor-pointer text-2xl rounded-full bg-black/20 p-2">
                <BsChevronCompactLeft size={30}/>
            </div>
            
            {/* Right Arrow */}
            <div className="absolute top-[50%] right-5 transform -translate-y-1/2 cursor-pointer text-2xl rounded-full bg-black/20 p-2">
                <BsChevronCompactRight size={30}/>
            </div>
        </div>
    );
}
