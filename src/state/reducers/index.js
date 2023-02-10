import { combineReducers } from "redux";
import StateReducer from "./stateReducer";

const reducers = combineReducers({
    amount:StateReducer
})

export default reducers