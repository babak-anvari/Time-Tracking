import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimesheetInformation = ({ date, setDate, getTimesheet }) => {
    return (
        < form onSubmit={getTimesheet}>
            <p>Select weekending date</p>
            < DatePicker
                selected={date}
                closeOnScroll={true}
                onChange={selectedDate => setDate(selectedDate)}
            /><br /><br />
            <button type='submit'>Get Timesheet</button>
        </form >
    )
}

TimesheetInformation.propTypes = {
    date: PropTypes.object.isRequired,
    setDate: PropTypes.func.isRequired,
    getTimesheet: PropTypes.func.isRequired,
};

export default TimesheetInformation;