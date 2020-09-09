import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import ItemList from './ItemList';
import Cart from './Cart';
import ItemDetail from './ItemDetail';
import { addToCart, removeFromCart } from './actions';

/** App
 * 
 *  App -> {Cart, ItemList, ItemDetail}
 */
function App() {
  const inventory = useSelector(store => store.inventory);
  const cart = useSelector(store => store.cart);
  const cartTotal = useSelector(store => store.cartTotal);

  const dispatch = useDispatch();
  
  function addItemToCart(id, itemData) {
    dispatch(addToCart(id, itemData))
  }

  function removeItemFromCart(id, itemData) {
    dispatch(removeFromCart(id, itemData))
  }


  return (
    <div className="container">
      <NavBar cartTotal={cartTotal} />
      <Switch>
        <Route exact path="/">
          <ItemList items={inventory} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
        </Route>
        <Route exact path="/cart">
          <Cart items={cart} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
        </Route>
        <Route path="/products/:id" >
          <ItemDetail items={inventory} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
        </Route>
        <Route>
          <p>Not Found.</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
