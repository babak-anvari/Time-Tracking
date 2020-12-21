import * as types from "./actionTypes";
import * as userApi from '../../api/userApi'

export const userLoginSuccess = (user) => {
    return { type: types.USER_LOGIN_SUCCESS, user }
}

export const userRenewLoginSuccess = (user) => {
    return { type: types.userRenewLoginSuccess, user }
}

export const userSignOutSuccess = () => {
    return { type: types.userSignOutSuccess }
}

export const createUserSuccess = (user) => {
    return { type: types.CREATE_USER_SUCCESS, user }
}

export const updateUserSuccess = (user) => {
    return { type: types.UPDATE_USER_SUCCESS, user }
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

export function userRenewLogin(user) {
    return function (dispatch) {
        dispatch(userRenewLoginSuccess(user));
    }
}

export function userSignOut() {
    return function (dispatch) {
        localStorage.removeItem("user");
        dispatch(userSignOutSuccess());
    }
}

export function createUser(user) {
    return function (dispatch) {
        return userApi
            .createUser(user)
            .then(user => {
                dispatch(createUserSuccess(user));
            })
            .catch(error => {
                throw error;
            })
    };
}

export function updateUser(user) {
    return function (dispatch) {
        return userApi
            .updateUser(user)
            .then(user => {
                dispatch(updateUserSuccess(user));
            })
            .catch(error => {
                throw error;
            })
    };
}