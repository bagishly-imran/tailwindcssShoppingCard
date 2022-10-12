import api from "../../api/api"

export const getMainCategoryList = () => async (dispatch) => {
    dispatch({type: "GET_MAIN_CATEGORY_START"})
    try {
        const response = await api().get('/main_category_list')
        dispatch({type: "GET_MAIN_CATEGORY_SUCCESS", payload: response.data})
    } catch {
        dispatch({type: "GET_MAIN_CATEGORY_ERROR"})
    }
}

export const getCategoryList = () => async (dispatch) => {
    dispatch({type: "GET_CATEGORY_START"})
    try {
        const response = await api().get('/category_list')
        dispatch({type: 'GET_CATEGORY_SUCCESS', payload: response.data})
    }catch {
        dispatch({type: "GET_CATEGORY_ERROR"})
    }
} 


