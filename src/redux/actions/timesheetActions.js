import * as types from "./actionTypes";
import * as timesheetApi from '../../api/timesheetApi'

export const loadTimesheetSuccess = (timesheet) => {
    return { type: types.LOAD_TIMESHEET_SUCCESS, timesheet }
}

export function loadTimesheet() {
    return function (dispatch) {
        return timesheetApi
            .getTimesheet()
            .then((timesheet) => {
                dispatch(loadTimesheetSuccess(timesheet));
            })
            .catch(error => {
                throw error;
            })
    };
}

export function saveTimesheet() {
    return function (dispatch) {
        return timesheetApi
            .saveTimesheet()
            .then((timesheet) => {
                dispatch(loadTimesheetSuccess(timesheet));
            })
            .catch(error => {
                throw error;
            })
    };
}