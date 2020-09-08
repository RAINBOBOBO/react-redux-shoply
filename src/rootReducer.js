import inventory from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const INITIAL_STATE = {
  inventory: inventory.products,
  cart: {}
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
          cart: { ...state.cart, [itemId]: newItem }
        });
      } else {
        return ({
          ...state,
          cart: { ...state.cart, [itemId]: { ...itemData, count: state.cart[itemId].count + 1 } }
        });
      }
    // TODO: handle case in which we remove items with count > 1
    case REMOVE_FROM_CART:
      if (itemId in state.cart) {
        let stateCopy = {...state};

        if (stateCopy.cart[itemId].count === 1) {
          const cartCopy = { ...stateCopy.cart }
          delete cartCopy.itemId;
          return { stateCopy, cart: cartCopy };
        } else {
          return ({
            ...state,
            cart: {...state.cart, [itemId]: { ...itemData, count: state.cart[itemId].count - 1 }}
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