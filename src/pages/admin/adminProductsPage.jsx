import axios from 'axios';
import { useState } from 'react';
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

   getProducts()
    return(
        
        <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Welcome to Product Management section</h2>



        
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-purple-100 text-purple-700">
                <th className="p-3 text-left">Product Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Hydra Luxe Moisturizer</td>
                <td className="p-3">$240.99</td>
                <td className="p-3">100</td>
                <td className="p-3">An ultra-nourishing moisturizer that deeply hydrates and improves skin texture.</td>
                <td className="p-3">
                  <button className="text-purple-600 hover:text-purple-800 mx-2"><FaPencilAlt /></button>
                  <button className="text-red-600 hover:text-red-800 mx-2"><FaTrashAlt /></button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Glow Radiance Serum</td>
                <td className="p-3">$155.49</td>
                <td className="p-3">50</td>
                <td className="p-3">A serum that brightens and evens out skin tone, leaving a radiant glow.</td>
                <td className="p-3">
                  <button className="text-purple-600 hover:text-purple-800 mx-2"><FaPencilAlt /></button>
                  <button className="text-red-600 hover:text-red-800 mx-2"><FaTrashAlt /></button>
                </td>
              </tr>
              {/* Add more product rows here */}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Link to="/admin/products/add" className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700">
            Add New Product
          </Link>
        </div>
      </div>
    )

    async function getProducts(){
        const res = await axios.get("http://localhost:5000/api/products")

        console.log(res)
    }
    
    
      
}