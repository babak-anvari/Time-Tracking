import React, { useState } from 'react';
import PropTypes from "prop-types";

const ProjectInput = ({ projectList, handleChange, Id }) => {
    let [errorMessage, setErrorMessage] = useState('');

    const handleInput = (e) => {
        let projectNumber = e.target.value;
        let project = projectList.find(project => project.number === projectNumber);
        if (project || projectNumber === '') {
            setErrorMessage('')
            handleChange(Id, e);
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
                name='project'
                required
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
    Id: PropTypes.string.isRequired,
};