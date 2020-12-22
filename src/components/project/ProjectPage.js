import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { loadProjects, saveProject } from '../../redux/actions/projectActions';
import ProjectControl from './ProjectControl';
import ProjectForm from './ProjectForm';

const ProjectPage = ({ projects, loadProjects, saveProject }) => {
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
            : setProjectInfo({
                _id: null, number: inputProject.projectNumber, address: ''
            });
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

    const save = () => {
        saveProject(projectInfo);
    }

    return (
        <div className='jumbotron'>
            <ProjectControl
                inputProject={inputProject}
                projectList={projectList}
                handleChange={handleProjectControlChange}
            />{projectInfo.number &&
                <ProjectForm
                    projectInfo={projectInfo}
                    handleChange={handleProjectFormChange}
                    save={save}
                />
            }
        </div>
    )
}

ProjectPage.propTypes = {
    projects: PropTypes.array.isRequired,
    loadProjects: PropTypes.func.isRequired,
    saveProject: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

const mapDispatchToProps = { loadProjects, saveProject };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectPage);