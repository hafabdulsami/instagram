import { combineReducers } from "redux";
import StateReducer from "./stateReducer";

const reducers = combineReducers({
    User:StateReducer
})

export default reducers