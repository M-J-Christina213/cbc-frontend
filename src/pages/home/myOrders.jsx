import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { Dialog } from "@headlessui/react";

export default function MyOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You need to login first");
            navigate("/login");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decoded.exp && decoded.exp < currentTime) {
                toast.error("Session expired, please log in again.");
                localStorage.removeItem("token");
                navigate("/login");
                return;
            }
        } catch (error) {
            toast.error("Invalid session. Please log in again.");
            localStorage.removeItem("token");
            navigate("/login");
            return;
        }

        setLoading(true);
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders/`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            setOrders(res.data);
        })
        .catch(() => {
            setError("Failed to fetch orders. Please try again!");
            toast.error("Failed to fetch orders. Please try again!");
        })
        .finally(() => setLoading(false));
    }, []);

    return (
        <div className="w-full h-full p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">My Orders</h2>
            
            {loading ? (
                <p className="text-center text-gray-500">Loading orders...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : orders.length === 0 ? (
                <p className="text-center text-gray-500">No orders found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full bg-accent border-collapse border-2 border-gray-200 shadow-lg">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="border border-gray-200 px-4 py-2">Order ID</th>
                                <th className="border border-gray-200 px-4 py-2">Status</th>
                                <th className="border border-gray-200 px-4 py-2">Date</th>
                                <th className="border border-gray-200 px-4 py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr 
                                    key={order._id} 
                                    className="text-center cursor-pointer hover:bg-gray-100" 
                                    onClick={() => setSelectedOrder(order)}
                                >
                                    <td className="border border-gray-200 px-4 py-2">{order.orderId}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        <span className={`px-2 py-1 rounded text-white ${
                                            order.status === "delivered" ? "bg-green-500" :
                                            order.status === "shipped" ? "bg-blue-500" :
                                            "bg-yellow-500"
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="border border-gray-200 px-4 py-2">{new Date(order.date).toLocaleDateString()}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        Rs{order.orderedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal for Order Details */}
            {selectedOrder && (
                <Dialog open={true} onClose={() => setSelectedOrder(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-[450px] shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Order Details</h3>
                        
                        {/* Order Information */}
                        <div className="mb-4">
                            <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
                            <p><strong>Status:</strong> {selectedOrder.status}</p>
                            <p><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
                            <p><strong>Name:</strong> {selectedOrder.name}</p>
                            <p><strong>Address:</strong> {selectedOrder.address}</p>
                            <p><strong>Phone:</strong> {selectedOrder.phone}</p>
                            <p><strong>Notes:</strong> {selectedOrder.notes || "No notes available"}</p>
                        </div>

                        {/* Ordered Items Table */}
                        <h4 className="text-lg font-semibold mt-4">Ordered Items</h4>
                        <div className="overflow-x-auto mt-2">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200 text-black">
                                        <th className="border border-gray-300 px-2 py-1">Image</th>
                                        <th className="border border-gray-300 px-2 py-1">Product</th>
                                        <th className="border border-gray-300 px-2 py-1">Price</th>
                                        <th className="border border-gray-300 px-2 py-1">Qty</th>
                                        <th className="border border-gray-300 px-2 py-1">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedOrder.orderedItems.map((item, index) => (
                                        <tr key={index} className="text-center">
                                            <td className="border border-gray-300 px-2 py-1">
                                                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                            </td>
                                            <td className="border border-gray-300 px-2 py-1">{item.name}</td>
                                            <td className="border border-gray-300 px-2 py-1">Rs{item.price.toFixed(2)}</td>
                                            <td className="border border-gray-300 px-2 py-1">{item.quantity}</td>
                                            <td className="border border-gray-300 px-2 py-1">Rs{(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Total Amount */}
                        <h3 className="text-lg font-semibold mt-4">Total: Rs{selectedOrder.orderedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>

                        {/* Close Button */}
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setSelectedOrder(null)}>Close</button>
                    </div>
                </Dialog>
            )}
        </div>
    );
}
