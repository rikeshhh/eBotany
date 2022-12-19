import React from 'react'
import Three from './Image/Three.jpg'
import './why.css'
function Why() {
  return (
    <div className='why'>
        <div>
            <h1>Why shop with us?</h1>
            <p>Dui nulla augue in id enim non. Venenatis aenean suscipit facilisis amet. Pellentesque nullam mi vitae neque ipsum. Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi non, semper vestibulum euismod accumsan augue.</p>
            <ol>
                <li>Socculents</li>
                <li>Air Purifier</li>
                <li>Decorative</li>
            </ol>
        </div>
        <div className='imge'>
            <img src={Three} alt=''></img>
        </div>
    </div>
  )
}

export default Why