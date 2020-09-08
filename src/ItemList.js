import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/** ItemList
 * 
 * App -> ItemList -> Item
 */
function ItemList() {
  const inventory = useSelector(store => store.inventory);
  const dispatch = useDispatch();

  // function addToCart()
  return null
}

export default ItemList;