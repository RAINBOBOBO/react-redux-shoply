import React from 'react';
import Item from './Item';

/** ItemList
 * 
 *  Props:
 *  - items: object containing objects about an item like
 *    {uuid: {name, description, price, image_url},... }
 * 
 * App -> ItemList -> Item
 */
function ItemList({ items, addItemToCart, removeItemFromCart }) {

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