import React from 'react';
import PropTypes from "prop-types";
import { InputGroup, FormControl } from "react-bootstrap";

const HourInput = ({ handleChange, Inputvalue, taskId, error }) => (
    <>
        <InputGroup className="mb-3">
            <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                name='hour'
                value={Inputvalue}
                onChange={(e) => handleChange(e, taskId)}
                autoComplete='off'
                style={{ width: "30px" }}
            />
        </InputGroup>
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