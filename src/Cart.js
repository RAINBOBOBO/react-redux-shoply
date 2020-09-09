import React from 'react';
import ItemList from './ItemList';

/** Cart
 * 
 *  Props:
 *  - items: object to get passed to ItemList containing objects about an item like
 *    {uuid: {name, description, price, image_url},... }
 * 
 * App -> Cart -> {ItemList, DiscountForm}
 */
function Cart({ items, addItemToCart, removeItemFromCart }) {

  function renderItems() {
    if (Object.keys(items).length === 0) {
      return <p>Your cart is empty!</p>
    } else {
      return <ItemList items={items} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
    }
  }

  return (
    <main>
      {renderItems()}
    </main>
  )

}

export default Cart;