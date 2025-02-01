import { useEffect, useState } from "react";
import { loadCart } from "../../utilis/cartFunction";
import CartCard from "../../components/cartCard";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(loadCart());
    }, []); 

    return (
        <div className="w-full h-full overflow-y-scroll flex flex-col items-center">
            <table className="w-full">
                <thead>
                    <tr>
                        <th> Image </th>
                        <th> Product Name </th>
                        <th> Product ID</th>
                        <th> Qty </th>
                        <th> Price </th>
                        <th> Total </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <CartCard key={item.productId} productID={item.productId} qty={item.qty} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
