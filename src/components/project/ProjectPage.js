import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { loadProjects } from '../../redux/actions/projectActions';
import ProjectInfo from './ProjectInfo';

const ProjectPage = ({ projects, loadProjects }) => {
    let [projectList, setProjectList] = useState(projects);
    let [project, setProject] = useState({});

    useEffect(() => {
        loadProjects();
    }, [])

    useEffect(() => {
        setProjectList(projects,);
    }, [projects])

    const handleChange = (e) => {
        let { name, value } = e.target;
        console.log(e.target.value);
    }

    return (
        <div>
            <ProjectInfo projectList={projectList} handleChange={handleChange} />
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