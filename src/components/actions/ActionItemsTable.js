import React from 'react';
import PropTypes from "prop-types";
import { InputGroup, FormControl, Table } from "react-bootstrap";

const ActionItemsTable = ({ actionItems, updateActionItem, addActionItem, saveActionItem }) => (
    <>
        <h4>Project Actions</h4>
        <hr></hr>
        <p>Add actions for projects and assign them to your projects.</p>
        <div className="margin-top-20">
            <button onClick={addActionItem} className='btn btn-primary btn-sm'>Add action</button><br /><br />
        </div>
        <div className="margin-top-20">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Action Number</th>
                        <th>Action Items</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {actionItems.map(action => (
                        <tr key={action.rowId}>
                            <td>{action.rowNumber}</td>
                            <td >
                                <InputGroup className="mb-3">
                                    <FormControl
                                        name='name'
                                        value={action.name}
                                        onChange={e => updateActionItem(e, action.rowId)}
                                    />
                                </InputGroup>
                            </td>
                            <td>
                                <button className='btn btn-sm status-active'>Active</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        <div className="margin-top-50">
            <button onClick={saveActionItem} className='btn btn-primary btn-sm'>Save</button><br /><br />
        </div>
    </>
)

ActionItemsTable.propTypes = {
    actionItems: PropTypes.array.isRequired,
    updateActionItem: PropTypes.func.isRequired,
    addActionItem: PropTypes.func.isRequired,
    saveActionItem: PropTypes.func.isRequired
};

export default ActionItemsTable;