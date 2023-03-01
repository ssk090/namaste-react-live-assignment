import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="flex items-center justify-center font-bold text-3xl">
        Cart Items - {cartItems.length}{" "}
        <button
          className="bg-green-100 p-2 m-5 rounded-md font-semibold text-sm"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
