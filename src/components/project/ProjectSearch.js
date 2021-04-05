import React from 'react';
import PropTypes from "prop-types";

const ProjectSearch = ({ searchKeyword, filterProjectsByName }) => (
    <>
        <p>Search</p><br />
        <input onChange={filterProjectsByName} name={'searchKeyword'} value={searchKeyword} placeholder='Project Name' /><br /><br />

    </>
)

export default ProjectSearch;

ProjectSearch.propTypes = {
    searchKeyword: PropTypes.string.isRequired,
    filterProjectsByName: PropTypes.func.isRequired
};