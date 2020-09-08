import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

/**
 * 
 * - payload: {id, itemData}
 */
export function addToCart(id, itemData) {
  return {
    type: ADD_TO_CART,
    payload: {id, itemData}
  };
}

export function removeFromCart(id, itemData) {
  return {
    type: REMOVE_FROM_CART,
    payload: {id, itemData}
  };
}
