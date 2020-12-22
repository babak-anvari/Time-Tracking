import React from 'react';
import PropTypes from "prop-types";

const UserProfile = ({ user, handleChange, updateUserInformation }) => (
    <>
        <form on onSubmit={updateUserInformation}>
            <div className="form-group">
                <label>First Name:</label>
                <input
                    name='firstName'
                    autoComplete='off'
                    onChange={handleChange}
                    value={user.firstName}>
                </input>
            </div>
            <p>Last Name:</p>
            <input
                name='lastName'
                autoComplete='off'
                onChange={handleChange}
                value={user.lastName}>
            </input>
            <br /><br /><br />
            <p>Occupation</p>
            <input
                name='currentPosition'
                autoComplete='off'
                onChange={handleChange}
                value={user.currentPosition}>
            </input>
            <br /><br /><br />
            <p>Date of employment</p>
            <input
                name='employmentDate'
                autoComplete='off'
                onChange={handleChange}
                value={user.employmentDate}>
            </input>
            <br /><br /><br />
            <button type='submit'>Update user information</button>
        </form>
    </>
)

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    updateUserInformation: PropTypes.func.isRequired
};

export default UserProfile;