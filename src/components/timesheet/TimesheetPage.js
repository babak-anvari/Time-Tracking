import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { loadTimesheet } from '../../redux/actions/timesheetActions';
import PropTypes from "prop-types";
import TimesheetTable from './TimesheetTable';

function TimesheetPage({ timesheet, loadTimesheet }) {

    const [tasks, setTasks] = useState(timesheet.data);

    useEffect(() => {
        setTasks(addRowNumber(timesheet.data));
    }, [timesheet])

    const handleChange = (id, e) => {
        console.log(e.target);
        let { name, value } = e.target;
        setTasks((tasks.map((task) => {
            return task.id == id ? { ...task, [name]: value } : task;
        })));
    }

    const addTask = () => {
        setTasks(addRowNumber([...tasks, {
            date: new Date(),
            projectId: '',
            hour: 0
        }]));
    }

    const deleteTask = (rowNumber) => {
        setTasks(addRowNumber(tasks.filter((task) => task.rowNumber !== rowNumber)));
    }

    return (
        <div>
            <TimesheetTable
                tasks={(tasks)}
                loadTable={loadTimesheet}
                addRow={addTask}
                deleteRow={deleteTask}
                handleChange={handleChange}
            />
        </div>
    )
}

TimesheetPage.propTypes = {
    timesheet: PropTypes.object.isRequired,
    loadTimesheet: PropTypes.func.isRequired
};

const addRowNumber = (tableData) => {
    return tableData.map((row, index) => {
        if (row.id == null) row = { ...row, id: uuid() };
        return { ...row, rowNumber: index + 1 };
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