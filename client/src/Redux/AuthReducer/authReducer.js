import { getLocalData } from "../../Utils/localStorage";
import * as types from './actionTypes'

const inState = {

    isAuth: getLocalData("InstaToken") ? true : false,
    InstaToken: getLocalData("InstaToken"),
    isLoading: false,
    isError: false

}

export const authReducer = (state = inState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.SINGUP_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.SINGUP_SUCCESS: {
            console.log(payload, "Response in reducer")
            return {
                ...state,
                isLoading: false,
                
            }
        }

        case types.SINGUP_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case types.LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.LOGIN_SUCCESS: {
            console.log(payload, "Response in reducer")
            return {
                ...state,
                isLoading: false,
                payload
            }
        }

        case types.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state


    }
}