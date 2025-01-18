import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductNotFound from "./productNotFound";

export default function ProductOverview(){

    const params = useParams();
    const productId = params.productID;
    const [product, setProduct] = useState(null)
     const [status, setStatus] = useState("loading")

    useEffect(() => {
        console.log(productId);
        axios.get(import.meta.env.VITE_BACKEND_URL+ "/api/products/"+ productId)
            .then((response) => {
                console.log(response.data);
              
                //if null
                if(response.data==null){
                    setStatus("not found")
                }

                //if productfound
                if (response.data != null){
                    setProduct(response.data)
                    setStatus("found")
                }

            })
            
    }, []);

    return (
        <div className="w-full h-[calc (100vh-100px)]" >
            {
                status == "loading" && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-2 border-gray-500 border-b-accent">
                        </div>
                    </div>
                )
            }
            {
                status == "not found"&& (
                    <ProductNotFound/>
                )
            }
            {
                status =="found" && (
                    
                )
            }
        </div>
    )
}