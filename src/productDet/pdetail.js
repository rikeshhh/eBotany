import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../Redux/cartReducer";
import { getSingleProduct } from "../Redux/Reducer";
import "./pdetail.css";
function Pdetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.product.singleProduct);

  const cartItem =useSelector(state=>state.cart.cartItem)

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const addtoCarthandler = (product) => {
    const value ={
      ...product,
      quantity:1
    }
    dispatch(addCart(value));
  };

  console.log(cartItem);


  return (
    <div>
      <h1>Product Detail</h1>
      <div class="container">
        <div class="content">
          <img src={singleProduct?.Image} alt=""></img>
          <div>
            <h1>{singleProduct?.name}</h1>
            <ul>
              <li>In Stock</li>
              <li>Npr{singleProduct?.price}</li>
              <button onClick={() => addtoCarthandler(singleProduct)}>Add to cart</button>
              <li>Category:{singleProduct?.Category} </li>
            </ul>
            <p>{singleProduct?.Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdetail;
