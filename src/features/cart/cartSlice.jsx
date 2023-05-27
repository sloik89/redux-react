import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};
const url = "https://course-api.com/react-useReducer-cart-project";
const url1 = "https://main--serverless-seba-api.netlify.app/api/3-airtable";
// async action
export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  const data = fetch(url)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return data;
});
// end of assyc action
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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
