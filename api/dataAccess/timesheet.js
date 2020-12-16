import TimesheetModel from './models/timesheet';
import { connectdb } from './database';


//Create new timesheet
export const create = async weeklyHours => {
  connectdb();
  let timesheetInfo = new TimesheetModel(weeklyHours);
  return await timesheetInfo.save();
}

//Find timesheet
export const find = async (weekEnding, userId) => {
  connectdb();
  return await TimesheetModel
    .findOne({ weekEnding: weekEnding, userId: userId })
}

//Update timesheet
export const update = async weeklyHours => {
  connectdb();
  let query = { weekEnding: weeklyHours.weekEnding, userId: weeklyHours.userId }
  await TimesheetModel.updateOne(query, { $set: { data: weeklyHours.data } });
  return (find(weeklyHours.weekEnding, weeklyHours.userId));
}