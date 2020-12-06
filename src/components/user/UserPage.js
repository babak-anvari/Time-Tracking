import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { userLogin } from '../../redux/actions/userActions';
import UserLoginInfo from './UserLoginInfo';
import UserProfile from './UserProfile';

const UserPage = ({ currentUser, userLogin }) => {
    let [user, setUser] = useState({});
    console.log(currentUser);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginUser = async (e) => {
        e.preventDefault();
        if (!user.email || !user.password) alert('Enter email and passworddd');
        else {
            try {
                // user = await login(user);
                // if (user !== null) setUser(user);
                userLogin(user);

            }
            catch (error) {
                alert(error.response.data);
            }
        }
    }

    return (
        <div>
            <UserLoginInfo
                handleChange={handleChange}
                loginUser={loginUser}
            /><br /><br />
            {currentUser.id &&
                <UserProfile currentUser={currentUser} />
            }
        </div>
    )
}

UserPage.propTypes = {
    currentUser: PropTypes.object.isRequired,
    userLogin: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        currentUser: state.user
    };
}

const mapDispatchToProps = { userLogin };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);