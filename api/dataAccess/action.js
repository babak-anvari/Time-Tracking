import ActionModel from './models/action';
import { connectdb } from './database';

export const find = async () => {
    connectdb();
    let actions = await ActionModel.findOne();
    return actions ? actions : null;
}

export const create = async (actions) => {
    connectdb();
    actions = new ActionModel(actions);
    await actions.save();
    return (actions);
}

export const update = async (actions) => {
    connectdb();
    await ActionModel.updateMany(
        {},
        {
            $set: {
                actions: actions.actions
            }
        }
    );
    return find();
}