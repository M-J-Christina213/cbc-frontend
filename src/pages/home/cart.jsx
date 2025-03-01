import { useEffect, useState } from "react";
import { loadCart, clearCart } from "../../utilis/cartFunction";
import CartCard from "../../components/cartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [labeledTotal, setLabelledTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setCart(loadCart());
        const cartItems = loadCart();
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/quote`, {
            orderedItems: cartItems
        })
        .then((res) => {
            if (res.data.total !== null) {
                setTotal(res.data.total);
                setLabelledTotal(res.data.labeledTotal);
            }
        })
        .catch((err) => console.error("Quote API Error:", err));
    }, []);

    function onOrderCheckOutClick() {
        navigate("/shipping", { state: { items: loadCart() } });
    }

    function handleClearCart() {
        clearCart();
        setCart([]);
        setTotal(0);
        setLabelledTotal(0);
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-white text-primary">
            <Header />
            <div className="w-3/4 bg-white shadow-lg p-6 mt-8 border-2 border-pink-500">
                <h1 className="text-4xl font-bold text-center text-primary">Shopping Cart</h1>
                <table className="w-full mt-4 border border-purple-300 overflow-hidden">
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th className="p-3">Image</th>
                            <th className="p-3">Product Name</th>
                            <th className="p-3">Product ID</th>
                            <th className="p-3">Qty</th>
                            <th className="p-3 text-right">Price</th>
                            <th className="p-3 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <CartCard key={item.productId} productID={item.productId} qty={item.qty} />
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-6">
                    <div className="text-xl font-semibold">
                        <p>Total: <span className="text-primary">Rs. {Number(labeledTotal).toFixed(2)}</span></p>
                        <p>Discount: <span className="text-pink-500">Rs. {Number(labeledTotal - total).toFixed(2)}</span></p>
                        <p>Grand Total: <span className="text-purple-700 font-bold">Rs. {Number(total).toFixed(2)}</span></p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={handleClearCart} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 font-semibold">Clear Cart</button>
                        <button onClick={onOrderCheckOutClick} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 font-semibold">Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
