import React from 'react';
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
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemList />
        </Route>
        <Route exact path="/cart">
          <Cart />
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
