import inventory from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const INITIAL_STATE = {
  inventory: Object.entries(inventory.products),
  cart: []
}

function rootReducer(state = INITIAL_STATE, action) {
  console.log(INITIAL_STATE.inventory)
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.payload]};

    case REMOVE_FROM_CART:
      return {...state, cart: state.cart.filter(item => (item.id !== action.payload.id))};
    
    default:
      return state;
  }
}

export default rootReducer;