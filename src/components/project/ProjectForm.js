import React from 'react';
import PropTypes from "prop-types";

const ProjectForm = ({ projectInfo, handleChange, save }) => (
    <>
        <p>Project Information</p>
        <form>
            <input onChange={handleChange} name={'number'} value={projectInfo.number} placeholder='Project Name'></input><br /><br />
            <input onChange={handleChange} name={'address'} value={projectInfo.address} placeholder='address'></input><br /><br />
            <button onClick={save}>{projectInfo._id ? 'Update Project Information' : 'Create New Project'}</button>
        </form>
    </>
)

export default ProjectForm;

ProjectForm.propTypes = {
    projectInfo: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired
};