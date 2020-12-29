const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    weekEnd: Date,
    weekEnding: {
        year: Number,
        month: Number,
        day: Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    tasks: [
        {
            date: Date,
            projectId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "projects"
            },
            activity: String,
            category: String,
            transactionText: String,
            detail: String,
            actionId: Number,
            hour: Number,
        }
    ]
})

schema.index({ 'weekEnding': 1, 'userId': 1 }, { "unique": true });
const TimesheetModel = mongoose.model("timesheets", schema);

module.exports = TimesheetModel;