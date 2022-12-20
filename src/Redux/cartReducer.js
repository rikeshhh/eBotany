import { createSlice } from "@reduxjs/toolkit";

// const getcartItems= ()=>{
//     const cart = JSON.parse(localStorage.getItem('cartitems')) |[];
//     return cart;
// }

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },

  reducers: {
    addCart: (state, action) => {
      const itemInCart = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        return;
      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
    },
    incrementQuantity: (state, action) => {
      // const item = state.cartItem.find((item) => item.id === action.payload);
      // item.quantity++;

      const newCart = state.cartItem.map((cart) => {
        if (cart.id === action.payload.id) {
          return {
            ...action.payload,
            quantity: action.payload.quantity++,
          };
        }
        return cart;
      });
      state.cartItem = newCart;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeAll: (state) => {
      state.cartItem = [];
    },
  },
});

export const { addCart, incrementQuantity, decrementQuantity, removeAll } =
  cartSlice.actions;
