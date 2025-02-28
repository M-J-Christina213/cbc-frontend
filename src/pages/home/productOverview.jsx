import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";
import ImageSlider from "../../components/imageSlider";
import { addToCart } from "../../utilis/cartFunction";
import toast from "react-hot-toast";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ProductOverview() {
    const params = useParams();
    const productID = params.productID;
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Product ID:", productID);

        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productID}`);
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
    }, [productID]);

    function onAddtoCartClick(){
        addToCart(product.productID, 1)
        toast.success(product.productID + "Added to Cart")
        setCart(loadCart());
    }

    function onBuyNowClick(){
        navigate("/shipping", {
            state: {
                items: [
                    { 
                        productId: product.productID, 
                        qty: 1 
                }]
            }
        });
    }

    return (
        <div className="w-full h-[calc(100vh-100px)] ">
            <Header/>
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
                    <h1 cslasName="text-red-500 text-xl">Something went wrong. Please try again later.</h1>
                </div>
            )}
            {status === "found" && (
            
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-50">
                     <h1 className="text-3xl font-bold lg:hidden text-gray-800 mb-4">{product.productName}</h1>
                     <p className="text-xl text-gray-600 lg:hidden">
                      {product.price > product.lastPrice && (
                        <span className="line-through text-red-500">${product.price}</span>
                      )}
                      <span> ${"LKR." + product.lastPrice} </span>
                    </p>
                  {/* Image Section */}
                  <div className="w-[100%] lg:w-[35%] h-full">
                    
                      <ImageSlider
                        images={product.images}
                        style={{ height: '100%', maxHeight: '400px', objectFit: 'contain' }}
                      />
                    
                  </div>
              
                  {/* Product Details Section */}
                  <div className="w-full md:w-[65%] h-full p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4 hidden lg:block">{product.productName}</h1>
                    <h1 className="text-xl font-bold text-gray-600 mb-4">{product.altNames.join(" | ")}</h1>
                    <p className="text-xl text-gray-600 hidden lg:block">
                      {product.price > product.lastPrice && (
                        <span className="line-through text-red-500">${product.price}</span>
                      )}
                      <span> ${"LKR." + product.lastPrice} </span>
                    </p>
                    <p className="text-base text-gray-600 mb-6">{product.description}</p>
                    <button onClick={onAddtoCartClick} className="bg-primary text-white p-2 "> Add to Cart </button>
                    <button onClick={onBuyNowClick} className="text-primary border-primary border mx-1 p-2"> Buy now </button>
                  </div>
                </div>
             
              
              
            )}
            <Footer/>
        </div>
    );
}
