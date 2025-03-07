import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utilis/mediaUpload";

export default function AddProductForm() {

    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [imgUrls, setImageUrls] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [price, setPrice] = useState("");
    const [lastPrice, setLastPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    async function handleSubmit() {
        if (!imageFiles || imageFiles.length === 0) {
            console.error("No files selected for upload");
            toast.error("Please upload at least one image");
            return;
        }
    
        // Validate image files for correct file type (JPG or PNG)
        const validImageTypes = ["image/jpeg", "image/png"];
        for (let i = 0; i < imageFiles.length; i++) {
            if (!validImageTypes.includes(imageFiles[i].type)) {
                console.error("Invalid file type:", imageFiles[i].type);
                toast.error("Please select a jpg or png file");
                return; // Stop the process if an invalid file is found
            }
        }
    
        const promisesArray = [];
    
        // Create upload promises
        for (let i = 0; i < imageFiles.length; i++) {
            promisesArray[i] = uploadMediaToSupabase(imageFiles[i]);
        }
    
        try {
            const imgUrls = await Promise.all(promisesArray);
            console.log("Upload success, URLs:", imgUrls);
    
            // Log values of category and subcategory for debugging
            console.log("Category:", category);
            console.log("Subcategory:", subcategory);
    
            // Ensure category and subcategory are provided
            if (!category || !subcategory) {
                toast.error("Category and Subcategory are required");
                return;
            }
    
            const altNames = alternativeNames.split(",").map(name => name.trim()).filter(name => name !== "");
            console.log("Alternative names: ", altNames);
    
            // Create the product object
            const product = {
                productID: productId,
                productName: productName,
                category: category, // Ensure category is included
                subcategory: subcategory, // Ensure subcategory is included
                altNames: altNames,
                images: imgUrls,
                price: price,
                lastPrice: lastPrice,
                stock: stock,
                description: description,
            };
    
            const token = localStorage.getItem("token");
    
            // API call to add the product
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, product, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
    
            navigate("/admin/products");
            toast.success("Product Added Successfully");
        } catch (err) {
            console.error("Error during product creation:", err);
            toast.error("Failed to add product");
        }
        
        
    }
    return (
        <div className="flex-1 w-full p-8 m-10 bg-white rounded-lg shadow-lg" >
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
                Add New Product
            </h2>
            <div className="flex flex-col gap-4 w-1/2 mx-auto">
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Product ID</label>
                    <input type="text" placeholder="Enter Product ID" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
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
                    <label className="font-semibold text-gray-700">Category</label>
                    <input type="text" placeholder="Enter Category" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={category}
                    onChange={(e)=>{setCategory(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Subcategory</label>
                    <input type="text" placeholder="Enter Subcategory" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={subcategory}
                    onChange={(e)=>{setSubcategory(e.target.value)}}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Alternative Names</label>
                    <input type="text" placeholder="Enter Alternative Names" className="p-2 border rounded-md focus:ring-2 focus:ring-pink-600" 
                    value ={alternativeNames}
                    onChange={(e)=>{setAlternativeNames(e.target.value)}}
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
