import { ACTION_TYPES } from "../action/actionTypes";
import { combineReducers } from "redux";

const initialState = {
  products: [{ pId: "", pTitle: "", pPrice: "", pPhoto: [], pQty: "" }],
  total: 0.00,
};

export function ShopReducers(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_CART:
      const findItem = state.products.find(
        (item) => item.pId === action.products.pId
      );
      return findItem !== undefined
        ? {
            ...state,
            ...state.products.map((item) =>
              item.pId === action.products.pId
                ? {
                    ...item,
                  }
                : item
            ),
          }
        : {
            ...state,
            products: [...state.products, action.products],
          };
    case ACTION_TYPES.REMOVE_CART:
      return {
        ...state,
        products: [
          ...state.products.filter((item) => item.pId !== action.products.pId),
        ],
      };
    case ACTION_TYPES.INCREASE_QTY:
      return {
        ...state,
        products: [
          ...state.products.map((item) => {
            return item.pId === action.products.pId
              ? { ...item, pQty: item.pQty + 1 }
              : item;
          }),
        ],
      };
    case ACTION_TYPES.DECREASE_QTY:
      return {
        ...state,
        products: [
          ...state.products.map((item) => {
            return item.pId === action.products.pId
              ? { ...item, pQty: item.pQty === 1 ? 1 : item.pQty - 1 }
              : item;
          }),
        ],
      };
    default:
      return state;
  }
}

export const Reducers = combineReducers ({
    all: ShopReducers, 
})