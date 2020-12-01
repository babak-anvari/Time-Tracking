import React from "react";
import PropTypes from "prop-types";

const TimesheetErrors = ({ errors }) => (
    <>
        <h5>Some of the timesheet entries need to be corrected:</h5>
        {errors.map(error => (
            <p key={error.id}>Task number {error.rowNumber}: {error.message}</p>
        ))}
    </>
);

TimesheetErrors.propTypes = {
    errors: PropTypes.array.isRequired
};

export default TimesheetErrors;