import React from 'react';
import PropTypes from "prop-types";

const ProjectInput = ({ projectList, handleChange, Inputvalue, taskId, error }) => (
    <>
        <input
            type='text'
            list='data'
            name='projectNumber'
            required
            autoComplete="off"
            value={Inputvalue}
            onChange={(e) => handleChange(e, taskId)}
        >
        </input>
        <datalist id='data'>
            {projectList.map(project => (
                <option key={project._id} value={project.number} />
            ))}
        </datalist>
        {
            error &&
            <p style={{ color: 'red' }}>{error}</p>
        }

    </>
)

export default ProjectInput;

ProjectInput.propTypes = {
    projectList: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    Inputvalue: PropTypes.string.isRequired,
    taskId: PropTypes.string,
    error: PropTypes.string
};