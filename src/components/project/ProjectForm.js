import React from 'react';
import PropTypes from "prop-types";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

const ProjectForm = ({ identifiedProject, saveIdentifiedProject, setProjectComponentState, actionList, handleProjectChange, updateProjectActions, actionAssigned }) => (
    <>
        <h3>Project Information</h3>
        <form>
            <div>
                <label>Project Name</label>
                <input onChange={handleProjectChange} name={'number'} value={identifiedProject.number} placeholder='Name' />
            </div>
            <div>
                <label>Project Address</label>
                <input onChange={handleProjectChange} name={'address'} value={identifiedProject.address} placeholder='address' />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>Add/ Remove actions</th>
                    </tr>
                </thead>
                <tbody>
                    {actionList.map(action => (
                        <tr key={action._id} >
                            <td>{action.name}</td>
                            <td>
                                <div className="deleteIcon"
                                    onClick={() => { updateProjectActions(action) }}>
                                    {
                                        actionAssigned(action)
                                            ? <RemoveCircleOutlineRoundedIcon />
                                            : <AddCircleOutlineRoundedIcon />
                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table ><br />
        </form>
        <button onClick={saveIdentifiedProject} className='btn btn-primary btn-sm'>Save</button><br /><br />
        <button onClick={() => { setProjectComponentState('search') }} className='btn btn-primary btn-sm'>Back to projects</button><br /><br />

    </>
)


ProjectForm.propTypes = {
    identifiedProject: PropTypes.object.isRequired,
    saveIdentifiedProject: PropTypes.func.isRequired,
    setProjectComponentState: PropTypes.func.isRequired,
    actionList: PropTypes.array.isRequired,
    handleProjectChange: PropTypes.func.isRequired,
    updateProjectActions: PropTypes.func.isRequired,
    actionAssigned: PropTypes.func.isRequired
};

export default ProjectForm;