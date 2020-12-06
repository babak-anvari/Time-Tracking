import { combineReducers } from "redux";
import timesheet from './timesheetReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    timesheet,
    user,
});

export default rootReducer;