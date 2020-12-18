import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { loadProjects } from '../../redux/actions/projectActions';
import ProjectControl from './ProjectControl';
import ProjectForm from './ProjectForm';

const ProjectPage = ({ projects, loadProjects }) => {
    let [projectList, setProjectList] = useState(projects);
    let [inputProject, setInputProject] = useState({ projectNumber: '', _id: '' });
    let [projectInfo, setProjectInfo] = useState({});

    useEffect(() => {
        loadProjects();
    }, [])

    useEffect(() => {
        setProjectList(projects);
    }, [projects])

    useEffect(() => {
        let findProject = projectList.find(project => project._id == inputProject._id);
        (findProject)
            ? setProjectInfo(findProject)
            : setProjectInfo({});
    }, [inputProject])

    const handleProjectControlChange = (e) => {
        let { name, value } = e.target;
        inputProject = { ...inputProject, [name]: value };
        let selectedProject = projectList.find(project => project.number == inputProject.projectNumber);
        let _id = (selectedProject) ? selectedProject._id : null;
        inputProject = { ...inputProject, _id };
        setInputProject(inputProject);
    }

    const handleProjectFormChange = (e) => {
        let { name, value } = e.target;
        projectInfo = { ...projectInfo, [name]: value };
        setProjectInfo(projectInfo);
    }

    return (
        <div>
            <ProjectControl
                inputProject={inputProject}
                projectList={projectList}
                handleChange={handleProjectControlChange}
            />{projectInfo._id &&
                <ProjectForm
                    projectInfo={projectInfo}
                    handleChange={handleProjectFormChange}
                />
            }
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