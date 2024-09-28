import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, updateQuantity, getCartTotal } from "../redux/cart";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Modal = ({ modal, handleCloseModal }) => {
  const [qty, setQty] = useState(1);
  const [vieCart, setViewCart] = useState(false);
  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    setViewCart(true);
    dispatch(getCartTotal());
  };
  const increaseQuantity = (itemId, currentQuantity) => {
    const newQty = currentQuantity + 1;
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };
  const decreaseQuantity = (itemId, currentQuantity) => {
    const newQty = Math.max(currentQuantity - 1, 1);
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-11/12 sm:w-10/12 md:w-8/12 relative  p-5 m-auto rounded-lg">
        {modal && (
          <div className=" px-3  flex justify-center gap-4">
            <img
              className="w-[80px] h-[80px] md:w-[20%] md:h-[20%] lg:w-[30%] lg:h-[30%] "
              alt={modal.title}
              src={modal.img}
            />
            <div>
              <p className="font-bold ">{modal.title}</p>
              <p className="text-red-700 mt-2">${modal.price}</p>
              <p className="my-3 text-xs md:text-[16px] w-[70%] text-gray-600">
                {modal.description}
              </p>
              <p className="text-green-700">in stock 400 items</p>
              <div className="flex items-center">
                <div className="flex mr-3">
                  <button
                    onClick={() => increaseQuantity(modal.id, qty)}
                    className="border px-2 mt-4 md:py-3 md:px-6"
                  >
                    +
                  </button>
                </div>
                <span className="border px-2 mt-4 md:py-3 md:px-6 count">
                  {qty}
                </span>
                <div className="flex ml-3">
                  <button
                    onClick={() => decreaseQuantity(modal.id, qty)}
                    className="border px-2 mt-4 md:py-3 md:px-6"
                  >
                    -
                  </button>
                </div>
                {vieCart ? (
                  <Link to="/cart">
                    <button className="border  md:text-[16px] text-[14.3px] px-2 py-1 mt-4 md:py-3 md:px-6 ml-2 bg-orange-600  text-white">
                      view cart
                    </button>
                  </Link>
                ) : (
                  <div className="border md:text-[16px] text-[12px] px-2 py-1 mt-4 md:py-3 md:px-6 ml-2 bg-orange-600  text-white">
                    <button onClick={() => addItemToCart(modal)}>
                      Add to cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <button
          className="absolute text-red-500 right-2 top-2"
          onClick={handleCloseModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
