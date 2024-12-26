import axios from 'axios';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AdminProductsPage(){

   getProducts()
    return(
        <div>
            <h1> Admin Products Page </h1> 
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