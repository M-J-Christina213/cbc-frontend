import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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


            })
            
    }, []);

    return (
        <div className="w-full h-[calc (100vh-100px)]" >
            {
                status == "loading" && <h1> Loading.. </h1>
            }
        </div>
    )
}