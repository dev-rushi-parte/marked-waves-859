import axios from "axios";
import * as types from './actionTypes'


export const singupRequest = () => {
    return {

        type: types.SINGUP_REQUEST
    }
}

export const singupSuccess = (payload) => {

    return {
        type: types.SINGUP_SUCCESS,
        payload
    }
}

export const singupFailure = (payload) => {
    return {

        type: types.SINGUP_FAILURE,
        payload
    }
}


export const SingupUser = (payload) => async (dispatch) => {
    dispatch(singupRequest());


    return axios.post("http://localhost:8080/user/singup", payload)
        .then((res) => {
console.log(res)
            return dispatch(singupSuccess(res))

        })
        .catch((err) => {

            return singupFailure(err)

        })
}


export const loginRequest = () => ({
    type: types.LOGIN_REQUEST
});

export const loginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload
});

export const loginFailure = (payload) => ({
    type: types.LOGIN_FAILURE,
    payload
})


export const UserLogin = (payload) => async (dispatch) => {

    dispatch(loginRequest());
    const headers = {
        "Content-Type": "application/json",
    };
    return await axios.post("http://localhost:8080/user/login", payload, {
        headers: headers,
    })
        .then((res) => {
            // console.log(res.data, "login")
           return dispatch(loginSuccess(res));

        })
        .catch((err) => {
           return dispatch(loginFailure(err));

        })
}