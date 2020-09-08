import inventory from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const INITIAL_STATE = {
  inventory: inventory.products,
  cart: {},
  cartTotal: 0
}
/**
 * State: 
 * - inventory: {uuid: {name, description, price, image_url},... }
 * - cart: {uuid: {name, description, price, image_url}, ...}
 */
function rootReducer(state = INITIAL_STATE, action) {
  // console.log(INITIAL_STATE.inventory)
  const itemId = action.payload?.id;
  const itemData = action.payload?.itemData;
  switch (action.type) {

    case ADD_TO_CART:
      if (!(itemId in state.cart)) {
        const newItem = { ...itemData, count: 1 }
        console.log('newItem:', newItem);
        return ({
          ...state,
          cart: { ...state.cart, [itemId]: newItem },
          cartTotal: state.cartTotal + itemData.price
        });
      } else {
        return ({
          ...state,
          cart: { ...state.cart, [itemId]: { ...itemData, count: state.cart[itemId].count + 1 } },
          cartTotal: state.cartTotal + itemData.price
        });
      }
    // TODO: handle case in which we remove items with count > 1
    case REMOVE_FROM_CART:
      if (itemId in state.cart) {
        if (state.cart[itemId].count === 1) {
          const cartCopy = { ...state.cart }
          // console.log("this is cartCopy before delete", cartCopy)
          delete cartCopy[itemId];
          // console.log("this is cartCopy after delete", cartCopy)
          // console.log("returning", { ...state, cart: cartCopy })
          return { ...state, cart: cartCopy };
        } else {
          console.log("count > 1, returning", {
            ...state,
            cart: {...state.cart, [itemId]: { ...state.cart[itemId], count: state.cart[itemId].count - 1 }},
            cartTotal: state.cartTotal - itemData.price
          })
          return ({
            ...state,
            cart: {...state.cart, [itemId]: { ...state.cart[itemId], count: state.cart[itemId].count - 1 }},
            cartTotal: state.cartTotal - itemData.price
          });
        }
      } else {
        return state;
      }
    
    default:
      return state;
  }
}


  export default rootReducer;