import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";

export default function ProductOverview() {
    const params = useParams();
    const productId = params.productID;
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        console.log("Product ID:", productId);

        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`);
                setProduct(response.data);
                setStatus("found");
            } catch (error) {
                if (error.response?.status === 404) {
                    setStatus("not_found");
                } else {
                    setStatus("error");
                }
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div className="w-full h-[calc(100vh-100px)]">
            {status === "loading" && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500 border-b-accent">
                    </div>
                </div>
            )}
            {status === "not_found" && (
                <ProductNotFound/>
            )}
            {status === "error" && (
                <div className="flex justify-center items-center h-full">
                    <h1 className="text-red-500 text-xl">Something went wrong. Please try again later.</h1>
                </div>
            )}
            {status === "found" && (
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Product Details</h1>
                    <p><strong>ID:</strong> {product.productID}</p>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                </div>
            )}
        </div>
    );
}
