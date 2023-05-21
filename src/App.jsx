import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);
  useEffect(() => {
    console.log("jestem");
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <CartItems />
    </>
  );
}

export default App;
