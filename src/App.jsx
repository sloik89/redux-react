import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import Modal from "./components/Modal";
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
      <Modal />
      <Navbar />
      <CartItems />
    </>
  );
}

export default App;
