import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function HeroSection() {
    const slides = [
        {
            url: '/images-cbc/valentineoffer.png',
        },
        {
            url: '/images/valentineoffer.png',
        },
        {
            url: '/images/valentineoffer.png',
        }
    ];

    return (
        <div className="max-w-[1400px] min-h-screen w-full m-auto py-16 px-4 relative">
            <h1>Hero section</h1>
            <div 
                style={{ backgroundImage: `url(${slides[0].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            >
            </div>
        </div>
    );
}
