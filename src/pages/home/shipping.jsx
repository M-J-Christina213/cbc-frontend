import { useLocation, useNavigate } from "react-router-dom";
import CartCard from "../../components/cartCard";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ShippingPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state?.items || [];
    const [total, setTotal] = useState(0);
    const [labeledTotal, setLabelledTotal] = useState(0);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (cart.length === 0) {
            toast.error("No items in the cart");
            navigate("/cart");
            return;
        }

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/quote`, { orderedItems: cart })
            .then((res) => {
                if (res.data.total !== null) {
                    setTotal(res.data.total);
                    setLabelledTotal(res.data.labeledTotal);
                }
            })
            .catch(() => toast.error("Failed to fetch order quote. Please try again!"));
    }, [cart, navigate]);

    function createOrder() {
        if (!name || !address || !phone) {
            toast.error("Please fill in all fields");
            return;
        }
    
        const token = localStorage.getItem("token");
        
        if (!token) {
            // If no token found, prompt the user to sign up
            toast.error("Please sign up to purchase your order");
            navigate("/signup"); // Redirecting user to signup page
            return;
        }
    
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/`, {
            orderedItems: cart,
            name,
            address,
            phone
        }, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => {
                toast.success("Order placed successfully!");
                navigate("/orders");
            })
            .catch((error) => {
                // Check for other errors (like server errors or network issues)
                if (error.response && error.response.status === 401) {
                    toast.error("Please log in as a customer to create orders");
                } else {
                    toast.error("Order creation failed. Please try again!");
                }
                console.log(error.message);
            });
    }
    
    
    

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            <Header />
            <div className="max-w-4xl mx-auto p-6 shadow-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                <h1 className="text-2xl font-bold mb-4">Shipping Details</h1>
                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-2 border w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="p-2 border w-full"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="p-2 border w-full"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <table className="w-full mt-5 border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-primary/50 text-white">
                            <th className="p-2">Image</th>
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Product ID</th>
                            <th className="p-2">Qty</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {cart.map((item) => (
                            <CartCard key={item.productId} productID={item.productId} qty={item.qty} isShippingPage={true} />
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 flex  justify-end">
                    <div className="text-lg font-bold text-right">
                        <p>Total: Rs. {Number(labeledTotal).toFixed(2)}</p>
                        <p>Discount: Rs. {Number(Math.abs(Number(labeledTotal - total).toFixed(2))).toFixed(2)}</p>
                        <p>Grand Total: Rs. {Number(total).toFixed(2)}</p>
                    </div>
                </div>

                <button
                    onClick={createOrder}
                    className="bg-primary border-white border-2 text-white p-3 w-full mt-4 hover:bg-primary/50">
                    Place Order
                </button>
            </div>
            <Footer />
        </div>
    );
}
