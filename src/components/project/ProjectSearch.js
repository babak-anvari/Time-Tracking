import React from 'react';
import PropTypes from "prop-types";
import { InputGroup, FormControl } from "react-bootstrap";

const ProjectSearch = ({ searchKeyword, filterProjectsByName }) => (
    <>
        <h4>Projects</h4>
        <InputGroup className="mb-3">
            <FormControl
                onChange={filterProjectsByName}
                name={'searchKeyword'}
                value={searchKeyword}
                placeholder='Search Project Name'
            />
        </InputGroup>
        <hr></hr>
    </>
)

export default ProjectSearch;

ProjectSearch.propTypes = {
    searchKeyword: PropTypes.string.isRequired,
    filterProjectsByName: PropTypes.func.isRequired
};