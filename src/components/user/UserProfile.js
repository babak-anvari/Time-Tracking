import React from 'react';
import PropTypes from "prop-types";

const UserProfile = ({ currentUser }) => (
    <>
        <p>First Name: {currentUser.firstName}</p>
        <p>Last Name: {currentUser.lastName}</p>
    </>
)

UserProfile.propTypes = {
    currentUser: PropTypes.object.isRequired
};

export default UserProfile;