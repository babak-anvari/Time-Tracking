import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function projectReducer(state = initialState.projects, action) {
    switch (action.type) {
        case types.loadProjectsSuccess:
            return action.projects;
        case types.saveProjectSuccess:
            return [...state, action.project];
        case types.UPDATE_PROJECT_SUCCESS:
            state = state.map(project => {
                if (project._id == action.project._id) {
                    project = { ...project, ...action.project }
                }
                return project;
            })
            return (state)
        default:
            return state;
    }
}