import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { userLogin, createUser, updateUser } from '../../redux/actions/userActions';
import UserLogin from './UserLogin';
import UserProfile from './UserProfile';
import UserSignUp from './UserSignUp';

const UserPage = ({ currentUser, userLogin, createUser, updateUser }) => {
    let [user, setUser] = useState({});

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginUser = async (e) => {
        e.preventDefault();
        if (!user.email || !user.password) alert('Enter email and passworddd');
        else {
            try {
                userLogin(user);

            }
            catch (error) {
                alert(error.response.data);
            }
        }
    }

    const createNewUser = (e) => {
        e.preventDefault();
        createUser(user);
    }

    const updateUserInformation = (e) => {
        e.preventDefault();
        updateUser(user);
    }

    return (
        <div>
            {!currentUser._id &&
                <UserLogin
                    handleChange={handleChange}
                    loginUser={loginUser}
                />
            }
            <br /><br /><br />
            {!currentUser._id &&
                <UserSignUp
                    user={user}
                    handleChange={handleChange}
                    createNewUser={createNewUser}
                />
            }
            {currentUser._id &&
                <UserProfile
                    user={user}
                    handleChange={handleChange}
                    updateUserInformation={updateUserInformation}
                />
            }
        </div>
    )
}

UserPage.propTypes = {
    currentUser: PropTypes.object.isRequired,
    userLogin: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        currentUser: state.user
    };
}

const mapDispatchToProps = { userLogin, createUser, updateUser };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);