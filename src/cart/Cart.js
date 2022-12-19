import React from 'react'
import One from './Image/One.jpg'
import Two from './Image/Two.jpg'
import Three from './Image/Three.jpg'
import Four from './Image/Four.jpg'
import Five from './Image/Five.jpg'
import Six from './Image/Six.jpg'
import './cart.css'
function Cart() {
  return (
<div>
<h1>Fresh Arrivals</h1>

<div className='Cart'>
        <div className='cartBody'>
            <img src={One} alt=''  className='image'></img>
            <button>Add to cart</button>

        </div>
        <div className='cartBody'>
        <img src={Two} alt=''  className='image'></img>
        <button>Add to cart</button>

        </div>
        <div className='cartBody'>
        <img src={Three} alt=''  className='image'></img>
        <button>Add to cart</button>

        </div>
        <div className='cartBody'>
        <img src={Four} alt=''  className='image'></img>
        <button>Add to cart</button>

        </div>
        <div className='cartBody'>
        <img src={Five} alt=''  className='image'></img>
        <button>Add to cart</button>

        </div>
        <div className='cartBody'>
        <img src={Six} alt=''  className='image'></img>
        <button>Add to cart</button>
          
        </div>
</div>        
    </div>
  )
}

export default Cart