import { useEffect, useState } from "react";
import { loadCart } from "../../utilis/cartFunction";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(loadCart());
    }, []); 

    return (
        <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center">
            {cart.map((item) => (
                <span key={item.productId}> 
                    {item.productId} X {item.qty} 
                </span>
            ))}
        </div>
    );
}
