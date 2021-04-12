import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ProjectSearch from './ProjectSearch';
import ProjectTable from './ProjectTable';
import ProjectForm from './ProjectForm';
import { loadProjects, saveProject, updateProject } from '../../redux/actions/projectActions';
import { loadActions } from '../../redux/actions/actionItemsActions';
import { Col, Row, Container } from "react-bootstrap";

const ProjectPage = ({ projects, actions, loadProjects, saveProject, updateProject, loadActions }) => {

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
        setSearchKeyword('')
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

    const saveIdentifiedProject = () => {
        (identifiedProject._id)
            ? updateProject({ ...identifiedProject })
            : saveProject({ ...identifiedProject })
    }

    const handleProjectChange = (e) => {
        let { name, value } = e.target;
        setidentifiedProject({ ...identifiedProject, [name]: value });
    }

    const actionAssigned = (action) => {
        return (identifiedProject.actions.find((projectAction => projectAction._id == action._id))
            ? true
            : false
        );
    }

    const updateProjectActions = (action) => {
        if (identifiedProject.actions.find((projectAction => projectAction._id == action._id))) {
            let updatedActions = identifiedProject.actions.filter(projectAction => projectAction._id !== action._id);
            identifiedProject = {
                ...identifiedProject, actions:
                    [...updatedActions]
            };
            console.log('remove');
        }
        else {
            identifiedProject = {
                ...identifiedProject, actions:
                    [...identifiedProject.actions, action]
            }
            console.log('add');

        }
        setidentifiedProject({ ...identifiedProject });
    }

    return (
        <div className='container'>
            {projectComponentState == 'search' &&
                <>
                    <h4>Projects</h4>
                    <Container>
                        <Row>
                            <Col className='padding-none'>
                                {projectComponentState == 'search' &&
                                    <ProjectSearch
                                        searchKeyword={searchKeyword}
                                        filterProjectsByName={filterProjectsByName}
                                    />
                                }
                            </Col>
                            <Col xs lg="2" className='padding-none text-align-end'>
                                {
                                    projectComponentState == 'search' &&
                                    <button
                                        type='button'
                                        className='btn btn-primary btn-sm'
                                        onClick={() => {
                                            setidentifiedProject({ number: '', address: '', actions: [] });
                                            setProjectComponentState('edit');
                                        }}
                                    >
                                        Create
                                </button>
                                }
                            </Col>
                        </Row>
                    </Container>
                    <hr></hr>
                </>
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
                    setidentifiedProject={setidentifiedProject}
                    saveIdentifiedProject={saveIdentifiedProject}
                    actionList={actionList}
                    setProjectComponentState={setProjectComponentState}
                    handleProjectChange={handleProjectChange}
                    actionAssigned={actionAssigned}
                    updateProjectActions={updateProjectActions}
                />
            }
        </div>
    )
}

ProjectPage.propTypes = {
    projects: PropTypes.array,
    actions: PropTypes.object,
    loadProjects: PropTypes.func.isRequired,
    saveProject: PropTypes.func.isRequired,
    updateProject: PropTypes.func.isRequired,
    loadActions: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        projects: state.projects,
        actions: state.actions
    };
}

const mapDispatchToProps = { loadProjects, saveProject, updateProject, loadActions };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectPage);