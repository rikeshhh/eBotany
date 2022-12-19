import React from 'react'
import Charr from '../Image/4.jpg'
import './allProduct.css'
function Allproduct() {
  return (
    <div>
        <nav>
    <li>Indoor Plant</li>
    <li>Outdoor Plant</li>
</nav>
<div class="productCarts">
    <div class="cartContainer">
        <div class="card">
        <img src={Charr} alt=''></img>
            <h1>Indoor Plant</h1>
            <button>Add to cart</button>
        </div>
        <div class="card">
        <img src={Charr} alt=''></img>
            <h1>Indoor Plant</h1>

            <button>Add to cart</button>

        </div>
        <div class="card">
        <img src={Charr} alt=''></img>
            <h1>Indoor Plant</h1>

            <button>Add to cart</button>

        </div>
        <div class="card">
        <img src={Charr} alt=''></img>
            <h1>Indoor Plant</h1>

            <button>Add to cart</button>

        </div>
        <div class="card">
        <img src={Charr} alt=''></img>
            <h1>Indoor Plant</h1>

            <button>Add to cart</button>

        </div>
     
    </div>
</div>
    </div>

  )
}

export default Allproduct