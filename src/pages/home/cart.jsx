import { useEffect, useState } from "react";
import { loadCart } from "../../utilis/cartFunction";
import CartCard from "../../components/cartCard";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(loadCart());
    }, []); 

    return (
        <div className="w-full h-full overflow-y-scroll flex flex-col items-end">
            <table className="w-full bg-accent">
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
            <button className="bg-primary text-white p-2 rounded-lg w-[300px]"> Checkout </button>
        </div>
    );
}
