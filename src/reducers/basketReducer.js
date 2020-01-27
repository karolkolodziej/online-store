import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants/constants";

export default (basketList = [], action) => {
  if (action.type === ADD_PRODUCT) {
    return [...basketList, action.payload];
  } else if (action.type === REMOVE_PRODUCT) {
    return action.payload;
  }
  return basketList;
};
