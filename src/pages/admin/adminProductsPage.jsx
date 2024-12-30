import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AdminProductsPage(){

    const [products, setProducts] = useState([
        {
            "productID": "B10001",
            "productName": "Glow Radiance Serum",
            "altName": ["Radiance Serum", "Glow Serum", "Brightening Serum"],
            "images": [
              "https://example.com/images/glow-serum-front.jpg",
              "https://example.com/images/glow-serum-back.jpg"
            ],
            "price": 29.99,
            "lastPrice": 39.99,
            "stock": 200,
            "description": "A luxurious serum that brightens and hydrates the skin, leaving it with a glowing finish."
          }
    ])

    useEffect(
        ()=>{
            axios.get("http://localhost:5000/api/products")
           .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
            console.log(

                {
                    discountTitle : "Summer Sale",
                    products : products[0]
                }
            )
            })
        },[]
    )
   
    return(
        
        <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Welcome to Product Management section</h2>
        
        <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="bg-purple-100 text-purple-700 font-semibold">
          <th className="p-3 text-left">Product ID</th>
          <th className="p-3 text-left">Product Name</th>
          <th className="p-3 text-left">Price</th>
          <th className="p-3 text-left">Last Price</th>
          <th className="p-3 text-left">Stock</th>
          <th className="p-3 text-left">Description</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr
            key={index}
            className={`border-b ${
              index % 2 === 0 ? "bg-purple-50" : "bg-white"
            } hover:bg-purple-100`}
          >
            <td className="p-3">{product.productID}</td>
            <td className="p-3">{product.productName}</td>
            <td className="p-3">{product.price}</td>
            <td className="p-3">{product.lastPrice}</td>
            <td className="p-3">{product.stock}</td>
            <td className="p-3">{product.description}</td>
            <td className="p-3 flex gap-2">
              <button
                className="text-purple-600 hover:text-purple-800"
                title="Edit Product"
              >
                <FaPencilAlt />
              </button>
              <button
                className="text-red-600 hover:text-red-800"
                title="Delete Product"
              >
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
 

        </div>

        <div className="mt-6">
        <Link 
            to="/admin/products/addProduct" 
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 items-center justify-center gap-2"
        >
            <span className="text-lg">+</span> Add New Product
        </Link>
        </div>

</div>
    

    
    
      
                )
            }