import React from 'react';
import PropTypes from "prop-types";
import ProjectInput from '../common/ProjectInput';

const ProjectInfo = ({ project, projectList, handleChange }) => (
    <>
        <p>Select project number</p>
        <ProjectInput
            projectList={projectList}
            Inputvalue={project}
            handleChange={handleChange}
        // taskId={null}
        />
    </>
)

export default ProjectInfo;

ProjectInfo.propTypes = {
    project: PropTypes.string.isRequired,
    projectList: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
};