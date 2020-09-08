import React from 'react';

/** Item
 * 
 * Props:
 * - addItemToCart: parent fn to add item to reduxState.cart
 * - removeItemFromCart: parent fn to remove item from  reduxState.cart
 * - id: item's uuid
 * - itemData: Object containing info about an item like 
*       {
          "name": "tv",
          "price": 219.99,
          "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
          "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
        }
 * 
 * ItemList -> Item
 */
function Item({ itemData, id, addItemToCart, removeItemFromCart }) {

  function handleAddToCart(evt) {
    addItemToCart(id, itemData);
  }

  function handleRemoveFromCart(evt) {
    removeItemFromCart(id, itemData);
  }

  function showCount() {
    if (itemData.count) {
      return ` x ${itemData.count}`
    }
  }

  return(
    <div className='Item card'>
      <div className='card-img-top'>
        <img src={itemData.image_url} width="200" height="auto" />
      </div>
      <div className='card-body'>
        <div className='card-title'>
          <h2>{itemData.name}{showCount()}</h2>
        </div>
        <div className='card-text'>
          <p>$ {itemData.price}</p>
          <button onClick={handleAddToCart}>
            <i className="fas fa-cart-plus"></i>
          </button>
          <button onClick={handleRemoveFromCart}>
            <i className="fas fa-cart-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item;