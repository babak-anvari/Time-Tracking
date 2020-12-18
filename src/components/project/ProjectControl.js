import React from 'react';
import PropTypes from "prop-types";
import ProjectInput from '../common/ProjectInput';

const ProjectControl = ({ inputProject, projectList, handleChange }) => (
    <>
        <p>Select project number</p>
        <ProjectInput
            projectList={projectList}
            Inputvalue={inputProject.projectNumber}
            handleChange={handleChange}
        />
    </>
)

export default ProjectControl;

ProjectControl.propTypes = {
    inputProject: PropTypes.object.isRequired,
    projectList: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
};