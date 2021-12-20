import { combineReducers } from "redux";
import personalReducer from "./personalReducer";

//call reducer
const rootReducer = combineReducers({
    styleList: personalReducer,
});
export default rootReducer;