import axios from "axios";
import { useEffect, useState } from "react";

export default function CartCard(props) {
    const productID = props.productID;
    const initialQty = props.qty;

    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(initialQty);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            axios
                .get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productID}`)
                .then((response) => {
                    if (response.data != null) {
                        setProduct(response.data);
                        setLoaded(true);
                    } else {
                        deleteItem(productID);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [loaded, productID]);

    const handleChangeQuantity = (event) => {
        const newQty = Math.max(1, parseInt(event.target.value) || 1); // Prevent invalid inputs or 0
        setQty(newQty);
    };

    return (
        <tr className="hover:bg-secondary hover:text-white font-semibold cursor-pointer group">
            {!loaded && <td className="text-center">Loading...</td>}
            <td className="p-2">
                <img src={product?.images[0]} className="w-[90px] h-[90px] mx-auto" alt={product?.productName} />
            </td>
            <td className="text-center p-2">{product?.productName}</td>
            <td className="text-center p-2">{productID}</td>
            <td className="text-center p-2">
                <input
                    type="number"
                    value={qty}
                    onChange={handleChangeQuantity}
                    className="w-12 text-center border border-gray-300 rounded-md text-black group-hover:text-black"
                    min="1"
                />
            </td>
            <td className="text-center p-2">LKR. {(product?.lastPrice || 0).toFixed(2)}</td>
            <td className="text-center p-2">
                LKR. {(product?.lastPrice * qty || 0).toFixed(2)}
            </td>
        </tr>
    );
}
