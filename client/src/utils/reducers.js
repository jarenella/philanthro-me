import { useReducer } from 'react';
import {
  UPDATE_NONPROFITS,
  ADD_TO_CART,
  UPDATE_CART_AMOUNT,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    //Update non profits in user's cart, add to cart and add multiple non-profits to cart
    case UPDATE_NONPROFITS:
      return {
        ...state,
        nonProfits: [...action.nonProfits],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.nonProfits],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.nonProfits],
      };
    // Update Cart nonprofits donation amount 
    case UPDATE_CART_AMOUNT:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((nonProfit) => {
          if (action._id === nonProfit._id) {
            nonProfit.amount = action.amount;
          }
          return nonProfit;
        }),
      };

    // Remove product from cart, clean cart, toggle cart
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((nonProfit) => {
        return nonProfit._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };


    // default to return to the updated state of the cart
    default:
      return state;
  }
};

export function useNonProfitReducer(initialState) {
  return useReducer(reducer, initialState);
}
