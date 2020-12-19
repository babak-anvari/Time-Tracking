import TimesheetModel from './models/timesheet';
import { connectdb } from './database';


export const create = async weeklyHours => {
  connectdb();
  let timesheetInfo = new TimesheetModel(weeklyHours);
  return await timesheetInfo.save();
}

export const find = async (weekEnding, userId) => {
  connectdb();
  return await TimesheetModel
    .findOne({ weekEnding: weekEnding, userId: userId })
}

export const update = async weeklyHours => {
  connectdb();
  let query = { weekEnding: weeklyHours.weekEnding, userId: weeklyHours.userId };
  await TimesheetModel.updateOne(query, { $set: { tasks: weeklyHours.tasks } });
  return (find(weeklyHours.weekEnding, weeklyHours.userId));
}