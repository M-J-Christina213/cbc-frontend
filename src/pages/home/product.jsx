import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function ProductPage(){
    const [products,setProducts] = useState([])
    const [loadingStatus, setLoadingStatus] = useState([])
    
    useEffect (
        ()=>{
            if(loadingStatus==="loading"){
                axios.get(import.meta.env.VITE_API_URL + '/api/products')
                .then(
                    (res)=>console.log(res.data)
    
                ).catch (
                    (err)=>toast.error("Failed to fetch products")
                  )
                }
                     
                
            }
        
            
        

    ,[])
    return(
        <div>
            <h1> Product page </h1>
        </div>
    )
}