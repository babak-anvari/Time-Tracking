import React, { useState } from 'react';
import PropTypes from "prop-types";

const ProjectInfo = ({ projectList, handleChange }) => (
    <>
        <p>Project page under construction</p>
    </>
)

export default ProjectInfo;

ProjectInfo.propTypes = {
    projectList: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
};