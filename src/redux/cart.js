import { createSlice } from "@reduxjs/toolkit";

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const tempCart = state.data.map((item) => {
          if (item.id === action.payload.id) {
            let newQuantity = item.quantity + action.payload.quantity;
            let newTotalPrice = newQuantity + item.price;
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.data = tempCart;
        storeInLocalStorage(state.data);
      } else {
        state.data.push(action.payload);
        storeInLocalStorage(state.data);
      }
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
      const getTotalPrice = state.data.reduce((acc, current) => {
        return (acc += current.totalPrice);
      }, 0);
      state.totalPrice = getTotalPrice;
      state.totalItems = state.data.length;
    },
  },
});

export const { addToCart, updateQuantity, removeItem, getCartTotal } =
  CartSlice.actions;
export default CartSlice.reducer;
