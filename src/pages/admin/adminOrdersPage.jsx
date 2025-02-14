import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [status, setStatus] = useState("");
    const [notes, setNotes] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You need to login first");
            navigate("/login");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            if (decoded.exp && decoded.exp < Date.now() / 1000) {
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
        .then((res) => setOrders(res.data))
        .catch(() => {
            setError("Failed to fetch orders. Please try again!");
            toast.error("Failed to fetch orders. Please try again!");
        })
        .finally(() => setLoading(false));
    }, []);

    const handleUpdateOrder = async (orderId, status, notes) => {
        if (!status) {
            toast.error("Please select a status.");
            return;
        }
    
        try {
            const token = localStorage.getItem("token");
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/orders/${orderId}`,
                { status, notes },
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            toast.success("Order updated successfully");
    
            // Update orders list
            setOrders(prevOrders =>
                prevOrders.map(o => (o.orderId === orderId ? response.data.order : o))
            );
    
            setSelectedOrder(null);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update order.");
        }
    };
    

    return (
        <div className="w-full h-full p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center"> Customer Orders</h2>
            {loading ? (
                <p className="text-center text-gray-500">Loading orders...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : orders.length === 0 ? (
                <p className="text-center text-gray-500">No orders found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full bg-white border-collapse border-2 border-gray-200 shadow-lg">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="border px-4 py-2">Order ID</th>
                                <th className="border px-4 py-2">Status</th>
                                <th className="border px-4 py-2">Date</th>
                                <th className="border px-4 py-2">Total</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id} className="text-center hover:bg-gray-100">
                                    <td className="border px-4 py-2">{order.orderId}</td>
                                    <td className="border px-4 py-2">
                                        <span className={`px-2 py-1 rounded text-white ${
                                            order.status === "delivered" ? "bg-green-500" :
                                            order.status === "shipped" ? "bg-blue-500" : "bg-yellow-500"
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="border px-4 py-2">{new Date(order.date).toLocaleDateString()}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        Rs {order.orderedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button onClick={() => { setSelectedOrder(order); setIsUpdating(false); }} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">View</button>
                                        <button onClick={() => { setSelectedOrder(order);
                                                setStatus(order.status);
                                                setNotes(order.notes || "");
                                                setIsUpdating(true);  }} className="bg-green-500 text-white px-2 py-1 rounded">Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* View Order Modal */}
            {selectedOrder && !isUpdating && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[450px] shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Order Details</h3>
            <div className="mb-4">
              <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
              <p><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
              <p><strong>Name:</strong> {selectedOrder.name}</p>
              <p><strong>Address:</strong> {selectedOrder.address}</p>
              <p><strong>Phone:</strong> {selectedOrder.phone}</p>
              <p><strong>Notes:</strong> {selectedOrder.notes || "No notes available"}</p>
            </div>
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
            <h3 className="text-lg font-semibold mt-4">Total: Rs{selectedOrder.orderedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setSelectedOrder(null)}>Close</button>
          </div>
        </div>
      )}


            {/* Update Order Modal */}
            {selectedOrder && isUpdating && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[450px] shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Update Order</h3>
            <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
            <div className="mt-4">
              <label htmlFor="status" className="block text-sm font-semibold">Update Status:</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 px-2 py-1 rounded"
              >
                <option value="pending">Pending</option>
                <option value="delivered">Delivered</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="notes" className="block text-sm font-semibold">Admin Notes:</label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="4"
                className="w-full border border-gray-300 px-2 py-1 rounded"
              />
            </div>
            <button 
              onClick={() => handleUpdateOrder(selectedOrder.orderId, status, notes)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Update Order
            </button>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setSelectedOrder(null)}>Cancel</button>
          </div>
        </div>
      )}
        </div>
    );
}
