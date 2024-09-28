import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateQuantity, getCartTotal, removeItem } from "../redux/cart";

const Sidebar = ({ handelSidebar, sidebar }) => {
  const cartItems = useSelector((store) => store.cart.data);
  const dispatch = useDispatch();

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
    <div
      className={`fixed top-0 right-0 z-[100] bg-white shadow-2xl md:w-96 w-91 h-full
    transform transition-transform duration-500
    ${sidebar === false ? "translate-x-full" : ""}`}
    >
      <div className="flex justify-between border border-b-gray-200 p-4">
        <p className="font-bold">Your Cart</p>
        <button onClick={handelSidebar} className="">
          <FaTimes />
        </button>
      </div>
      <div>
        {cartItems.length > 0 ? (
          <div className="px-5">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center  mt-4"
              >
                <div className="flex items-center">
                  <Link to={`/details/${item.title}`}>
                    <img className="w-[70px]" alt="img" src={item.img} />
                  </Link>

                  <p className="text-xs ml-2">{item.title}</p>
                  <p className="text-sm font-bold ml-3"> ${item.totalPrice}</p>
                </div>
                <div className="flex justify-between gap-1">
                  <button
                    onClick={() => increaseQuantity(item.id, item.quantity)}
                    className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => decreaseQuantity(item.id, item.quantity)}
                    className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="uppercase p-4 text-gray-400">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
