import { combineReducers } from "redux";
import usersReducer from "./users/UserReducers";


const rootReducers = combineReducers({
    usersDetails : usersReducer
})

export default rootReducers;