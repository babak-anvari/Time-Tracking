import * as types from "./actionTypes";
import * as projectApi from '../../api/projectApi'
import handleError from './handleError';

export const loadProjectsSuccess = (projects) => {
    return { type: types.loadProjectsSuccess, projects }
}

export const saveProjectSuccess = (project) => {
    return { type: types.saveProjectSuccess, project }
}

export const UPDATE_PROJECT_SUCCESS = (project) => {
    return { type: types.UPDATE_PROJECT_SUCCESS, project }
}

export function loadProjects() {
    return function (dispatch) {
        return projectApi
            .loadProjects()
            .then(projects => {
                console.log(projects);
                dispatch(loadProjectsSuccess(projects));
            })
            .catch(handleError)
    };
}

export function saveProject(project) {
    return function (dispatch) {
        return projectApi
            .saveProject(project)
            .then(project => {
                dispatch(saveProjectSuccess(project));
            })
            .catch(handleError)
    };
}

export function updateProject(project) {
    return function (dispatch) {
        return projectApi
            .saveProject(project)
            .then(project => {
                dispatch(UPDATE_PROJECT_SUCCESS(project));
            })
            .catch(handleError)
    };
}