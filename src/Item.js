import React from 'react';

/** Item
 * 
 * Props:
 * - itemData: Object containing info about an item like 
 *  {
      "name": "tv",
      "price": 219.99,
      "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    }
 * 
 * ItemList -> Item
 */
function Item({ itemData }) {
  return(
    <div>
      <h2>{itemData.name}</h2>
      <img src={itemData.image_url} width="200" height="auto" />
      <p>{itemData.price}</p>
    </div>
  )
}

export default Item;