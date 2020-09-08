import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import Item from './Item';

/** ItemList
 * 
 * App -> ItemList -> Item
 */
function ItemList() {
  const inventory = useSelector(store => store.inventory);
  const dispatch = useDispatch();
  
  function addItemToCart(id, itemData) {
    dispatch(addToCart(id, itemData))
  }

  function removeItemFromCart(id) {
    dispatch(removeFromCart(id))
  }

  function renderItems() {
    let items = [];
    for(let item in inventory) {
      items.push(<Item 
        itemData={inventory[item]} 
        id={item} 
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        key={item}
      />)
    }
    return items;
  }


  return(
    <main>
      {renderItems()}
    </main>
  )
}

export default ItemList;