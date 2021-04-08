import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup } from "react-bootstrap";

const TimesheetInformation = ({ weekEnd, getTimesheet }) => {
    return (
        <>
            <h4>TimeSheet Information</h4>
            <hr></hr>
            <p>Select week end date</p>

            <InputGroup className="mb-3">
                <DatePicker className="form-control width-100"
                    selected={weekEnd}
                    closeOnScroll={true}
                    showWeekNumbers
                    filterDate={date => (date.getDay() == 6)}
                    onChange={selectedDate => getTimesheet(selectedDate)}
                />
            </InputGroup>
        </>
    )
}

TimesheetInformation.propTypes = {
    weekEnd: PropTypes.object,
    getTimesheet: PropTypes.func.isRequired,
};

export default TimesheetInformation;