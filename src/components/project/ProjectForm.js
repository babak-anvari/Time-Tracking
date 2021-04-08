import React from 'react';
import PropTypes from "prop-types";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import { InputGroup, FormControl, Table } from "react-bootstrap";

const ProjectForm = ({ identifiedProject, saveIdentifiedProject, setProjectComponentState, actionList, handleProjectChange, updateProjectActions, actionAssigned }) => (
    <>
        <h4>Project Information</h4>
        <hr></hr>
        <form>
            <div className="margin-top-20">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="firstName" className="width-150">Project Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={handleProjectChange}
                        name={'number'}
                        value={identifiedProject.number}
                        placeholder='Name'
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="firstName" className="width-150">Project Address</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={handleProjectChange}
                        name={'address'}
                        value={identifiedProject.address}
                        placeholder='address'
                    />
                </InputGroup>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>Add / Remove actions</th>
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
            </Table>
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