import React from 'react';
import PropTypes from "prop-types";
import ProjectInput from '../common/ProjectInput';
import { InputGroup, FormControl } from "react-bootstrap";

const ProjectControl = ({ inputProject, projectList, handleChange }) => (
    <>
        <h4>Projects</h4>
        <hr></hr>
        <div className="margin-top-20">
            <span className="margin-right-20">Search by Name:</span>
            <ProjectInput
                projectList={projectList}
                Inputvalue={inputProject.projectNumber}
                handleChange={handleChange}
            />
        </div>
        <hr></hr>
    </>
)

export default ProjectControl;

ProjectControl.propTypes = {
    inputProject: PropTypes.object.isRequired,
    projectList: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
};