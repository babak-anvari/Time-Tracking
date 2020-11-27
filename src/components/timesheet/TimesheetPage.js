import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTimesheet } from '../../redux/actions/timesheetActions';
import PropTypes from "prop-types";
import TimesheetTable from './TimesheetTable';

function TimesheetPage({ timesheet, loadTimesheet }) {

    const [tasks, setTasks] = useState(timesheet.data);

    useEffect(() => {
        setTasks(addRowNumber(timesheet.data));
    }, [timesheet])

    return (
        <div>
            <p>Timesheet under development</p><br />
            <p>{timesheet.userId}</p>
            <TimesheetTable tasks={(tasks)} loadTimesheet={loadTimesheet} />
        </div>
    )
}

TimesheetPage.propTypes = {
    timesheet: PropTypes.object.isRequired,
    loadTimesheet: PropTypes.func.isRequired
};

const addRowNumber = (tableData) => {
    let number = 1;
    return tableData.map((row) => {
        let newRow = { ...row, number: number };
        console.log(number);
        number++;
        return newRow;
    })
}

function mapStateToProps(state) {
    return {
        timesheet: state.timesheet
    };
}

const mapDispatchToProps = { loadTimesheet };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimesheetPage);