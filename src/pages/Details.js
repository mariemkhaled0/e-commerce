import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/data";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  getCartTotal,
  addToCart,
  removeItem,
} from "../redux/cart";

const Details = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.data);

  const details = products.find((item) => item.title === title);

  useEffect(() => {
    if (!details) {
      window.location.href = "/";
    }
  }, [details]);

  const handleAddToCart = () => {
    if (details) {
      const existingItem = cartItems.find((item) => item.id === details.id);
      if (existingItem) {
        dispatch(
          updateQuantity({
            id: details.id,
            quantity: existingItem.quantity + 1,
          })
        );
      } else {
        dispatch(
          addToCart({ ...details, quantity: 1, totalPrice: details.price })
        );
      }
      dispatch(getCartTotal());
    }
  };

  const handleDecrement = () => {
    const existingItem = cartItems.find((item) => item.id === details.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        dispatch(
          updateQuantity({
            id: details.id,
            quantity: existingItem.quantity - 1,
          })
        );
      } else {
        dispatch(removeItem({ id: details.id }));
      }
      dispatch(getCartTotal());
    }
  };

  return (
    <section className="w-9/12 m-auto p-10">
      {details ? (
        <div className="gap-6 grid md:grid-cols-2">
          <img
            className="mr-3 rounded-3xl"
            alt="img"
            src={`${process.env.PUBLIC_URL}${details.img}`}
          />
          <div>
            <p className="font-bold text-2xl">{details.title}</p>
            <p className="mt-2 text-gray-600">{details.description}</p>
            <p className="mt-5 font-bold">${details.price}</p>
            <div className="flex md:flex-row flex-col gap-3 mt-6">
              <div className="flex gap-2 items-center">
                <button
                  onClick={handleAddToCart} // Add to cart functionality
                  className="bg-gray-100 rounded-full text-2xl w-10 h-10"
                >
                  +
                </button>
                <span className="text-2xl">
                  {cartItems.find((item) => item.id === details.id)?.quantity ||
                    1}
                </span>
                <button
                  onClick={handleDecrement} // Decrement functionality
                  className="bg-gray-100 rounded-full text-2xl w-10 h-10"
                >
                  -
                </button>
              </div>
              <button
                onClick={handleAddToCart} // Handle adding to cart
                className="bg-slate-900 text-white px-7 py-3 rounded-xl hover:bg-slate-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Details;
