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
    let [action, setAction] = useState({});

    let actionItems = [
        { _id: 1001, name: 'Choose an action' },
        { _id: 1000001, name: 'Define project' },
        { _id: 1000002, name: 'Development' },
        { _id: 1000003, name: 'Code review' },
        { _id: 1000004, name: 'Pull request' }
    ];

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

    const handleActionChange = (e) => {
        let { value: _id } = e.target;
        setAction(actionItems.find(action => action._id == _id));
    }

    const save = () => {
        saveProject(projectInfo);
    }

    const addAction = (e) => {
        e.preventDefault();
        projectInfo = {
            ...projectInfo,
            actions: [
                ...projectInfo.actions, action
            ]
        }
        setProjectInfo(projectInfo);
    }

    const deleteAction = (e, _id) => {
        e.preventDefault();
        let actions = projectInfo.actions.filter(action => action._id !== _id);
        projectInfo = { ...projectInfo, actions };
        setProjectInfo(projectInfo);
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
                    actionItems={actionItems}
                    handleChange={handleProjectFormChange}
                    handleActionChange={handleActionChange}
                    addAction={addAction}
                    deleteAction={deleteAction}
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