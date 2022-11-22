import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

// Combine reducers will combine different reducers into one root reducer to manage different reducers
// key => name of reducer and value => actual reducer function
export const rootReducer = combineReducers({
    user: userReducer,
});
