import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/authReducer";
import { homeReducer } from "./HomeReducer/homeReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    home: homeReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const Store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)));