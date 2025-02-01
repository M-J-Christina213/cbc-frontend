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
        <tr >
            <td> <img src={product?.images[0]} className="w-[90px] h-[90px]"></img></td>
            <td> {product?.productName } </td>
            <td> {productID} </td>
            <td> X </td>
            <td> {qty} </td>
        </tr>
            )
}