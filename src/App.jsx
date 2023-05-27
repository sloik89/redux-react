import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <CartItems />
    </>
  );
}

export default App;
