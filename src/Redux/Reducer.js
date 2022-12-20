import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
const response = await axios({
    url:'http://localhost:3000/products',
    method:'GET'
    })
    console.log('response');
  return response.data;
});


export const getSingleProduct = createAsyncThunk("product/getSingleProduct", async (id) => {
  const response = await axios({
      url:`http://localhost:3000/products/${id}`,
      method:'GET'
      })
      console.log(response);
    return response.data;
  });


export const productSlice = createSlice({
  name: "product",
  initialState: {
    state: "idle",
    products: [],
    singleProduct:[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.state = "loading";
        console.log(action.payload)
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        console.log(action.payload)

        state.state = "idle";
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.state = "error";
        console.log(action.payload)

        state.products = action.payload;
      })
      .addCase(getSingleProduct.fulfilled , (state,action)=>{
        state.singleProduct = action.payload;
      })
  },
});
