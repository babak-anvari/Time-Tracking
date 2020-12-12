import React, { useState } from 'react';
import PropTypes from "prop-types";

const ProjectInput = ({ projectList, handleChange, Inputvalue, taskId }) => {
    let [errorMessage, setErrorMessage] = useState('');

    const handleInput = (e) => {
        let projectNumber = e.target.value;
        let project = projectList.find(project => project.number === projectNumber);
        if (project || projectNumber === '') {
            setErrorMessage('')
        }
        else {
            setErrorMessage('project does not exist');
        }
    }

    return (
        <>
            <input
                type='text'
                list='data'
                name='number'
                required
                value={Inputvalue}
                onChange={(e) => handleChange(taskId, e)}
                onBlur={handleInput}
            >
            </input>
            <p style={{ color: 'red' }}>{errorMessage}</p>
            <datalist id='data'>
                {projectList.map(
                    project => (<option key={project._id} value={project.number}>{project.number}</option>))
                }
            </datalist>

        </>
    )
}

export default ProjectInput;

ProjectInput.propTypes = {
    projectList: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    Inputvalue: PropTypes.string.isRequired,
    taskId: PropTypes.string
};