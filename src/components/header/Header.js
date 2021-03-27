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
    return (
        <nav>
            <NavLink className='Nav_Link' activeClassName="Active_Nav_Link" to="/" exact>Home</NavLink>
            <NavLink className='Nav_Link' activeClassName="Active_Nav_Link" to="/about" >About</NavLink>
            <NavLink className='Nav_Link' activeClassName="Active_Nav_Link" to="/user">{currentUser._id ? 'User' : 'Sign in'}</NavLink>
            {currentUser._id &&
                <>
                    <NavLink className='Nav_Link' activeClassName="Active_Nav_Link" to="/project">Project</NavLink>
                    <NavLink className='Nav_Link' activeClassName="Active_Nav_Link" to="/action" >Action</NavLink>
                    <NavLink className='Nav_Link' activeClassName="Active_Nav_Link" to="/timesheet" >Timesheet</NavLink>
                    <NavLink className='Nav_Link' to="/user" onClick={userSignOut}>Sign out</NavLink>
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