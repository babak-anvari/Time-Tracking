import React from 'react';
import PropTypes from "prop-types";
import { InputGroup, FormControl } from "react-bootstrap";

const ProjectForm = ({ projectInfo, actionItems, handleChange, handleActionChange, addAction, deleteAction, save }) => (
    <>
        <h5>Project information</h5>
        <form>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="width-150">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={handleChange}
                        name={'number'}
                        value={projectInfo.number}
                        placeholder='Project Name'
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="width-150">Address</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={handleChange}
                        name={'address'}
                        value={projectInfo.address}
                        placeholder='address'
                    />
                </InputGroup>
            </div>
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
            <div>
                {projectInfo.actions && projectInfo.actions.length == 0 &&
                    <span>Project actions are not set</span>
                }
            </div>
            <div className="margin-top-20">
                <button onClick={save} className='btn btn-primary btn-sm'>
                    {projectInfo._id ? 'Update' : 'Create New Project'}
                </button>
            </div>
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