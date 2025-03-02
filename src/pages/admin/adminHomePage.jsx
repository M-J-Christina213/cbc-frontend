import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaClipboardList, FaUserAlt, FaCommentDots, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import AdminProductsPage from './adminProductsPage';
import AddProductForm from './addProductForm';
import EditProductForm from './editProductForm';
import AdminOrdersPage from './adminOrdersPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import AdminDashboard from './adminDashboard';


export default function AdminHomePage() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/login")
    }
    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/users",{
      headers: { Authorization: `Bearer ${token}` },

    }).then((res)=>{
      console.log(res.data)
      if (res.data.type!="admin"){
        toast.error("You are not authorized to view this page")
        navigate("/login")
      }else{
        setUser(res.data)
      }
    }).catch((err)=>{
      console.log("Failed to fetch user", err)
      toast.error("Failed to fetch user")
      navigate("/login")
    })
  }, [])

  return (
    <div className="flex items-start min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">

      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/admin/dashboard" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaTachometerAlt className="mr-3 text-xl" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaBox className="mr-3 text-xl" /> Products
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaClipboardList className="mr-3 text-xl" /> Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/customers" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaUserAlt className="mr-3 text-xl" /> Customers
            </Link>
          </li>
          <li>
            <Link to="/admin/reviews" className="flex items-center p-3 text-purple-600 hover:bg-purple-100 rounded-lg">
              <FaCommentDots className="mr-3 text-xl" /> Reviews
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content 
        <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Welcome to the Admin Panel</h2>
      </div>
      */}



      
        {user!=null && <Routes path="/*">
       <Route path="/" element={<AdminDashboard/>} />
       <Route path="/admin" element={<AdminDashboard/>} />
       <Route path="/dashboard" element={<AdminDashboard/>} />
       <Route path="/products" element={<AdminProductsPage/>} />
       <Route path="/products/addProduct" element={<AddProductForm/>} />
       <Route path="/products/editProduct" element={<EditProductForm/>} />
       <Route path="/orders" element={<AdminOrdersPage/>} />
       <Route path="/customers" element={<h1> Customers </h1>} />
       <Route path="/reviews" element={<h1> Reviews </h1>} />
       <Route path="/*" element={<h1> 404 not found the admin page</h1>} />
      </Routes>}
      {
        user==null && <div className="flex justify-center items-center h-screen w-full">
        {/*animationg loading screen*/}
        
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500 border-b-accent border-opacity-50"></div>
    </div>
    }
    </div>
   
  );
}


//testing branch dev 
//testing for branch feature in dev branch