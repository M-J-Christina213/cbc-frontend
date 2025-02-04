import { useEffect, useState } from "react";
import { loadCart } from "../../utilis/cartFunction";
import CartCard from "../../components/cartCard";
import axios from "axios";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)
    const [labeledTotal, setLabelledTotal] = useState(0)
    useEffect(() => {
        setCart(loadCart());
        const cartItems = loadCart();
        console.log(cartItems); // Make sure productId exists in each item
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/quote`, {
            orderedItems: cartItems
        })
        .then((res) => {
            console.log("Quote Response:", res.data); 
            setTotal(res.data.total || 0);  
            setLabelledTotal(res.data.labeledTotal || 0); 
        })
        .catch((err) => console.error("Quote API Error:", err));
        
    }, []);

    function onOrderCheckOutClick(){
        const token = localStorage.getItem("token")
        if (token==null){
            return
        }
        //second order to backend
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/`, {
            orderedItems: cart
        },
        {headers: {
            Authorization: "Bearer " + token,
        },
    }
    )
    .then(
            (res) => {
            console.log(res.data);
        //clear cart 
            }
        )
    }

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
            <h1 className="text-3xl font-bold text-primary">
                Total: Rs. {Number(labeledTotal).toFixed(2)}
            </h1>
            <h1 className="text-3xl font-bold text-primary">
                    Total: Rs. {Number(labeledTotal - total).toFixed(2)}
            </h1>
            <h1 className="text-3xl font-bold text-primary">
                    GrandTotal: Rs. {Number(total).toFixed(2)}
            </h1>

            <button onClick={onOrderCheckOutClick} className="bg-primary text-white p-2 rounded-lg w-[300px]"> Checkout </button>
        </div>
    );
}
