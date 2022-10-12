const defaultState  = {
    my_basket: [],
}



export const basketReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_TO_NEW_BASKET":
            return {
            ...state, my_basket: [...state.my_basket, action.payload] 
        }
        case "ADD_TO_BASKET_QUANTITY":
            return {...state, 
                    my_basket: [...state.my_basket.map(basket => 
                    basket.id === action.payload.id ? 
                    {...basket, count: (basket.count + action.payload.count) } : basket)] 
                }
        case "DECREMENT_TO_BASKET_QUANTITY":
            return {...state, 
                my_basket: [...state.my_basket.map(basket => 
                basket.id === action.payload.id ? 
                {...basket, count: (basket.count - action.payload.count) } : basket)] 
            }
        case "DELETE_PRODUCT":
            return {...state, my_basket: state.my_basket.filter(basket => basket.id !== action.payload)}
        default: return state;
    }
}

