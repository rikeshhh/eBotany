import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeAll } from "../Redux/cartReducer";
import './style.css'

export const CartItems = () => {
    const dispatch =useDispatch();
  const cartItem =useSelector(state=>state.cart.cartItem)

  return (
    <div className="body">

    <div className="Cart-Container">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <button onClick={()=>dispatch(removeAll())} className="Action">Remove all</button>
      </div>
      {
          cartItem?.map((item)=>(
              <div className="Cart-Items">
            <div className="image-box">
              <img src={item.Image} alt={item.name} height="120px" />
            </div>
            <div class="about">
                <h1 class="title">{item.name}</h1>
                <h3 class="subtitle">{item.Category}</h3>
                </div>
            <div className="counter">
                {/* <button onClick={()=>dispatch(incrementQuantity(item))}>+</button> */}
                <p>{item.quantity}</p>
                {/* <button onClick={()=>dispatch(decrementQuantity())}>-</button> */}
            </div>
            <div className="prices">Npr {item.price}</div>
          </div>
        ))
    }
    </div>
    </div>
  );
};
