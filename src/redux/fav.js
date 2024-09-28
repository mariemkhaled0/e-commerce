import { createSlice } from "@reduxjs/toolkit";
const FavSlice = createSlice({
  name: "fav",
  initialState: {
    items: [],
  },
  reducers: {
    addToFav: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromFav: (state, action) => {
      const filterdItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = filterdItems;
    },
  },
});

export default FavSlice.reducer;
export const { addToFav, removeFromFav } = FavSlice.actions;
