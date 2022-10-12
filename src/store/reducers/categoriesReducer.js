const defaultState = {
    main_categories: null,
    category_list: null,
    loading: false, 
    message: ''
}


export const categoriesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "GET_MAIN_CATEGORY_START":
        case "GET_CATEGORY_START":
            return {...state, loading: true, message: ''}
        case "GET_MAIN_CATEGORY_SUCCESS":
            return {...state, loading: false, main_categories: action.payload, message: ''}
        case "GET_CATEGORY_SUCCESS":
            return {...state, loading: false, category_list: action.payload, message: ''}

        case "GET_MAIN_CATEGORY_ERROR":
        case "GET_CATEGORY_ERROR":
            return {...state, loading: false, message: 'Xeta bas verdi...'}
        default: return state;
    }
}

