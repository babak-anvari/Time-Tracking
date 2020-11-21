import { combineReducers } from "redux";
import timesheet from './timesheetReducer';

const rootReducer = combineReducers({
    timesheet,
});

export default rootReducer;