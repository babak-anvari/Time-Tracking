import React from 'react';
import { connect } from 'react-redux';
import { loadTimesheet } from '../../redux/actions/timesheetActions';
import PropTypes from "prop-types";

function TimesheetPage({ timesheet, loadTimesheet }) {
    console.log(timesheet);
    return (
        <div>
            <p>Timesheet under development</p><br />
            <button onClick={loadTimesheet}>Load Timesheet</button>
            <p>{timesheet.userId}</p>
        </div>
    )
}

TimesheetPage.propTypes = {
    timesheet: PropTypes.object.isRequired,
    loadTimesheet: PropTypes.func.isRequired
};

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