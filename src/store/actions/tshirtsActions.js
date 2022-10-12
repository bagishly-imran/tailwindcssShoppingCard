import api from "../../api/api"


export const getTshirts = () => async (dispatch) => {
    dispatch({type: "GET_THSIRTS_START"})
    try {
        const response = await api().get('/tshirts');
        dispatch({type: "GET_THSIRTS_SUCCESS", payload: response.data})
        
    } catch {
        dispatch({type: "GET_THSIRTS_ERROR"})
    }
}

export const getTshirtsId = (id) => async (dispatch) => {
    dispatch({type: "GET_THSIRTS_ID_START"})
    try {
        const response = await api().get(`/tshirts/${id}`);
        dispatch({type: "GET_THSIRTS_ID_SUCCESS", payload: response.data})
        
    } catch {
        dispatch({type: "GET_THSIRTS_ID_ERROR"})
    }
}


