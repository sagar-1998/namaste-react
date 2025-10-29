import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearCart: (state, action) => {
      state.items.length = 0; // clear cart
      // or we can write return { items: []}
    },
  },
});

// here we need to export the reducer and the actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
