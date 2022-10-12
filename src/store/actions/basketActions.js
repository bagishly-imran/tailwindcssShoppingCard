

export const addToMyBasket = (addToBasket) => (dispatch) => {
    dispatch({type: "ADD_TO_NEW_BASKET", payload: addToBasket})
}

export const addQuantityBasket = (addToBasket) => (dispatch) => {
    dispatch({type: "ADD_TO_BASKET_QUANTITY", payload: addToBasket})
}

export const decrementQuantityBasket = (decrementProductId) => (dispatch) => {
    dispatch({type: "DECREMENT_TO_BASKET_QUANTITY", payload: decrementProductId})
}

export const deleteProductId = (id) => (dispatch) => {
    dispatch({type: "DELETE_PRODUCT", payload: id})
}

