import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { products, cart, updatecart, cartvalue } = useContext(ShopContext);
  const [totalcartvalue, setcartvalue] = useState(0);
  const Navigate = useNavigate();


  useEffect(() => {
    const temp = [];
    for (const item in cart) {
      for (const sizel in cart[item]) {
        temp.push({
          _id: item,
          size: sizel,
          quantity: cart[item][sizel],
        });
      }
    }
    setSelectedProduct(temp);
    setcartvalue(cartvalue);
  }, [cart]);

  const handlePlaceOrder=()=>
  {
    if(totalcartvalue==0)
    {
       toast.error("Empty Cart");
    }
    else
    {
      Navigate("./PlaceOrder")
    }
  }
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
        {selectedProduct.map((sitems, index) => {
          const productdetails = products.find(
            (product) => product.id == sitems._id
          );
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4"
            >
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src={productdetails.image[0]}
                  alt="Product 1"
                  className="w-20 h-20 object-cover rounded"
                />

                <div>
                  <h2 className="font-medium text-lg">{productdetails.name}</h2>
                  <p className="text-gray-500">${productdetails.price}</p>
                  <p className="text-gray-500">Size: {sitems.size}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
                <input
                  type="number"
                  min={1}
                  defaultValue={sitems.quantity}
                  className="w-16 p-2 border rounded text-center"
                  onChange={(e) => {
                    updatecart(
                      productdetails.id,
                      sitems.size,
                      Number(e.target.value)
                    );
                  }}
                />
                <button
                  onClick={() => updatecart(productdetails.id, sitems.size, 0)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        {/* Total Cart Value */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 p-4 border-t">
          <span className="text-xl font-bold mb-2 sm:mb-0">Total:</span>
          <span className="text-2xl font-bold text-green-500">
            ${totalcartvalue}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow"
            onClick={handlePlaceOrder}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
