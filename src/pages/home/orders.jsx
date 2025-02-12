import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function MyOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You need to login first");
            setLoading(false);
            return;
        }

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders/`, {
            headers: { Authorization: "Bearer " + token },
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
                    <table className="w-full border-collapse border border-gray-200 shadow-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-200 px-4 py-2">Order ID</th>
                                <th className="border border-gray-200 px-4 py-2">Name</th>
                                <th className="border border-gray-200 px-4 py-2">Address</th>
                                <th className="border border-gray-200 px-4 py-2">Phone</th>
                                <th className="border border-gray-200 px-4 py-2">Total</th>
                                <th className="border border-gray-200 px-4 py-2">Status</th>
                                <th className="border border-gray-200 px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id} className="text-center">
                                    <td className="border border-gray-200 px-4 py-2">{order.orderId}</td>
                                    <td className="border border-gray-200 px-4 py-2">{order.name}</td>
                                    <td className="border border-gray-200 px-4 py-2">{order.address}</td>
                                    <td className="border border-gray-200 px-4 py-2">{order.phone}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        ${order.orderedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                                    </td>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
