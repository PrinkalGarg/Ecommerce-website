import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const{cartCount}=useContext(ShopContext);
  return (
    <nav className=" sticky top-0 z-50  bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-lg md:text-2xl font-bold ml-2 md:ml-10">
          <Link className="hover:text-gray-300  " to="/">
            Prinkal Garg
          </Link>
        </div>

        <div className="hidden text-lg font-semibold md:flex space-x-4 mr-10">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            Home
          </Link>

          <Link
            to="/collection"
            className="hover:text-gray-300 transition duration-300"
          >
            Collections
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
        </div>
        <div className="flex  items-center mr-4  row-auto">
          <img
            src="./assets/images/icon.webp"
            className="w-14 p-2 hover:cursor-pointer "
            alt="user"
          />
          <div className="group relative cursor-pointer">
            <img
              src="./assets/images/user.png"
              className="w-10 hover:cursor-pointer p-2 "
              alt="user"
            />
            <div className=" dropdown-content  group-hover:block hidden absolute right-0 bg-white shadow-lg rounded-lg">
              <p className=" w-28 p-3  text-center cursor-pointer hover:bg-slate-500 HOVER:text-white font-bold ">
                My Profile
              </p>
              <p className="p-3 text-center cursor-pointer hover:bg-slate-500 HOVER:text-white font-bold ">
                Orders
              </p>
              <p className="p-3  text-center cursor-pointer hover:bg-slate-500 HOVER:text-white font-bold ">
                Logout
              </p>
            </div>
          </div>
          <Link to={"/cart"} className="relative">
            <img
              src="./assets/images/cart.webp "
              className="w-16 p-2 hover:cursor-pointer"
              alt="cart"
            />
            <p className="absolute right-[12px] bottom-[12px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
              {cartCount()}
            </p>
          </Link>
        </div>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden ">
          <Link
            to="/"
            className="block px-4 py-2 font-bold text-center hover:text-white hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block px-4 py-2 font-bold text-center hover:text-white hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/collection"
            className="block px-4 py-2 font-bold text-center hover:text-white hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Collections
          </Link>
          <Link
            to="/contact"
            className="block  px-4 py-2 hover:bg-gray-600 text-center font-bold hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;