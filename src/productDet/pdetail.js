import React from 'react'
import Charr from '../Image/4.jpg'
import './pdetail.css'
function Pdetail() {
  return (
    <div>
         <h1>Product Detail</h1>
    <div class="container">
        <div class="content">
        <img src={Charr} alt=''></img>
            <div>
                <h1>Indoor Plant</h1>
<ul>
    <li>Reviews</li>
    <li>In Stock</li>
    <li>Npr 340</li>
    <button>Add to cart</button>
    <li>Category:</li>
    <li><span>Tags:</span>Indoor Plant</li>
</ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Pdetail