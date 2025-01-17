import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utilis/mediaUpload";

export default function EditProductForm() {
const location = useLocation()
const navigate = useNavigate();

const product = location.state.product

// Check if product is null and navigate early
if (product == null) {
    navigate("/admin/products");
    return null; // Ensure the component doesn't render further
}

// Safely process altNames
const altNames = product.altNames ? product.altNames.join(",") : "";

// Initialize state
    const [productId, setProductId] = useState(product.productId);
    const [productName, setProductName] = useState(product.productName);
    const [alternativeNames, setAlernativeNames] = useState(altNames);
    const [imageFiles, setImageFiles] = useState([]);
    const [price, setPrice] = useState(product.price);
    const [lastPrice, setLastPrice] = useState(product.lastPrice);
    const [stock, setStock] = useState(product.stock);
    const [description, setDescription] = useState(product.description);
    
    

    async function handleSubmit(){
        if (!imageFiles || imageFiles.length === 0) {
            console.error("No files selected for upload");
            toast.error("Please upload at least one image");
            return;
        }

        const altNames = alternativeNames.split(",")
        
        const promisesArray = []

        // Create upload promises
        for (let i = 0; i < imageFiles.length; i++) {
            promisesArray[i] = uploadMediaToSupabase(imageFiles[i])
        }

       const imgUrls = await Promise.all(promisesArray)
    
       console.log(imgUrls)
       
    try {
        const values = await Promise.all(promisesArray); // Resolves with an array of URLs
        console.log("Upload success, URLs:", values);
        setImageUrls(values); // Assign the URLs to imgUrls

        // Create the product object
        const product = {
            productID: productId,
            productName: productName,
            altNames: altNames,
            images: values, // Use the uploaded URLs here
            price: price,
            lastPrice: lastPrice,
            stock: stock,
            description: description,
        };

        const token = localStorage.getItem("token");

        // API call to add the product
        await axios.post("http://localhost:5000/api/products", product, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });

        navigate("/admin/products");
        toast.success("Product Added Successfully");
    } catch(err) {
        console.error("Error during product creation:", err.response ? err.response.data : err.message);
        toast.error("Failed to add product");
    }

        
    }
    return (
        <div className="flex-1 w-full p-8 m-10 bg-white rounded-lg shadow-lg" >
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
                Edit Product form
            </h2>
            <div className="flex flex-col gap-4 w-1/2 mx-auto">
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Product ID</label>
                    <input disabled type="text" placeholder="Enter Product ID" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={productId}
                    onChange={(e)=>{setProductId(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Product Name</label>
                    <input type="text" placeholder="Enter Product Name" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={productName}
                    onChange={(e)=>{setProductName(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Alternative Names</label>
                    <input type="text" placeholder="Enter Alternative Names" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={alternativeNames}
                    onChange={(e)=>{setAlernativeNames(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Image URLs</label>
                    <input type="file" placeholder="Enter Image URLs" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    
                    onChange={(e)=>{
                        setImageFiles(e.target.files)
                    }}
                    multiple //To select multiple files at once
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Price</label>
                    <input type="number" placeholder="Enter Price" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={price}
                    onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Last Price</label>
                    <input type="text" placeholder="Enter Last Price" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={lastPrice}
                    onChange={(e)=>{setLastPrice(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Stock</label>
                    <input type="text" placeholder="Enter Stock" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={stock}
                    onChange={(e)=>{setStock(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Description</label>
                    <textarea placeholder="Enter Product Description" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600"
                    value ={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                    ></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={handleSubmit}>
                    Add New Product
                </button>
            </div>
        </div>
        
    );
}
