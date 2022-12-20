import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Charr from "../Image/4.jpg";
import { getAllProducts } from "../Redux/Reducer";
import "./allProduct.css";

function Allproduct() {

    const dispatch   = useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])

    const products = useSelector(state=>state.product.products);

    return (
    <div>
    
      <div class="productCarts">
        <div class="cartContainer">
            {
                products?.map((product)=>(
                    <div  class="card">
                    <img src={product?.Image} alt=""></img>
                    <h1>{product?.name}</h1>
                    <Link to={`/${product.id}`} className="button">Detail</Link>
                  </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default Allproduct;
