import { ACTION_TYPES } from "./actionTypes";

export const addCartAction = ( id, title, price, photo, qty ) => {
    return {
        type: ACTION_TYPES.ADD_CART,
        products: { pId: id, pTitle: title, pPrice: price, pPhoto: photo, pQty:qty }
    }
}
export const removeCartAction = ( id ) => {
    return {
        type: ACTION_TYPES.REMOVE_CART,
        products: { pId: id}
    }
}
export const removeAllCartAction = ( id ) => {
    return {
        type: ACTION_TYPES.REMOVE_ALL_CART,
        products: { pId: id }
    }
}
export const increaseQtyAction = ( id ) => {
    return {
        type: ACTION_TYPES.INCREASE_QTY,
        products: { pId: id}
    }
}
export const decreaseQtyAction = ( id ) => {
    return {
        type: ACTION_TYPES.DECREASE_QTY, 
        products: { pId: id }
    }
}