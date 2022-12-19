import './App.css';
import Navbar from './nav/Navbar';
import Body from './body/body';
import Blog from './blog/Blog';
import Why from './why/why';
import Cart from './cart/Cart';
import Footer from './footer/footer';
function App() {
  return (
 <div className='App'>
<Navbar></Navbar>
<Body></Body>
<Why></Why>
<Cart></Cart>
<Blog></Blog>
<Footer></Footer>
    </div>
  );
}

export default App;
