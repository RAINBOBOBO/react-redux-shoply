import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

/** NavBar
 * 
 *  Props:
 *  - cartTotal: Total price of all items in cart
 * 
 * App -> NavBar
 */
function NavBar({ cartTotal }) {
  const activeStyles = {
    fontWeight: "bold",
    color: "#25a18e"
  }

  return(
    <nav className="navbar">
      <NavLink activeStyle={activeStyles} className="nav-item" exact to="/">Store</NavLink>
      <div>
        <p>Your total is: {cartTotal}</p>
        <NavLink activeStyle={activeStyles} className="nav-item" exact to="/cart">Cart</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;