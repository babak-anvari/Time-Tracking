import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { loadTimesheet, saveTimesheet } from '../../redux/actions/timesheetActions';
import { loadProjects } from '../../redux/actions/projectActions'
import PropTypes from "prop-types";
import TimesheetTable from './TimesheetTable';
import TimesheetInformation from './TimesheetInformation';
import validateTasks from './validateTasks';
function TimesheetPage({ timesheet, projects, loadTimesheet, saveTimesheet, loadProjects }) {
    let [tasks, setTasks] = useState(timesheet.tasks);
    let [date, setDate] = useState(new Date());
    let [errors, setErrors] = useState([]);

    useEffect(() => {
        setTasks(addRowNumber(timesheet.tasks));
    }, [timesheet])

    const getTimesheet = (e) => {
        e.preventDefault();
        loadTimesheet();
        loadProjects();
    }

    const handleChange = (id, e) => {
        let { name, value } = e.target;
        value = (name === 'hour') ? parseInt(value, 10) : value;
        setTasks(tasks.map(task => task.id == id ? { ...task, [name]: value } : task));
    }

    const addTask = () => {
        setTasks(addRowNumber([...tasks, {
            date: new Date().toISOString(),
            number: '',
            hour: 0
        }]));
    }

    const deleteTask = (rowNumber) => {
        setTasks(addRowNumber(tasks.filter((task) => task.rowNumber !== rowNumber)));
    }

    const save = () => {
        let tableErrors = validateTasks(tasks, projects);
        if (tableErrors.length == 0) saveTimesheet({ ...timesheet, tasks });
        setErrors(tableErrors);
    }

    const findError = (taskId, propertyName) => {
        let error = errors.find(error => error.id == taskId);
        return (error !== undefined) ? error[propertyName] : null;
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
                    projectList={projects}
                    findError={findError}
                    handleChange={handleChange}
                    addRow={addTask}
                    deleteRow={deleteTask}
                    saveTable={save}
                />
            }
        </div>
    )
}

TimesheetPage.propTypes = {
    timesheet: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    loadTimesheet: PropTypes.func.isRequired,
    saveTimesheet: PropTypes.func.isRequired,
    loadProjects: PropTypes.func.isRequired
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
        timesheet: state.timesheet,
        projects: state.projects
    };
}

const mapDispatchToProps = { loadTimesheet, saveTimesheet, loadProjects };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimesheetPage);