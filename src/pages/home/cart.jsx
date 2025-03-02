import { useEffect, useState } from "react";
import { loadCart, clearCart, removeFromCart } from "../../utilis/cartFunction"; // Make sure `removeFromCart` is implemented
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

    const handleDeleteProduct = (productId) => {
        removeFromCart(productId); // This function should remove the item from the cart in local storage
        setCart(loadCart()); // Update cart state after deletion
    };

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
        <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-primary">
            <Header />
            <div className="w-3/4 bg-white shadow-lg p-6 mt-8 border-2 border-pink-500">
                <h1 className="text-4xl font-bold text-center text-primary">Shopping Cart</h1>
                <table className="w-full mt-4 bg-white border border-purple-300 overflow-hidden">
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th className="p-3">Image</th>
                            <th className="p-3">Product Name</th>
                            <th className="p-3">Product ID</th>
                            <th className="p-3">Qty</th>
                            <th className="p-3 text-right">Price</th>
                            <th className="p-3 text-right">Total</th>
                            <th className="p-3">Action</th> {/* New column for the delete button */}
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.productId}>
                                <td className="p-3">
                                    <img src={item.image} alt={item.productName} className="w-16 h-16 object-cover" />
                                </td>
                                <td className="p-3">{item.productName}</td>
                                <td className="p-3">{item.productId}</td>
                                <td className="p-3">{item.qty}</td>
                                <td className="p-3 text-right">Rs. {item.price}</td>
                                <td className="p-3 text-right">Rs. {item.qty * item.price}</td>
                                <td className="p-3 text-center">
                                    <button 
                                        onClick={() => handleDeleteProduct(item.productId)} 
                                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center items-center mt-6">
                    <div className="text-xl font-semibold text-center">
                        <p>Total: <span className="text-primary">Rs. {Number(labeledTotal).toFixed(2)}</span></p>
                        <p>Discount: <span className="text-pink-500">Rs. {Number(labeledTotal - total).toFixed(2)}</span></p>
                        <p>Grand Total: <span className="text-purple-700 font-bold">Rs. {Number(total).toFixed(2)}</span></p>
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={handleClearCart} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 font-semibold">Clear Cart</button>
                    <button onClick={onOrderCheckOutClick} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 font-semibold">Checkout</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
