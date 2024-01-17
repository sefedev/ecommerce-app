import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.product.push(action.payload);
      console.log(state.product);
    },
    remove(state, { payload }) {
      state.product = state.product.filter((p, i) => i != payload);

      console.log(state.product, payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
