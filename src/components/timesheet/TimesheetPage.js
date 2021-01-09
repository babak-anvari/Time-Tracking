import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { loadTimesheet, saveTimesheet } from '../../redux/actions/timesheetActions';
import { loadProjects } from '../../redux/actions/projectActions'
import PropTypes from "prop-types";
import TimesheetTable from './TimesheetTable';
import TimesheetInformation from './TimesheetInformation';
import validateTasks from './validateTasks';
import { loadActions } from '../../redux/actions/actionItemsActions';
function TimesheetPage({ timesheet, projects, actions, loadTimesheet, saveTimesheet, loadProjects, loadActions }) {
    let [tasks, setTasks] = useState(timesheet.tasks);
    let [weekEnd, setWeekEnd] = useState(null);
    let [errors, setErrors] = useState([]);
    let [actionItems, setActionItems] = useState([]);

    useEffect(() => {
        loadActions();
    }, [])

    useEffect(() => {
        setActionItems(actions.actions);
    }, [actions])

    useEffect(() => {
        loadProjects();
    }, [])

    useEffect(() => {
    }, [projects])

    useEffect(() => {
        if (timesheet.tasks && timesheet.tasks.length !== 0) {
            setTasks(setupTasks(timesheet.tasks));
        }
        else {
            setTasks(setupTasks([newTask]));
        }
    }, [timesheet])

    const getTimesheet = (weekEnd) => {
        loadTimesheet(weekEnd);
        setWeekEnd(weekEnd)
    }

    const save = () => {
        let tableErrors = validateTasks(tasks, projects);
        if (tableErrors.length == 0) {
            timesheet = {
                ...timesheet,
                weekEnd,
                userId: JSON.parse(localStorage.getItem('user'))._id,
                tasks
            }
            saveTimesheet(timesheet);
        }
        setErrors(tableErrors);
    }

    const handleChange = (e, id) => {
        let { name, value } = e.target;
        let projectId = null;
        // value = (name === 'hour') ? parseInt(value, 10) : value;
        if (name === 'projectNumber') {
            let selectedProject = projects.find(project => project.number == value);
            projectId = (selectedProject) ? selectedProject._id : null;
        }
        if (projectId) {
            setTasks(tasks.map(task => task.id == id ? { ...task, [name]: value, projectId } : task));
        }
        else {
            setTasks(tasks.map(task => task.id == id ? { ...task, [name]: value } : task));
        }
    }

    const addTask = () => {
        setTasks(setupTasks([...tasks, newTask]));
    }

    const deleteTask = (rowNumber) => {
        setTasks(setupTasks(tasks.filter((task) => task.rowNumber !== rowNumber)));
    }

    const findError = (taskId, propertyName) => {
        let error = errors.find(error => error.id == taskId);
        return (error !== undefined) ? error[propertyName] : null;
    }

    //Add row number, row unique id and project number
    const setupTasks = (tasks) => {
        return tasks.map((task, index) => {
            if (!task.id) task = { ...task, id: uuid() }
            let project = projects.find(project => project._id == task.projectId)
            if (project) {
                task = { ...task, projectNumber: project.number }
            }
            return { ...task, rowNumber: index + 1 };
        })
    }

    return (
        <div className='jumbotron'>
            <TimesheetInformation
                weekEnd={weekEnd}
                getTimesheet={getTimesheet}
            /><br /><br /><br />
            {weekEnd &&
                <TimesheetTable
                    tasks={(tasks)}
                    projectList={projects}
                    actionItems={actionItems}
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
    actions: PropTypes.object,
    loadTimesheet: PropTypes.func.isRequired,
    saveTimesheet: PropTypes.func.isRequired,
    loadProjects: PropTypes.func.isRequired,
    loadActions: PropTypes.func.isRequired
};

let newTask = {
    date: new Date().toISOString(),
    projectNumber: '',
    hour: 0
}

function mapStateToProps(state) {
    return {
        timesheet: state.timesheet,
        projects: state.projects,
        actions: state.actions
    };
}

const mapDispatchToProps = { loadTimesheet, saveTimesheet, loadProjects, loadActions };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimesheetPage);