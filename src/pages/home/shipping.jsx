import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom"
import CartCard from "../../components/cartCard";

export default function ShippingPage(){
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state.items

    if (cart==null){
        toast.error("No items received")
        navigate("/cart")
    }
    return(
    <div className="w-full h-full bg-red-900">
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
                            Discount: Rs. {Number(labeledTotal - total).toFixed(2)}
                    </h1>
                    <h1 className="text-3xl font-bold text-primary">
                            GrandTotal: Rs. {Number(total).toFixed(2)}
                    </h1>
        
                    <button onClick={onOrderCheckOutClick} className="bg-primary text-white p-2 rounded-lg w-[300px]"> Checkout </button>
                </div>
    </div>

    
    )
}