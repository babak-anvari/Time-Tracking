import * as dataAccess from '../dataAccess/project'

export const create = async (projectInfo) => {
    return await dataAccess.create(projectInfo);
}

export const find = async (projectNumber) => {
    return await dataAccess.find(projectNumber);
}

export const update = async (projectInfo) => {
    return await dataAccess.update(projectInfo);
}

export const findAll = async () => {
    return await dataAccess.findAll();
}