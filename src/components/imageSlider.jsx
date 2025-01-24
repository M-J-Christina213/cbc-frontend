import { useState } from "react";

export default function ImageSlider(props) {
    const images = props.images || []; // Ensure images is an array or an empty fallback
    const [activeImage, setActiveImage] = useState(0);
    return (
        <div className="w-full aspect-square flex items-center flex-col relative">
            {/* Main Image */}
            <img 
                src={images[activeImage]} 
                className="w-full aspect-square object-cover" 
                alt="Main Slider Image"
            />
            {/* Blur effect */}
            <div className="w-full h-[100px] absolute bottom-0 backdrop-blur-lg">
                {/* Thumbnails */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    {images.length ? (
                        images.map((image, index) => (
                            <img onClick={()=> setActiveImage(index)}
                                key={index}
                                src={image}
                                className="w-16 h-16 cursor-pointer object-cover mx-2"
                            />
                        ))
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
            </div>
        </div>
    );
}
