import React from 'react';
import PropTypes from "prop-types";

const ProjectForm = ({ projectInfo, handleChange }) => (
    <>
        <p>Project Information</p>
        <form>
            <input onChange={handleChange} name={'number'} value={projectInfo.number}></input><br />
            <input onChange={handleChange} name={'address'} value={projectInfo.address}></input>
        </form>
    </>
)

export default ProjectForm;

ProjectForm.propTypes = {
    projectInfo: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
};