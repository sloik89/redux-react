import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      {isOpen && <Modal />}

      <Navbar />
      <CartItems />
    </>
  );
}

export default App;
