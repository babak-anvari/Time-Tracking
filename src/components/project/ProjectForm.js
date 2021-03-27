import React from 'react';
import PropTypes from "prop-types";

const ProjectForm = ({ projectInfo, actionItems, handleChange, handleActionChange, addAction, deleteAction, save }) => (
    <>
        <h3>Project information</h3>
        <form>
            <lable>Project Name</lable><br />
            <input onChange={handleChange} name={'number'} value={projectInfo.number} placeholder='Project Name' /><br /><br />
            <lable>Project Address</lable><br />
            <input onChange={handleChange} name={'address'} value={projectInfo.address} placeholder='address' /><br /><br />
            {projectInfo.actions && projectInfo.actions.length > 0 &&
                <>
                    <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                        padding='20px'
                        name="action"
                        placeholder={'Select an action'}
                        onChange={handleActionChange}>
                        {actionItems.map(action => {
                            if (projectInfo.actions && !projectInfo.actions.find(setAction => setAction._id == action._id)) {
                                return <option key={action._id} value={action._id}>{action.name}</option>;
                            }
                        })}
                    </select>
                    <button
                        className='btn btn-primary btn-sm'
                        onClick={addAction}
                    >
                        Add action
                </button><br /><br />
                    <table>
                        <thead>
                            <tr><th>Project Actions</th></tr>
                        </thead>
                        <tbody>
                            {projectInfo.actions.map(action => (
                                <tr key={action._id}>
                                    <td >{actionItems.find(eachAction => eachAction._id == action._id).name}</td>
                                    <td>
                                        <button
                                            className='btn btn-dark btn-sm'
                                            name='deleteAction'
                                            key={action._id}
                                            onClick={(e) => deleteAction(e, action._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            }
            {projectInfo.actions && projectInfo.actions.length == 0 &&
                <label>Project actions are not set</label>
            }
            <button onClick={save} className='btn btn-primary btn-sm'>
                {projectInfo._id ? 'Update Project Information' : 'Create New Project'}
            </button>
        </form>
    </>
)

const selectStyle = {
    height: '40 px'
}

ProjectForm.propTypes = {
    projectInfo: PropTypes.object.isRequired,
    actionItems: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleActionChange: PropTypes.func.isRequired,
    addAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired
};

export default ProjectForm;