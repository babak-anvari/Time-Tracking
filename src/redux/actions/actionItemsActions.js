import * as types from "./actionTypes";
import * as actionApi from '../../api/actionApi'
import handleError from './handleError';

export const loadActionsSuccess = (actions) => {
    return { type: types.LOAD_ACTIONS_SUCCESS, actions }
}

export const saveActionsSuccess = (actions) => {
    return { type: types.SAVE_ACTIONS_SUCCESS, actions }
}

export function loadActions() {
    return function (dispatch) {
        return actionApi
            .loadActions()
            .then(actions => {
                dispatch(loadActionsSuccess(actions));
            })
            .catch(handleError)
    };
}

export function saveActions(actions) {
    return function (dispatch) {
        return actionApi
            .saveActions(actions)
            .then(actions => {
                dispatch(saveActionsSuccess(actions));
            })
            .catch(handleError)
    };
}