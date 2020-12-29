import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import ProjectInput from '../common/ProjectInput';
import HourInput from '../common/HourInput';
import parseISO from 'date-fns/parseISO';

const TimesheetTable = ({ tasks, projectList, addRow, deleteRow, saveTable, handleChange, findError }) => (
    <>
        <table className="table">
            <thead>
                <tr>
                    <th>Task Number</th>
                    <th>Date</th>
                    <th>Project</th>
                    <th>Action</th>
                    <th>Hour</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.id} >
                        <td>{task.rowNumber}</td>
                        <td>
                            <DatePicker
                                selected={parseISO(task.date)}
                                closeOnScroll={true}
                                onChange={(date) => handleChange(
                                    { target: { name: 'date', value: date.toISOString() } }, task.id
                                )}
                            />
                        </td>
                        <td>
                            <ProjectInput
                                projectList={projectList}
                                Inputvalue={task.projectNumber}
                                handleChange={handleChange}
                                error={findError(task.id, 'projectNumberError')}
                                taskId={task.id}
                            />
                        </td>
                        <td>
                            <ProjectInput
                                projectList={projectList}
                                Inputvalue={task.projectNumber}
                                handleChange={handleChange}
                                error={findError(task.id, 'projectNumberError')}
                                taskId={task.id}
                            />
                        </td>
                        <td>
                            <HourInput
                                Inputvalue={task.hour}
                                handleChange={handleChange}
                                error={findError(task.id, 'hourError')}
                                taskId={task.id}
                            />
                        </td>
                        <td>
                            <textarea
                                name='detail'
                                type="text"
                                onChange={(e) => handleChange(e, task.id)}
                                value={task.detail}
                            />
                        </td>
                        <td>
                            <button onClick={() => deleteRow(task.rowNumber)} className='btn btn-dark btn-sm'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
        <button type='button' onClick={saveTable} className='btn btn-primary btn-st'>Save</button><br /><br />
        <button type='button' onClick={addRow} className='btn btn-primary btn-st'>Add Task</button>
    </>
)

TimesheetTable.propTypes = {
    tasks: PropTypes.array.isRequired,
    projectList: PropTypes.array.isRequired,
    findError: PropTypes.func.isRequired,
    addRow: PropTypes.func.isRequired,
    deleteRow: PropTypes.func.isRequired,
    saveTable: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TimesheetTable;