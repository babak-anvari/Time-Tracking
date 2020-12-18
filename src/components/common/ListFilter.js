import React from 'react';
import PropTypes from "prop-types";

const ListFilter = ({ projectList, handleChange, Inputvalue, taskId, error }) => {
    const divElement = {
        border: '1px solid red',
        width: '100%',
        height: '100px',
        overflow: 'auto'
    };
    const ulElement = {
        margin: '0px',
        padding: '0px'
    };

    const liElement = {

        display: 'block',
        border: '1px solid #2e2e2e',
        background: '#f9f9f9'
    };
    return (
        <>
            <input
                type='text'
                list='data'
                name='projectNumber'
                required
                autoComplete="off"
                value={Inputvalue}
                onChange={(e) => handleChange(e, taskId)}
            >
            </input>
            <ul>{projectList.map(project => {
                return (
                    <option key={project._id}> <a value={project.number} /></option>
                )
            })
            }
            </ul>
            <div style={divElement}>
                <ul style={ulElement}>
                    <a><li href='#' style={liElement}>1</li></a><li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                    <li style={liElement}>1</li>
                </ul>
            </div>

            <datalist id='data'>
                {projectList.map(project => (
                    <option key={project._id} value={project.number} />
                ))}
            </datalist>
            {
                error &&
                <p style={{ color: 'red' }}>{error}</p>
            }

        </>
    )
}

export default ListFilter;

ListFilter.propTypes = {
    projectList: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    Inputvalue: PropTypes.string.isRequired,
    taskId: PropTypes.string,
    error: PropTypes.string
};