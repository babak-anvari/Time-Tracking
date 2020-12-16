import TimesheetModel from './models/timesheet';
import * as projectDataAccess from './project';
import { connectdb, disConnectdb } from './database';
import { Timesheet } from '../entities/timesheet';


//Create new timesheet
export const create = async weeklyHours => {
  connectdb();
  weeklyHours = await addProjectId(weeklyHours);
  let timesheetInfo = new TimesheetModel(weeklyHours);
  timesheetInfo = await timesheetInfo.save();
  let timesheet = await TimesheetModel.populate(timesheetInfo, 'data.projectId');
  return (addProjectNumber(timesheet));
}

//Find timesheet
export const find = async (weekEnding, userId) => {
  connectdb();
  console.log('timesheet-dataaccess-find');
  let timesheet = await TimesheetModel
    .findOne({ weekEnding: weekEnding, userId: userId })
    .populate('data.projectId', 'number');
  return (addProjectNumber(timesheet));
}

//Update timesheet
export const update = async weeklyHours => {
  connectdb();
  console.log('dataAccess');
  let query = { weekEnding: weeklyHours.weekEnding, userId: weeklyHours.userId }
  await TimesheetModel.updateOne(query, { $set: { data: weeklyHours.data } });
  return (find(weeklyHours.weekEnding, weeklyHours.userId));
}

//Add porject number populated inside the project object into the higher level
const addProjectNumber = (timesheet) => {
  if (timesheet) {
    timesheet = JSON.parse(JSON.stringify(timesheet));
    let allRows = timesheet.tasks.map((task) => {
      task.projectNumber = task.projectId.number;
      return (task);
    })
    timesheet.task = allRows;
    return (timesheet);
  }
  else return (null);
}

//Change tasks project numbers to project Ids
const addProjectId = async (weeklyHours) => {
  let projectList = await projectDataAccess.findAll();
  if (weeklyHours) {
    let allRows = weeklyHours.tasks.map((task) => {
      let project = projectList.find(project => project.number == task.projectNumber);
      return ({ ...task, projectId: project._id })
    })
    weeklyHours.tasks = allRows;
    return (weeklyHours);
  }
  else return (null);
}