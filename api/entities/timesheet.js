export class Timesheet {
    constructor({ _id, userId, weekEnd, tasks }) {
        this._id = _id;
        this.userId = userId;
        this.tasks = tasks;
        this.weekEnd = weekEnd;
        this.weekEnding = this.weekEnding;
    }
    static deconstructDate(date) {
        date = new Date(date);
        return ({
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        })
    }
}