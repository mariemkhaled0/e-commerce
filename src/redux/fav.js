import { createSlice } from "@reduxjs/toolkit";
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("favItems");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading favItems from localStorage:", error);
    return [];
  }
};
const saveToLocalStorage = (items) => {
  try {
    localStorage.setItem("favItems", JSON.stringify(items));
  } catch (error) {
    console.error("Error saving favItems to localStorage:", error);
  }
};

const FavSlice = createSlice({
  name: "fav",
  initialState: {
    items: loadFromLocalStorage(),
  },
  reducers: {
    addToFav: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
        saveToLocalStorage(state.items);
      }
    },
    removeFromFav: (state, action) => {
      const filterdItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items = filterdItems;
      saveToLocalStorage(state.items);
    },
  },
});

export default FavSlice.reducer;
export const { addToFav, removeFromFav } = FavSlice.actions;
