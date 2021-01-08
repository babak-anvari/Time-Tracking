import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function actionReducer(state = initialState.actions, action) {
    switch (action.type) {
        case types.LOAD_ACTIONS_SUCCESS:
            return action.actions;
        case types.SAVE_ACTIONS_SUCCESS:
            return action.actions;
        default:
            return state;
    }
}