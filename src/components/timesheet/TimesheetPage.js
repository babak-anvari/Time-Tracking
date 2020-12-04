import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { loadTimesheet, saveTimesheet } from '../../redux/actions/timesheetActions';
import PropTypes from "prop-types";
import TimesheetTable from './TimesheetTable';
import TimesheetInformation from './TimesheetInformation';
import validateTable from '../../utils/validateTable';
import TimesheetErrors from './TimesheetErrors';

function TimesheetPage({ timesheet, loadTimesheet, saveTimesheet }) {

    let [tasks, setTasks] = useState(timesheet.tasks);
    let [date, setDate] = useState(new Date());
    let [errors, setErrors] = useState([]);

    useEffect(() => {
        setTasks(addRowNumber(timesheet.tasks));
    }, [timesheet])

    const handleChange = (id, e) => {
        let { name, value } = e.target;
        value = (name === 'hour') ? parseInt(value, 10) : value;
        setTasks(tasks.map(task => task.id == id ? { ...task, [name]: value } : task));
    }

    const addTask = () => {
        setTasks(addRowNumber([...tasks, {
            date: new Date().toISOString(),
            projectId: '',
            hour: 0
        }]));
    }

    const deleteTask = (rowNumber) => {
        setTasks(addRowNumber(tasks.filter((task) => task.rowNumber !== rowNumber)));
    }

    const getTimesheet = (e) => {
        e.preventDefault();
        loadTimesheet();
    }

    const save = (e) => {
        e.preventDefault();
        let tableError = validateTable(tasks)
        if (tableError == null) {
            setErrors([]);
            // timesheet.tasks = tasks;
            saveTimesheet({ ...timesheet, tasks });
        }
        else { setErrors(tableError) }
    }

    return (
        <div>
            <TimesheetInformation
                date={date}
                setDate={setDate}
                getTimesheet={getTimesheet}
            /><br /><br /><br />
            {tasks.length !== 0 &&
                <TimesheetTable
                    tasks={(tasks)}
                    addRow={addTask}
                    deleteRow={deleteTask}
                    saveTable={save}
                    handleChange={handleChange}
                />
            }<br /><br /><br />
            {errors.length !== 0 &&
                <TimesheetErrors
                    errors={errors}
                />
            }
        </div>
    )
}

TimesheetPage.propTypes = {
    timesheet: PropTypes.object.isRequired,
    loadTimesheet: PropTypes.func.isRequired,
    saveTimesheet: PropTypes.func.isRequired
};

//add row number and row unique id
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

const mapDispatchToProps = { loadTimesheet, saveTimesheet };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimesheetPage);