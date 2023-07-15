import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootreducer = combineReducers({
    product:productReducer
})

export default rootreducer;