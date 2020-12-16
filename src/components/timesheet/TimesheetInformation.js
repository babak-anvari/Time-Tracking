import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimesheetInformation = ({ weekEnd, setWeekEnd, getTimesheet }) => {
    return (
        < form onSubmit={getTimesheet}>
            <p>Select weekending date</p>
            < DatePicker
                selected={weekEnd}
                closeOnScroll={true}
                showWeekNumbers
                filterDate={date => (date.getDay() == 6)}
                onChange={selectedDate => setWeekEnd(selectedDate)}
            /><br /><br />
            <button type='submit'>Get Timesheet</button>
        </form >
    )
}

TimesheetInformation.propTypes = {
    weekEnd: PropTypes.object.isRequired,
    setWeekEnd: PropTypes.func.isRequired,
    getTimesheet: PropTypes.func.isRequired,
};

export default TimesheetInformation;