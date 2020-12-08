import { combineReducers } from "redux";
import timesheet from './timesheetReducer';
import user from './userReducer';
import projects from './projectReducer';

const rootReducer = combineReducers({
    timesheet,
    user,
    projects
});

export default rootReducer;