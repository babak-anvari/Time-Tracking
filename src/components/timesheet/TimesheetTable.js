import React from "react";
import PropTypes from "prop-types";

const TimesheetTable = ({ tasks, loadTable, deleteRow, handleChange }) => (
    <>
        {/* debugger; */}
        <button onClick={loadTable}>Load Timesheet</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Project</th>
                    {/* <th>Activity</th>
                        <th>Category</th>
                        <th>Transaction Text</th> */}
                    <th>Hours</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.number} >
                        <td><input id={task.number} name='date' value={task.date} onChange={handleChange} /></td>
                        <td><input id={task.number} name='projectId' value={task.projectId} onChange={handleChange} /></td>
                        {/* <td>{task.activity}</td>
                            <td>{task.category}</td>
                            <td>{task.transactionText}</td> */}
                        <td>{task.hour}</td>
                        <td><button onClick={() => deleteRow(task.number)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table >
    </>
)

TimesheetTable.propTypes = {
    tasks: PropTypes.array.isRequired,
    loadTable: PropTypes.func.isRequired,
    deleteRow: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TimesheetTable;