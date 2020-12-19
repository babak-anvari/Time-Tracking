import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimesheetInformation = ({ weekEnd, getTimesheet }) => {
    return (
        <>
            <p>Select week end date</p>
            < DatePicker
                selected={weekEnd}
                closeOnScroll={true}
                showWeekNumbers
                filterDate={date => (date.getDay() == 6)}
                onChange={selectedDate => getTimesheet(selectedDate)}
            /><br /><br />
        </>
    )
}

TimesheetInformation.propTypes = {
    weekEnd: PropTypes.object,
    getTimesheet: PropTypes.func.isRequired,
};

export default TimesheetInformation;