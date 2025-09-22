import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  return [];
};
const calculateTotals = (data) => {
  const totalPrice = data.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalItems = data.reduce((acc, item) => acc + item.quantity, 0);
  return { totalPrice, totalItems };
};

const initialData = getCartFromLocalStorage();
const { totalPrice, totalItems } = calculateTotals(initialData);

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: getCartFromLocalStorage(),
    totalItems,
    totalPrice,
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // ✅ المنتج موجود بالفعل → نحدثه
        const existingItem = state.data[existingItemIndex];
        const newQuantity = existingItem.quantity + action.payload.quantity;

        state.data[existingItemIndex] = {
          ...existingItem,
          quantity: newQuantity,
          totalPrice: existingItem.price * newQuantity,
        };
      } else {
        state.data.push({
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        });
      }

      const totals = calculateTotals(state.data);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
      storeInLocalStorage(state.data);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.data.findIndex((item) => item.id === id);
      if (productIndex !== -1) {
        const updateProduct = {
          ...state.data[productIndex],
          quantity: Math.max(quantity || 1, 1),
        };
        updateProduct.totalPrice = updateProduct.price * updateProduct.quantity;
        state.data[productIndex] = updateProduct;
        storeInLocalStorage(state.data);
      }
    },
    removeItem: (state, action) => {
      const tempCart = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = tempCart;
      storeInLocalStorage(state.data);
    },
    getCartTotal: (state) => {
      const { totalPrice, totalItems } = calculateTotals(state.data);
      state.totalPrice = totalPrice;
      state.totalItems = totalItems;
    },
  },
});

export const { addToCart, updateQuantity, removeItem, getCartTotal } =
  CartSlice.actions;
export default CartSlice.reducer;
