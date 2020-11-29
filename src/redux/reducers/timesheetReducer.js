import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function timesheetReducer(state = initialState.timesheet, action) {
    switch (action.type) {
        case types.LOAD_TIMESHEET_SUCCESS:
            return action.timesheet;
        default:
            return state;
    }
}