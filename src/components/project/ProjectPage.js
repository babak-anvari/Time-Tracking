import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ProjectSearch from './ProjectSearch';
import ProjectTable from './ProjectTable';
import ProjectForm from './ProjectForm';
import { loadProjects, saveProject } from '../../redux/actions/projectActions';
import { loadActions } from '../../redux/actions/actionItemsActions';

const ProjectPage = ({ projects, actions, loadProjects, saveProject, loadActions }) => {

    let [projectComponentState, setProjectComponentState] = useState('search');
    let [searchKeyword, setSearchKeyword] = useState('');

    let [projectList, setProjectList] = useState(projects);
    let [identifiedProject, setidentifiedProject] = useState({});
    let [identifiedProjects, setIdentifiedProjects] = useState([]);

    let [actionList, setActionList] = useState([]);


    useEffect(() => {
        loadProjects();
    }, [])

    useEffect(() => {
        loadActions();
    }, [])

    useEffect(() => {
        setProjectList(projects);
        setIdentifiedProjects(projects);
    }, [projects])

    useEffect(() => {
        if (actions.actions) {
            setActionList(actions.actions);
        }
    }, [actions])

    const filterProjectsByName = (e) => {
        let { value } = e.target;
        identifiedProjects = projectList.filter((project) => (
            project.number.startsWith(value)
        ))
        setIdentifiedProjects(identifiedProjects);
        setSearchKeyword(value);
    }

    const findProjectById = (id) => {
        identifiedProject = projectList.find((project) => (project._id == id))
        setidentifiedProject(identifiedProject);
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setidentifiedProject({ ...identifiedProject, [name]: value });
    }

    const save = () => {
        saveProject(identifiedProject);
    }

    return (
        <div className='backGroundColor'>
            <div>
                {projectComponentState == 'search' &&
                    <ProjectSearch
                        searchKeyword={searchKeyword}
                        filterProjectsByName={filterProjectsByName}
                    />
                }
                {
                    identifiedProjects.length > 0 &&
                    projectComponentState == 'search' &&
                    <ProjectTable
                        identifiedProjects={identifiedProjects}
                        findProjectById={findProjectById}
                        setProjectComponentState={setProjectComponentState}
                    />
                }
                {
                    projectComponentState == 'edit' &&
                    <ProjectForm
                        identifiedProject={identifiedProject}
                        handleChange={handleChange}
                        save={save}
                        setProjectComponentState={setProjectComponentState}
                        actionList={actionList}
                        setidentifiedProject={setidentifiedProject}
                    />
                }
            </div>
        </div>
    )
}

ProjectPage.propTypes = {
    projects: PropTypes.array,
    actions: PropTypes.object,
    loadProjects: PropTypes.func.isRequired,
    saveProject: PropTypes.func.isRequired,
    loadActions: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        projects: state.projects,
        actions: state.actions
    };
}

const mapDispatchToProps = { loadProjects, saveProject, loadActions };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectPage);