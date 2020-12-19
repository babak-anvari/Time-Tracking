import ProjectModel from './models/project';
import { connectdb, disConnectdb } from './database';
import { Project } from '../entities/project';


export const create = async (projectInfo) => {
    connectdb();
    let project = new ProjectModel(projectInfo);
    await project.save();
    return (project);
}

export const find = async (projectNumber) => {
    connectdb();
    let projectInfo = await ProjectModel.findOne({ number: projectNumber });
    let project = projectInfo ? new Project(projectInfo) : null;
    return project;
}

export const update = async (projectInfo) => {
    connectdb();
    return await ProjectModel.findByIdAndUpdate(
        { _id: projectInfo._id },
        {
            number: projectInfo.number,
            address: projectInfo.address,
        },
        { new: true }
    );
}

export const findAll = async () => {
    connectdb();
    return await ProjectModel.find({});
}