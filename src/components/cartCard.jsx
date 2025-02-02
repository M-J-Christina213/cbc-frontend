import axios from "axios"
import { useEffect, useState } from "react"

export default function CartCard(props){

    const productID = props.productID
    const qty = props.qty

    const [product, setProduct] = useState(null)

    const[loaded, setLoaded] = useState(false)

    useEffect(
        ()=>{
            if(!loaded){
                axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productID}`)
                .then(
                    (response)=>{

                        if (response.data!=null){
                            setProduct(response.data)
                            console.log(response.data)
                            setLoaded('loaded')
                        }else{
                            deleteItem(productID)
                        }
                        

                    
                    }
                ).catch(
                    (error)=>{
                        console.log(error)
                    }
                )
            }
        } ,[ ]
    )
    return (
        <tr className="hover:bg-secondary hover:text-white font-semibold cursor-pointer">
            <td className=""> <img src={product?.images[0]} className="w-[90px] h-[90px] mx-auto"></img></td>
            <td className="text-center"> {product?.productName } </td>
            <td className="text-center"> {productID} </td>
            <td className="text-center"> {qty} </td>
            <td className="text-center"> LKR. {(product?.lastPrice || 0).toFixed(2)} </td>
            <td className="text-center"> LKR. {(product?.lastPrice * qty || 0).toFixed(2)} </td>
        </tr>
            ) 
}

