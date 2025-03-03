import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/loginPage";
import Homepage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signUpPage";
import AdminHomepage from "./pages/admin/adminHomePage";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

import ProductPage from "./pages/home/product";
import ContactUs from "./pages/home/contactUsPage";
import AboutUs from "./pages/home/aboutUsPage";
import Cart from "./pages/home/cart";
import ProductOverview from "./pages/home/productOverview";
import ShippingPage from "./pages/home/shipping";
import MyOrdersPage from "./pages/home/myOrders";
import ExclusiveProducts from "./components/exclusiveProducts";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" />
        <GoogleOAuthProvider clientId="379936970749-rc95kiaddidqut5i5klqkt7cjp3m48vq.apps.googleusercontent.com">
          <Routes>
            <Route path="/*" element={<Homepage />} />
            <Route path="/:category" element={<ProductPage />} />
            <Route path="/:category/:subcategory" element={<ProductPage />} />
            <Route path="/exclusive/:category" element={<ExclusiveProducts />} />
            <Route path="/productInfo/:productID" element={<ProductOverview/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/shipping" element={<ShippingPage/>} />
            <Route path="/orders" element={<MyOrdersPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/admin/*" element={<AdminHomepage />} />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </div>
  );
}
