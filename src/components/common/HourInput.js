import React from 'react';
import PropTypes from "prop-types";

const HourInput = ({ handleChange, Inputvalue, taskId, error }) => (
    <>
        <input
            name='hour'
            value={Inputvalue}
            onChange={(e) => handleChange(e, taskId)}
            autoComplete='off'
            style={{ width: "50px" }}
        >
        </input>
        {error &&
            <p style={{ color: 'red' }}>{error}</p>
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