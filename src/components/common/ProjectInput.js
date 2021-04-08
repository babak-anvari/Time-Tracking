import React from 'react';
import PropTypes from "prop-types";
import { InputGroup, FormControl } from "react-bootstrap";

const ProjectInput = ({ projectList, handleChange, Inputvalue, taskId, error }) => (
    <>
        <InputGroup className="mb-3">
            <FormControl
                type='text'
                list='data'
                name='projectNumber'
                placeholder='Name'
                required
                autoComplete="off"
                value={Inputvalue}
                onChange={(e) => handleChange(e, taskId)}
            />
        </InputGroup>
        <datalist id='data'>
            {projectList.map(project => (
                <option key={project._id} value={project.number} />
            ))}
        </datalist>
        {
            error &&
            <p style={{ color: 'red' }}><small>{error}</small></p>
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