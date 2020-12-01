import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimesheetTable = ({ tasks, addRow, deleteRow, saveTable, handleChange }) => (
    <>
        <form onSubmit={saveTable}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Task Number</th>
                        <th>Date</th>
                        <th>Project</th>
                        <th>Hour</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id} >
                            <td>{task.rowNumber}</td>
                            <td>
                                <DatePicker
                                    selected={task.date}
                                    closeOnScroll={true}
                                    onChange={(date) => handleChange(
                                        task.id, { target: { name: 'date', value: date } }
                                    )}
                                />
                            </td>
                            <td><input name='projectId' value={task.projectId} onChange={(e) => handleChange(task.id, e)} autoComplete='off' /></td>
                            <td>
                                <input
                                    name='hour'
                                    value={task.hour} onChange={(e) => handleChange(task.id, e)}
                                    autoComplete='off'
                                    style={{ width: "50px" }}
                                >
                                </input>
                            </td>
                            <td><button onClick={() => deleteRow(task.rowNumber)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table >
            <button type='submit'>Save</button>
            <button type='button' onClick={addRow}>Add Task</button><br /><br />
        </form>
    </>
)

TimesheetTable.propTypes = {
    tasks: PropTypes.array.isRequired,
    addRow: PropTypes.func.isRequired,
    deleteRow: PropTypes.func.isRequired,
    saveTable: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TimesheetTable;