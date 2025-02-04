import {Link } from "react-router-dom"

export default function Header() {
    return (
      <header className="bg-white w-full h-[100px] relative flex justify-center items-center">
        <img src="/CBC-Logo-transparent.png" className=" cursor-pointer h-full rounded-full absolute left-[10px]" />
        
        <div className="h-full flex items-center w-[500px] justify-between">
        <Link to="/" className="text-primary font-bold text-x1 hover:border-b-2  border-b-secondary"> Home </Link>
        <Link to="/products" className="text-primary font-bold text-x1 hover:border-b-2 border-b-secondary"> Products </Link>
        <Link to="/aboutUs" className="text-primary font-bold text-x1 hover:border-b-2 border-b-secondary"> About Us </Link>
        <Link to="/contactUs" className="text-primary font-bold text-x1 hover:border-b-2 border-b-secondary"> Contact Us </Link>
        <Link to="/cart" className="text-primary font-bold text-x1 hover:border-b-2 border-b-secondary"> Cart </Link>
        </div>
      </header>
    );
  }