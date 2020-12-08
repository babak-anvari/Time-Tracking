import React from 'react';
import PropTypes from "prop-types";

const UserLogin = ({ handleChange, loginUser }) => (
    <form onSubmit={loginUser}>
        <p>Please enter your email and password to sign in</p>
        <input
            type='text'
            placeholder='email'
            name='email'
            onChange={handleChange}>
        </input><br /><br />
        <input
            type='password'
            placeholder='password'
            name='password'
            onChange={handleChange}>
        </input><br /><br />
        <button type='submit'>Sign in</button>
    </form>
)

UserLogin.propTypes = {
    handleChange: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
};

export default UserLogin;