import { Link, Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';
import ProductOverview from './home/productOverview';
import ProductPage from './home/product';
import Cart from './home/cart';
import ShippingPage from './home/shipping';
import MyOrdersPage from './home/myOrders';

export default function Homepage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="w-full h-[calc(100vh)] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <Routes path="/*">
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path='/products' element={<ProductPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/productInfo/:productID" element={<ProductOverview />} />
          <Route path="/shipping" element={<ShippingPage/>} />
          <Route path="/orders" element={<MyOrdersPage/>} />
        </Routes>
      </div>


      
    </div>
  );
}
