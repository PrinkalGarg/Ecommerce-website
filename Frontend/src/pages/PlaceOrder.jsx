import React, { useEffect, useState } from "react";
import CartTotal from "../component/CartTotal";
import {  useNavigate } from "react-router-dom";

function PlaceOrder() {
  const[paymentMethod,setPaymentMethod]=useState("cod")
  const Navigate = useNavigate();
  
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Delivery Information Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">DELIVERY INFORMATION</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Street"
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Zipcode"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>

        {/* Cart Totals and Payment Methods */}
        <div>
          <h2 className="text-xl font-bold mb-4">CART TOTALS</h2>
          {/* Render the passed CartTotalsComponent */}
          <CartTotal />

          {/* Payment Method Section */}
          <h2 className="text-xl font-bold my-4">PAYMENT METHOD</h2>
          <div className="flex items-center space-x-4">
            <button
              className={`flex items-center justify-center w-32 h-12 border rounded bg-gray-100  ${paymentMethod=='strip'? 'bg-green-400' :''}  `}
              onClick={() =>  setPaymentMethod("strip")}
            >
              <img
                src="../assets/images/strip.png"
                alt="Stripe"
                className="w-fit"
              />
            </button>
            <button
              className={`flex items-center justify-center w-32 h-12 border rounded bg-gray-100  ${paymentMethod=='razor'? 'bg-green-400' :''}  `}
              onClick={() =>  setPaymentMethod("razor")}
            >
              <img
                src="https://razorpay.com/assets/razorpay-glyph.svg"
                alt="Razorpay"
                className="w-16"
              />
            </button>
            <button
              className={`flex items-center justify-center w-32 h-12 border rounded bg-gray-100  ${paymentMethod=='cod'? 'bg-green-400' :''}  `}
              onClick={() => setPaymentMethod("cod")}
            >
              CASH ON DELIVERY
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-auto m-7 justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow"
          onClick={() => {
            Navigate("/orders");
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default PlaceOrder;
