import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../../components/productCard"

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
        <div className="bg-gray-200 w-full h-full overflow-y-scroll">
          {products.map((product) => (
        <ProductCard key={product.productID} product={product} />
           ))}
    </div>

    );
    
}