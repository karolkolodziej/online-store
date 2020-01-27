import { ADD_PRODUCT } from "../constants/constants";

export const addProductAction = (title, price) => {
  return {
    type: ADD_PRODUCT,
    payload: [title, price]
  };
};
