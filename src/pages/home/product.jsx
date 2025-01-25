import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function ProductPage(){
    const [products,setProducts] = useState([])
    const [loadingStatus, setLoadingStatus] = useState('loading')
    
    useEffect (
        ()=>{
            if(loadingStatus==="loading"){
                axios.get(import.meta.env.VITE_BACKEND_URL + '/api/products')
                .then(
                    (res)=>{
                    console.log(res.data)
                    setProducts(res.data)
                    setLoadingStatus('loaded')
                    }
    
                ).catch (
                    (err)=>toast.error("Failed to fetch products")
                  )
                }
                     
                
            }
        
            
        

    ,[])
    return (
        <div className="w-full h-full bg-blue-300 overflow-y-scroll">
            {products.map(
                (product)=>
                    <div key={product.productID} className="flex flex-col items-center">
                        <img src={product.image} alt={product.name} className="h-40 w-40 object-cover"/>
                        <h1>{product.productName}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p> 
                    </div>    
            )
            }
        </div>
    );
    
}