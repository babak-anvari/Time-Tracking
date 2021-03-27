import React from 'react';
import PropTypes from "prop-types";

const ActionItemsTable = ({ actionItems, updateActionItem, addActionItem, saveActionItem }) => (
    <>
        <h4>Project Actions</h4><br />
        <button onClick={saveActionItem} className='btn btn-primary btn-sm'>Save action items</button><br /><br />
        <table>
            <thead>
                <tr>
                    <th>Action Number</th>
                    <th>Action Items</th>
                </tr>
            </thead>
            <tbody>
                {actionItems.map(action => (
                    <tr key={action.rowId}>
                        <td>{action.rowNumber}</td>
                        <td >
                            <input
                                name='name'
                                value={action.name}
                                onChange={e => updateActionItem(e, action.rowId)}
                            />
                        </td>
                        <button className='btn btn-dark btn-sm'>Obsolete</button>
                    </tr>
                ))}
            </tbody>
        </table><br />
        <button onClick={addActionItem} className='btn btn-primary btn-sm'>Add action</button><br /><br />
    </>
)

ActionItemsTable.propTypes = {
    actionItems: PropTypes.array.isRequired,
    updateActionItem: PropTypes.func.isRequired,
    addActionItem: PropTypes.func.isRequired,
    saveActionItem: PropTypes.func.isRequired
};

export default ActionItemsTable;