import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimesheetTable = ({ tasks, loadTable, addRow, deleteRow, handleChange }) => (
    <>
        <button onClick={loadTable}>Load Timesheet</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Project</th>
                    <th>Hour</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.id} >
                        <td><DatePicker selected={task.date} closeOnScroll={true}
                            onChange={(date) => handleChange(
                                task.id,
                                {
                                    target:
                                        { name: 'date', value: date }
                                })
                            }
                        /></td>
                        <td><input name='projectId' value={task.projectId} onChange={(e) => handleChange(task.id, e)} /></td>
                        <td><input name='hour' value={task.hour} onChange={(e) => handleChange(task.id, e)}></input></td>
                        <td><button onClick={() => deleteRow(task.rowNumber)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table >
        <button onClick={addRow}>Add</button>
    </>
)

TimesheetTable.propTypes = {
    tasks: PropTypes.array.isRequired,
    loadTable: PropTypes.func.isRequired,
    addRow: PropTypes.func.isRequired,
    deleteRow: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TimesheetTable;