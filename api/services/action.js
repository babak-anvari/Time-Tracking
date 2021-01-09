import * as dataAccess from '../dataAccess/action'
import apiError from '../middleware/apiError';

export const find = async () => {
    return await dataAccess.find();
}

export const create = async (actions) => {
    if (!actions._id) {
        let existingActions = await dataAccess.find();
        if (!existingActions) {
            return await dataAccess.create(actions);
        }
        else {
            apiError('actions ID is not specified', 400);
        }
    }
}

export const update = async (actions) => {
    if (!actions._id) {
        apiError('actions ID is not specified', 400);
    }
    return await dataAccess.update(actions);
}