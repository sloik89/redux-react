# Desc

Cart app using redux

# Used packages

- @reduxjs/toolkit
- react-redux

# Using of redux

1. Wrap whole app with provider and pass store

```js
import { Provider } from "react-redux";
import { store } from "./store.jsx";
<Provider store={store}>
  <App />
</Provider>;
```

2. Create store file

```js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

3. Create Cart Slice
   3.1 import createSlice
   ```js
   import { createSlice } from "@reduxjs/toolkit";
   import cartItems from "../../cartItems";
   ```
   3.2 create initial state
   ```js
   const initialState = {
     cartItems: cartItems,
     amount: 4,
     total: 0,
     isLoading: true,
   };
   ```
   3.3 create slice
   ```js
   const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    }},
   ```
   3.4 export cartSlice reducer

```js
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
```
