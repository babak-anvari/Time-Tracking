import * as types from "./actionTypes";
import * as userApi from '../../api/userApi'

export const userLoginSuccess = (user) => {
    return { type: types.USER_LOGIN_SUCCESS, user }
}

export function userLogin(user) {
    return function (dispatch) {
        return userApi
            .userLogin(user)
            .then(user => {
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(userLoginSuccess(user));
            })
            .catch(error => {
                throw error;
            })
    };
}