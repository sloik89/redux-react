import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    increase: (state, { payload }) => {
      // find clicked item
      const findItem = state.cartItems.find((item) => item.id === payload);
      // update finded item
      findItem.amount = findItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      console.log(payload);
      // find clicked item
      const findItem = state.cartItems.find((item) => item.id === payload);
      // update finded item
      findItem.amount = findItem.amount - 1;
    },
    calculateTotals: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
        amount += item.amount;
      });
      console.log(total, amount);
      state.total = total;
      state.amount = amount;
    },
  },
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
