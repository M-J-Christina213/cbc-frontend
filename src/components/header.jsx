import { useState } from "react";
import { data, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiUser, FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { FaCaretDown} from "react-icons/fa";
import NavSlider from "./navSlider";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop All",
    link: "/shop",
  },
  {
    id: 3,
    name: "New Arrivals",
    link: "/new-arrivals",
  },
  {
    id: 4,
    name: "Special Offers",
    link: "/special-offers",
  },
  {
    id: 5,
    name: "Gifts",
    link: "/gifts",
  },
  {
    id: 6,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 7,
    name: "Contact Us",
    link: "/contact-us",
  }
]

const DropdownLinks = [
  {
    id:1,
    name: "Makeup",
    link:"/#",
  },
  {
    id :2,
    name:"Skincare",
    link:"/#",
  },
  {
    id:3,
    name : "Haircare",
    link:"/#",
  },
  {
    id: 4,
    name : "Nails",
    link:"/#"
  },
  {
    id :5,
    name : "Fragrances",
    link:"/#"
  },
  {
    id : 6,
    name:"Bath & Body",
    link: "/#"
  }
]

export default function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
      {isSliderOpen && <NavSlider closeSlider={() => setIsSliderOpen(false)} />} 
      
      {/* Top Section */}
      <header className="bg-white w-full shadow-md">
        <div className="flex justify-between items-center px-6 py-3 lg:px-12">
          {/* Logo */}
          <img
            src="/CBC-Logo-transparent.png"
            alt="Logo"
            className="h-20 md:cursor-pointer"
          />

          {/* Search Bar */}
          <div className="md:flex items-center flex-grow mx-6 max-w-md relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-10 py-1.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FiSearch size={20} className="absolute left-3 text-gray-500 top-1/2 transform -translate-y-1/2" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-gray-700 hover:text-primary">
              <FiUser size={20} />
            </Link>
            <Link to="/wishlist" className="text-gray-700 hover:text-primary">
              <FiHeart size={20} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary relative">
              <FiShoppingCart size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <RxHamburgerMenu
            onClick={() => setIsSliderOpen(true)}
            className="text-3xl cursor-pointer text-primary lg:hidden"
          />
        </div>

        {/* Bottom Navigation Section */}

        <div className="bg-black flex justify-center">
          <ul className="sm:flex hidden items-center gap-4 justify-center pb-2 pt-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block text-white px-4  hover:border-b-2 border-secondary"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Dropdown menus*/}
            <li className="relative group">
              <a href="/Shop All" 
                className="text-white flex items-center gap-[2px] py-2 px-4 hover:border-b-2 border-secondary">
                Shop 
                <span>
                  <FaCaretDown className="text-white transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

          </ul>
        </div>

       {/*
        <nav className="bg-black hidden lg:flex items-center  py-3 shadow-sm">
          <ul className="flex space-x-8 font-semibold text-white">


            
            <li>
              <Link to="/" className="py-7 px-3 inline-block hover:border-b-2 border-secondary">Home</Link>
            </li>

            
            <li className="nav-item">
  
                <Link to="/shop" className="nav-links">Shop All</Link>

              </li>

            <li><Link to="/new-arrivals" className="hover:border-b-2 border-secondary pb-1">New Arrivals</Link></li>
            <li><Link to="/special-offers" className="hover:border-b-2 border-secondary pb-1">Special Offers</Link></li>
            <li><Link to="/gifts" className="hover:border-b-2 border-secondary pb-1">Gifts</Link></li>
            <li><Link to="/about-us" className="hover:border-b-2 border-secondary pb-1">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:border-b-2 border-secondary pb-1">Contact Us</Link></li>
            
          </ul>
        </nav>
        */}
      </header>
    </>
  );
}
