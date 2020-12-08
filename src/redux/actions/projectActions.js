import * as types from "./actionTypes";
import * as projectApi from '../../api/projectApi'

export const loadProjectsSuccess = (projects) => {
    return { type: types.loadProjectsSuccess, projects }
}

export function loadProjects() {
    return function (dispatch) {
        return projectApi
            .loadProjects()
            .then(projects => {
                console.log(projects);
                dispatch(loadProjectsSuccess(projects));
            })
            .catch(error => {
                throw error;
            })
    };
}