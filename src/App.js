import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import ItemList from './ItemList';
import Cart from './Cart';
import ItemDetail from './ItemDetail';

/** App
 * 
 *  App -> {Cart, ItemList, ItemDetail}
 */
function App() {
  const inventory = useSelector(store => store.inventory);
  const cart = useSelector(store => store.cart);
  const cartTotal = useSelector(store => store.cartTotal);
  return (
    <div className="container">
      <NavBar cartTotal={cartTotal} />
      <Switch>
        <Route exact path="/">
          <ItemList items={inventory} />
        </Route>
        <Route exact path="/cart">
          <Cart items={cart} />
        </Route>
        <Route path="/products/:id" >
          <ItemDetail />
        </Route>
        <Route>
          <p>Not Found.</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
