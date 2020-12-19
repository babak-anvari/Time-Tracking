import React from 'react';
import PropTypes from "prop-types";

const UserSignUp = ({ user, handleChange }) => (
    <form onSubmit={handleChange}>
        <input type="text" placeholder="Email Address" name="email" autoComplete='off' onChange={handleChange} /><br /><br />
        <input type="text" placeholder="Password" name="password" autoComplete='off' onChange={handleChange} /><br /><br />
        <input type="text" placeholder="First name" name="firstName" autoComplete='off' onChange={handleChange} /><br /><br />
        <input type="text" placeholder="Last name" name="lastName" autoComplete='off' onChange={handleChange} /><br /><br />
        <input type="text" placeholder="Position" name="currentPosition" autoComplete='off' onChange={handleChange} /><br /><br />
        <input type="text" placeholder="Employment Date " name="employmentDate" autoComplete='off' onChange={handleChange} /><br /><br />
        <input type="submit" value="Register" />
    </form>
)

UserSignUp.propTypes = {
    user: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default UserSignUp;