import { useEffect, useState } from "react";
import { loadCart } from "../../utilis/cartFunction";
import CartCard from "../../components/cartCard";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(loadCart());
    }, []); 

    return (
        <div className="w-full h-full overflow-y-scroll flex flex-col  items-center">
            {
             cart.map(
                (item) => {
                    return(
                        <CartCard key={item.productId} productID={item.productId} qty={item.qty} />
                    )
                }
              
            )}
        </div>
    );
}
