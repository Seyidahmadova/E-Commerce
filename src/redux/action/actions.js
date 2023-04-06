import { ACTION_TYPES } from "../action/actionTypes";

export const addCartAction = (id, title, price, photo, subtotal) => {
  return {
    type: ACTION_TYPES.ADD_CART,
    products: { Id: id, Title: title, Price: price, Photo: photo, Subtotal: subtotal },
  };
};
export const removeCartAction = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_CART,
    products: { Id: id },
  };
};
