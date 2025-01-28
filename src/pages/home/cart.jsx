import { useEffect, useState } from "react"

export default function Cart(){
    const [cart, setCart] = useState([])
    useEffect(
        ()=>{
            setCart(loadCart)
        }
    )
    return (
        <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center" >
            <h1> Cart </h1>
        </div>
    )
}