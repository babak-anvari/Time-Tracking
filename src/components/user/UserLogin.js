import React from 'react';
import PropTypes from "prop-types";
import { InputGroup, FormControl } from "react-bootstrap";

const UserLogin = ({ handleChange, loginUser, setState }) => (
    <form onSubmit={loginUser} >
        <h3>Welcome! Sign in.</h3>
        <hr></hr>
        <div className="margin-top-50">
            <InputGroup className="mb-3">
                <FormControl
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
            </InputGroup>

            <button type='submit' className='btn btn-primary btn-sm margin-top-20'>Sign in</button><br /><br />
            <button className='btn btn-primary btn-sm' onClick={() => setState({ newUser: true })}>Create account</button>
        </div>
    </form >
)

UserLogin.propTypes = {
    handleChange: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired,
};

export default UserLogin;