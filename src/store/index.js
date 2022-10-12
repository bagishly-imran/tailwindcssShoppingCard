import { combineReducers } from "redux";
import { basketReducer } from "./reducers/basketReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { tshirtsReducer } from "./reducers/tshirtsReducers";



const rootReducer = combineReducers({
    categories: categoriesReducer,
    tshirts: tshirtsReducer,
    my_basket: basketReducer,
})


export default rootReducer;