import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import Item from './Item';

/** ItemList
 * 
 *  Props:
 *  - items: object containing objects about an item like
 *    {uuid: {name, description, price, image_url},... }
 * 
 * App -> ItemList -> Item
 */
function ItemList({ items }) {
  const dispatch = useDispatch();
  
  function addItemToCart(id, itemData) {
    dispatch(addToCart(id, itemData))
  }

  function removeItemFromCart(id, itemData) {
    dispatch(removeFromCart(id, itemData))
  }

  function renderItems() {
    let itemsToRender = [];
    for(let item in items) {
      itemsToRender.push(<Item 
        itemData={items[item]} 
        id={item} 
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        key={item}
      />)
    }
    return itemsToRender;
  }


  return(
    <main>
      {renderItems()}
    </main>
  )
}

export default ItemList;