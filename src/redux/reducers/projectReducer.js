import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function projectReducer(state = initialState.projects, action) {
    switch (action.type) {
        case types.loadProjectsSuccess:
            return action.projects;
        default:
            return state;
    }
}