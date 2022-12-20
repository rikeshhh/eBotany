import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./Reducer";
import { cartSlice } from "./cartReducer";

export const store = configureStore({
    reducer:{
        product:productSlice.reducer,
        cart:cartSlice.reducer
    }
})