import React from 'react';
import PropTypes from "prop-types";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

const ProjectForm = ({ identifiedProject, handleChange, saveIdentifiedProject, setProjectComponentState, actionList, setidentifiedProject }) => {

    const actionAssigned = (action) => {
        return (identifiedProject.actions.find((projectAction => projectAction._id == action._id))
            ? true
            : false
        );
    }

    const updateProjectActions = (action) => {
        if (identifiedProject.actions.find((projectAction => projectAction._id == action._id))) {
            let updatedActions = identifiedProject.actions.filter(projectAction => projectAction._id !== action._id);
            identifiedProject = {
                ...identifiedProject, actions:
                    [...updatedActions]
            };
            console.log('remove');
        }
        else {
            identifiedProject = {
                ...identifiedProject, actions:
                    [...identifiedProject.actions, action]
            }
            console.log('add');

        }
        setidentifiedProject({ ...identifiedProject });
    }
    return (
        <>
            <h3>Project Information</h3>
            <form>
                <div>
                    <label>Project Name</label>
                    <input onChange={handleChange} name={'number'} value={identifiedProject.number} placeholder='Name' />
                </div>
                <div>
                    <label>Project Address</label>
                    <input onChange={handleChange} name={'address'} value={identifiedProject.address} placeholder='address' />
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
}

ProjectForm.propTypes = {
    identifiedProject: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    saveIdentifiedProject: PropTypes.func.isRequired,
    setProjectComponentState: PropTypes.func.isRequired,
    actionList: PropTypes.array.isRequired,
    setidentifiedProject: PropTypes.func.isRequired
};

export default ProjectForm;