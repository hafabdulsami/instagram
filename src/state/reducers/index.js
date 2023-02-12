import { combineReducers } from "redux";
import StateReducer from "./stateReducer";

const reducers = combineReducers({
    Owner:StateReducer
})

export default reducers