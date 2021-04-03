import React from 'react';
import PropTypes from "prop-types";

const ProjectSearch = ({ projectName, findProject }) => (
    <>
        <p>Search</p><br />
        <input onChange={findProject} name={'projectName'} value={projectName} placeholder='Project Name' /><br /><br />

    </>
)

export default ProjectSearch;

ProjectSearch.propTypes = {
    projectName: PropTypes.string.isRequired,
    findProject: PropTypes.func.isRequired
};