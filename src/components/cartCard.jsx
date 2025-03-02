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
                        setLoaded('loaded');
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
        <tr className="hover:bg-secondary hover:text-white font-semibold cursor-pointer">
            {
                !loaded && <td className="text-center">Loading...</td>
            }
            <td className="">
                <img src={product?.images[0]} className="w-[90px] h-[90px] mx-auto" />
            </td>
            <td className="text-center"> {product?.productName} </td>
            <td className="text-center"> {productID} </td>
            <td className="text-center">
                <input
                    type="number"
                    value={qty}
                    onChange={handleChangeQuantity}
                    className="w-12 text-center border border-gray-300 rounded-md"
                    min="1"
                />
            </td>
            <td className="text-center"> LKR. {(product?.lastPrice || 0).toFixed(2)} </td>
            <td className="text-center">
                LKR. {(product?.lastPrice * qty || 0).toFixed(2)}
            </td>
        </tr>
    );
}
