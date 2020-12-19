import PropTypes from "prop-types";

const validateProject = (inputValue, projectList) => {
    return projectList.find(project => project.number == inputValue)
        ? null
        : 'Project does not exsit'
}

validateProject.propTypes = {
    inputValue: PropTypes.string,
    projectList: PropTypes.array
}

export default validateProject;