import { Link, Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';
import ProductOverview from './home/productOverview';
import ProductPage from './home/product';
import Cart from './home/cart';
import ShippingPage from './home/shipping';
import MyOrdersPage from './home/myOrders';
import HeroSection from '../components/heroSection';
import ProductCategories from '../components/productCategories';


import FeaturedProducts from '../components/FeatureProducts';
import Testimonials from '../components/testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/footer';
import SpecialOffersBanner from '../components/specialOfferBanner';




export default function Homepage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="w-full h-[calc(100vh)]">
      <HeroSection/>
      <ProductCategories/>
      <FeaturedProducts/>
      <SpecialOffersBanner/>
      <Testimonials/>
      <FAQ/>
      <Footer/>

      
        <Routes path="/*">
          <Route path="/" element={<h1> </h1>} />
    
          <Route path="/login" element={<LoginPage />} />
    
          <Route path="/productInfo/:productID" element={<ProductOverview />} />
      
          
        </Routes>
      </div>

     

    </div>
  );
}
