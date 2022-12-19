import React from 'react'
import { Route, Routes,Link} from "react-router-dom";
import Blog from '../blog/Blog';
import Footer from '../footer/footer';
import Cart from '../cart/Cart';
import Body from '../body/body';
import '../nav/navbar.css'
import App from '../App';
function Navbar() {
  return (
        <div>
 <ul>
    <li>  
          <Link to="/">Home</Link>  
        </li>  
    <li>
    <Link to="/body">Body</Link>  
    </li>
    <li>
    <Link to="/cart">cart</Link>  
    </li>
    <li>
    <Link to="/footer">footer</Link>  
    </li>
    <li>
    <Link to="/blog">Blog</Link>  
        </li> 
    </ul> 
    <Routes>
          <Route exact path="/" element={<App/>} >  
    <Route path='/body' element={<Body />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/footer' element={<Footer />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='*' element={<h1>404 Not Found</h1>} />
    </Route>
    </Routes>
    </div>
    )
}

export default Navbar