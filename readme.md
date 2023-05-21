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
