import React, { useState } from "react";
import PageHeading from "../common/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { removeItem, getCartTotal, updateQuantity } from "../redux/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data: cartItems, totalPrice } = useSelector((state) => state.cart);
  console.log(totalPrice);

  const dispatch = useDispatch();
  const removeFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };
  const increaseQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
    dispatch(getCartTotal());
  };
  const decreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
    } else {
      dispatch(removeItem({ id: itemId }));
    }
    dispatch(getCartTotal());
  };

  return (
    <section className="mb-5 h-full">
      <div>
        <PageHeading home={"Home"} pagename={"Cart"} />
        {cartItems.length > 0 ? (
          <div className="w-10/12 m-auto mt-5 ">
            <div className="  grid grid-cols-4  px-6 py-1  bg-gray-900 text-white">
              <p>Product</p>
              <p>price</p>
              <p>quantity</p>
              <p>SubTotal</p>
            </div>
            <div className="bg-gray-100 shadow-xl  p-2 mt-4">
              {cartItems.map((item, key) => (
                <div
                  className="grid relative  gap-6 grid-cols-4 justify-between items-center mb-2"
                  key={key}
                >
                  <div className=" flex items-center">
                    <FaTimes
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-700 cursor-pointer  md:mr-3 absolute right-0 top-2 md:top-3 "
                    />
                    <div className="flex md:flex-row flex-col items-center justify-center">
                      <img className="w-[100px]" alt="img" src={item.img} />
                      <p className="ml-2 font-bold">{item.title}</p>{" "}
                    </div>
                  </div>
                  <p>${item.price}</p>
                  <div className="flex">
                    <button
                      onClick={() => increaseQuantity(item.id, item.quantity)}
                      className="border px-2 md:px-3 md:py-1 mr-2"
                    >
                      +
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => decreaseQuantity(item.id, item.quantity)}
                      className="border px-2 md:px-3 md:py-1 ml-2"
                    >
                      -
                    </button>
                  </div>
                  <p className="mr-2">${item.totalPrice}</p>
                </div>
              ))}
            </div>
            <div className="md:w-5/12 w-10/12 bg-gray-100 mt-5 p-3  rounded-xl">
              <h1 className="text-center font-bold  text-xl">Cart total</h1>
              <div className="flex justify-between font-bold">
                <p>SubTotal :</p>
                <p>${totalPrice}</p>
              </div>

              <div className="flex justify-between mt-2 font-bold">
                <p>shipping Charge :</p>
                <p>$10</p>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <p>Gran Total :</p>
                <p>${totalPrice + 10}</p>
              </div>
              <div className="flex mt-5  justify-around">
                <button className="bg-orange-400 hover:bg-orange-500 md:text-sm text-[10px] text-white rounded-xl p-2">
                  Proceed to CheckOut
                </button>
                <Link to="/shop">
                  <button className=" bg-red-700 hover:bg-red-600 md:text-sm text-[10px] text-white rounded-xl p-2">
                    continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="m-auto mt-20 mb-20 w-10/12 ">
            <p className="text-gray-300 text-center text-4xl">
              Your cart is Empty
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
