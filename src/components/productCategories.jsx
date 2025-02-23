import React from "react";
import makeup from "../assets/images-cbc/categoryMakeup.png";
import skincare from "../assets/images-cbc/categorySkincare.png";
import haircare from "../assets/images-cbc/categoryHaircare.png";
import nails from "../assets/images-cbc/categoryNails.png";
import BodyAndBath from "../assets/images-cbc/categoryBodyAndBath.png";
import { FaStar } from "react-icons/fa";



export default function ProductCategories() {
    const categories = [
        { id: 1, name: "Makeup", img: makeup, title:"Category Makeup", rating: 5, author:"white", aosDelay: 0},
        { id: 2, name: "Skincare", img: skincare, title:"Category Skincare", rating: 4.5, author:"red", aosDelay: 0},
        { id: 3, name: "Haircare", img: haircare, title:"Category Haircare", rating: 4.7, author:"brown", aosDelay: 0},
        { id: 4, name: "Nails" , img: nails, title:"Category Nails", rating: 4, author:"yellow", aosDelay: 0},
        { id: 5, name: "Bath & Body", img: BodyAndBath, title:"Category Bath and Body", rating: 4.2, author:"white", aosDelay: 0 }
    ];

    return (
        <div className="mt-14 mb-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mx-auto mb-10 max-w-[600px]">
                    <p className="text-sm text-primary">Top Selling Product Categories</p>
                    <h1 className="text-3xl font-bold">Products</h1>
                    <p className="text-xs text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* Card Section */}
                        {categories.map((data) => (
                            <div
                            
                                key={data.id}  
                                className="space-y-3 "    >
                               <img src={data.img} alt=""
                               className="h-[250px] w-[200px] object-cover rounded-md"/>
                               <div>
                                <h3 className="font-semibold"> {data.title} </h3>
                                <p className="text-sm text-gray-600"> {data.color} </p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400"/>
                                    <span> {data.rating} </span>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
