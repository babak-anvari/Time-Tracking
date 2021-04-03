import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ProjectSearch from './ProjectSearch';
import ProjectTable from './ProjectTable';
import { loadProjects, saveProject } from '../../redux/actions/projectActions';
import { loadActions } from '../../redux/actions/actionItemsActions';

const ProjectPage = ({ projects, actions, loadProjects, saveProject, loadActions }) => {

    let [projectName, setProjectName] = useState('');
    let [projectList, setProjectList] = useState(projects);
    let [identifiedProjects, setIdentifiedProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, [])

    useEffect(() => {
        setProjectList(projects);
        setIdentifiedProjects(projects);
    }, [projects])

    const findProject = (e) => {
        let { value } = e.target;
        identifiedProjects = projectList.filter((project) => (
            project.number.startsWith(value)
        ))
        setIdentifiedProjects(identifiedProjects);
        setProjectName(value);
    }


    return (
        <div className='backGroundColor'>
            <div>
                <ProjectSearch
                    projectName={projectName}
                    findProject={findProject}
                />
                {identifiedProjects.length > 0 &&
                    <ProjectTable
                        identifiedProjects={identifiedProjects}
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