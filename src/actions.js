import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export function addToCart() {
  return {
    type: ADD_TO_CART
  };
}

export function removeFromCart() {
  return {
    type: REMOVE_FROM_CART
  };
}
