import React from 'react'
import Two from '../Image/Two.jpg'
import Three from '../Image/Three.jpg'
import Four from '../Image/Four.jpg'

import '../body/body.css'
import { Link } from 'react-router-dom'
function Body() {
  return (
    <div className='intro'>
        <div className='introPhase'>
        <div className='intrOne'>
            <h1>Botany</h1>
            <p>Customer satisfaction is our primary goal. It’s the foundation of all we do and all we are. We have thrived in business for 4 decades because we put the customer first. </p>
            <Link to={'/AllProducts'} className='button'>Shop Now</Link>
        </div>
        <div className='intrTwo'>
            <img src={Two} alt=''></img>
        </div>
        <div className='intrThree'>
            <img src={Three} alt=''></img>
        </div>
        <div className='intrThree'>
            <img src={Four} alt=''></img>
        </div>
        </div>
    </div>
  )
}

export default Body