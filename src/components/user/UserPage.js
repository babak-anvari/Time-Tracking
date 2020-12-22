import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { userLogin, createUser, updateUser, userSignOut } from '../../redux/actions/userActions';
import UserLogin from './UserLogin';
import UserProfile from './UserProfile';
import UserSignUp from './UserSignUp';
// import getToken from '../../utils/getToken';

const UserPage = ({ currentUser, userLogin, createUser, updateUser, userSignOut }) => {
    let [state, setState] = useState({
        newUser: false,
    });
    let [user, setUser] = useState({});
    console.log(user);

    // useEffect(() => {
    //     console.log(getToken())
    //     setUser(getToken());
    // }, [])

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginUser = async (e) => {
        e.preventDefault();
        if (!user.email || !user.password) alert('Enter email and password');
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
        <div className='jumbotron'>
            {!user._id && !state.newUser &&
                <UserLogin
                    handleChange={handleChange}
                    loginUser={loginUser}
                    setState={setState}
                />
            }
            {!user._id && state.newUser &&
                <UserSignUp
                    user={user}
                    handleChange={handleChange}
                    createNewUser={createNewUser}
                    setState={setState}
                />
            }
            {user._id &&
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
    updateUser: PropTypes.func.isRequired,
    userSignOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        currentUser: state.user
    };
}

const mapDispatchToProps = { userLogin, createUser, updateUser, userSignOut };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);