import { createContext, useState, useEffect } from "react";
import { products } from "../assets/products";
import { use } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const cartCount = () => {
    let count = 0;

    for (const item in cart) {
      for (const size in cart[item]) {
        count += cart[item][size];
      }
    }
    return count;
  };

  const addToCart = async (id, size) => {
    const cartcopy = structuredClone(cart);

    if (!size) {
      toast.error("Please select a size");
      return null;
    }

    if (cartcopy[id]) {
      if (cartcopy[id][size]) {
        cartcopy[id][size] += 1;
      } else {
        cartcopy[id][size] = 1;
      }
    } else {
      cartcopy[id] = {};
      cartcopy[id][size] = 1;
    }
    setCart(cartcopy);

    return null;
  };
  const cartvalue = () => {
    let totalprice = Number(0);
    for (const ids in cart) {
      for (const size in cart[ids]) {
        products.find((producct) => {
          if (producct.id == ids) {
            totalprice += Number(producct.price * cart[ids][size]);
          }
        });
      }
    }

    return Number(totalprice);
  };
  const updatecart = async (id, size, quantity) => {
    const cartCopy = structuredClone(cart);

    // If quantity is 0, remove the product/size from the cart
    if (quantity === 0) {
      if (cartCopy[id] && cartCopy[id][size]) {
        delete cartCopy[id][size];

        // If no sizes are left for a product, remove the product entirely
        if (Object.keys(cartCopy[id]).length === 0) {
          delete cartCopy[id];
        }
      }
    } else {
      // Update the quantity for the product/size
      if (!cartCopy[id]) cartCopy[id] = {};
      cartCopy[id][size] = quantity;
    }

    setCart(cartCopy);
    return null;
  };

  return (
    <ShopContext.Provider
      value={{ products, addToCart, cart, cartCount, cartvalue, updatecart }}
    >
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
