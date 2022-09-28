import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/authReducer";

const rootReducer = combineReducers({
    auth: authReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const Store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)));