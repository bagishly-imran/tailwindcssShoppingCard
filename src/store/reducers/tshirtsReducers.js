
const defaultState = {
    tshirts_list: null,
    tshirt_id: null,
    loading: false,
    message: ''
}


export const tshirtsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'GET_THSIRTS_START':
        case 'GET_THSIRTS_ID_START':
            return {...state, loading: true, message: ''}
        case 'GET_THSIRTS_SUCCESS':
            return {...state, loading: false, tshirts_list: action.payload}
        case 'GET_THSIRTS_ID_SUCCESS':
            return {...state, loading: false, tshirt_id: action.payload}
        case 'GET_THSIRTS_ERROR':
            return {...state, loading: false, message: 'Xeta bas verdi...'}
        case 'GET_THSIRTS_ID_ERROR':
            return {...state, loading: false, message: 'Xeta bas verdi...'}
        default: return state;
    }
}

