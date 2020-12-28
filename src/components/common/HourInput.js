import React from 'react';
import PropTypes from "prop-types";

const HourInput = ({ handleChange, Inputvalue, taskId, error }) => (
    <>
        <input
            className='form-control'
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            name='hour'
            value={Inputvalue}
            onChange={(e) => handleChange(e, taskId)}
            autoComplete='off'
            style={{ width: "50px" }}
        >
        </input>
        {error &&
            <p1 style={{ color: 'red' }}><small>{error}</small></p1>
        }
    </>
)

HourInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    Inputvalue: PropTypes.number.isRequired,
    taskId: PropTypes.string,
    error: PropTypes.string
};

export default HourInput;