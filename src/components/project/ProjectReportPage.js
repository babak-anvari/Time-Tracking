import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const ProjectReportPage = ({ match }) => {

    let [projectId, setProjectId] = useState('');


    useEffect(() => {
        console.log(match.params.id);
        setProjectId(match.params.id)
    }, [])

    return (
        <div className='container'>
            <h4>Project Report Page</h4>
            <p>Project ID is {projectId}</p>
            <p>Project analytics coming soon...</p>
        </div>
    )
}

ProjectReportPage.propTypes = {
};

function mapStateToProps(state) {
    return {
    };
}

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectReportPage);