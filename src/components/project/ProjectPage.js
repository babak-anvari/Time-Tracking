import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { loadProjects } from '../../redux/actions/projectActions';

const ProjectPage = ({ projects, loadProjects }) => {
    useEffect(() => {
        loadProjects();
    }, [])
    return (
        <div>
            <p>Project page under development</p>
        </div>
    )
}

ProjectPage.propTypes = {
    projects: PropTypes.array.isRequired,
    loadProjects: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

const mapDispatchToProps = { loadProjects };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectPage);