import { ACTION_TYPES } from "../action/actionTypes";
import { combineReducers } from 'redux';

const initialState = {
  products: [{ Id: "", Pitle: "", Price: "", Photo: "" }],
};

export function Reducers(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_CART:
      const findInCart = state.products.find(
        (item) => item.Id === action.products.Id
      );
      return findInCart !== undefined
        ? state
        : {
            ...state,
            products: [...state.products, action.products],
          };
    case ACTION_TYPES.REMOVE_CART:
        return {
            ...state,
            products: [
                ...state.products.filter((item)=>
                    item.Id !== action.products.Id
                )
            ]
        }
    default:
        return state;
  }
}

export const reducers = combineReducers({
  add: Reducers
});