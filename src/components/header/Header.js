import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { userRenewLogin, userSignOut } from '../../redux/actions/userActions'
import getToken from '../../utils/getToken';

const Header = ({ currentUser, userRenewLogin, userSignOut }) => {
    useEffect(() => {
        let user = getToken();
        user ? userRenewLogin(user) : console.log('not logged in');
    }, [])
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            {" | "}
            <NavLink to="/user" activeStyle={activeStyle}>{currentUser._id ? 'User' : 'Sign in'}</NavLink>
            {currentUser._id &&
                <>
                    {" | "}
                    <NavLink to="/project" activeStyle={activeStyle}>Project</NavLink>
                    {" | "}
                    <NavLink to="/timesheet" activeStyle={activeStyle}>Timesheet</NavLink>
                    {" | "}
                    <NavLink to="/user" onClick={userSignOut}>Sign out</NavLink>
                </>
            }
        </nav>
    );
};

Header.propTypes = {
    currentUser: PropTypes.object.isRequired,
    userRenewLogin: PropTypes.func.isRequired,
    userSignOut: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        currentUser: state.user
    };
}

const mapDispatchToProps = { userRenewLogin, userSignOut };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);