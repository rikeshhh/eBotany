import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/AllProducts" className="link">Product</Link>
        </li>
        <li>
          <Link to="/cartitems" className="link">cart</Link>
        </li>
       
        <li>
          <Link to="/Blog" className="link">Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
