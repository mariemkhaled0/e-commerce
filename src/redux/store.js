import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart"; // Assuming cart is a slice
import favReducer from "./fav";

// No need to export rootReducer directly; just pass it to configureStore
export const store = configureStore({
  reducer: {
    cart: cartReducer, // This is the correct way to define your slices
    fav: favReducer,
  },
});

export default store;
