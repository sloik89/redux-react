import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { clearCart } from "../features/cart/cartSlice";
const CartItems = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <button
            className="btn"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </button>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total</h4>
          <span>$ {total.toFixed(2)}</span>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartItems;
