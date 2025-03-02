import { FaTrash } from 'react-icons/fa';  
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CartCard(props) {
    const { productID, qty: initialQty, isShippingPage, handleDeleteProduct } = props;

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
            <td className="text-center p-2 w-[180px] break-words">
                {product?.productName}
            </td>
            <td className="text-center p-2">{productID}</td>
            <td className="text-center p-2">
                <input
                    type="number"
                    value={qty}
                    onChange={handleChangeQuantity}
                    className="w-12 text-center border border-gray-300  text-black group-hover:text-black"
                    min="1"
                    disabled={isShippingPage} // Disable input in shipping page
                />
            </td>
            <td className="text-center p-2 whitespace-nowrap">
                LKR. {(product?.lastPrice || 0).toFixed(2)}
            </td>
            <td className="text-center p-2 whitespace-nowrap">
                LKR. {(product?.lastPrice * qty || 0).toFixed(2)}
            </td>
            {/* Conditionally render the "Actions" column only if it's not the shipping page */}
            {!isShippingPage && (
                <td className="text-center p-2">
                    <button
                        onClick={() => handleDeleteProduct(productID)}
                        className="bg-transparent border-none text-red-500 hover:text-red-700 p-1"
                        title="Delete"
                    >
                        <FaTrash className="w-5 h-5" />
                    </button>
                </td>
            )}
        </tr>
    );
}
