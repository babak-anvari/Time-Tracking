import { model, Schema } from 'mongoose';

const ActionModel = model(
    "actions",
    new Schema({
        actions: [
            { name: String }
        ]
    })
);

export default ActionModel;