import { combineReducers } from "redux";
import timesheet from './timesheetReducer';
import user from './userReducer';
import projects from './projectReducer';
import actions from './actionReducer';

const rootReducer = combineReducers({
    timesheet,
    user,
    projects,
    actions
});

export default rootReducer;