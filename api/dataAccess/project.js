import ProjectModel from './models/project';
import { connectdb } from './database';
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
            actions: projectInfo.actions
        },
        {
            new: true,
            useFindAndModify: false
        }
    );
}

// export const update = async projectInfo => {
//     connectdb();
//     console.log(projectInfo);
//     let query = { _id: projectInfo._id };
//     await ProjectModel.updateOne(query, { $set: { actions: projectInfo.actions } });
//     return (find(projectInfo._id));
// }

export const findAll = async () => {
    connectdb();
    return await ProjectModel.find({});
}