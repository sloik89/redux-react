import React from "react";
import { ChevronDown, ChevronUp } from "./icons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
const Cart = ({ amount, img, price, title, id }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} className="cart-img" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="remove-btn btn"
        >
          remove
        </button>
      </div>
      <div className="btn-container">
        <button className="btn-amount" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="btn-amount" onClick={() => dispatch(decrease(id))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default Cart;
