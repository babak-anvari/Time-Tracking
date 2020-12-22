import React from 'react';
import PropTypes from "prop-types";

const UserLogin = ({ handleChange, loginUser, setState }) => (
    <form onSubmit={loginUser} >
        <p>Enter your email and password to sign in.</p>
        <input
            type='email'
            className="form-control"
            placeholder='email'
            name='email'
            onChange={handleChange}
        />
        <input
            type='password'
            className="form-control"
            placeholder='password'
            name='password'
            onChange={handleChange}
        /><br />
        <button type='submit' className='btn btn-primary btn-st'>Sign in</button><br /><br />
        <button className='btn btn-primary btn-st' onClick={() => setState({ newUser: true })}>Create account</button>
    </form>
)

UserLogin.propTypes = {
    handleChange: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired,
};

export default UserLogin;