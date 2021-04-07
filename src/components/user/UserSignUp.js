import React from 'react';
import PropTypes from "prop-types";
import { InputGroup, FormControl } from "react-bootstrap";

const UserSignUp = ({ handleChange, createNewUser, setState }) => (
    <form onSubmit={createNewUser} >
        <h4>Enter your information to sign up</h4>
        <hr></hr>
        <div className="margin-top-50">
            <InputGroup className="mb-3">
                <FormControl type="text" placeholder="First Name" name="firstName" autoComplete='off' onChange={handleChange} />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl type="text" placeholder="Last Name" name="lastName" autoComplete='off' onChange={handleChange} />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl type="text" placeholder="Email Address" name="email" autoComplete='off' onChange={handleChange} />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl type="text" placeholder="Position" name="currentPosition" autoComplete='off' onChange={handleChange} />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl type="date" placeholder="Employment Date" name="employmentDate" autoComplete='off' onChange={handleChange} />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl type="password" placeholder="Password" name="password" autoComplete='off' onChange={handleChange} />
            </InputGroup>
        </div>
        <div className="margin-top-50">
            <input type="submit" value="Register" className='btn btn-primary btn-st' /><br /><br />
            <hr></hr>
            <label>Already a user?</label><button className='btn btn-primary btn-st' onClick={() => setState({ newUser: false })}>Sign in</button>
        </div>
    </form>
)

UserSignUp.propTypes = {
    createNewUser: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired
};

export default UserSignUp;