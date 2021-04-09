import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { userRenewLogin, userSignOut } from '../../redux/actions/userActions'
import getToken from '../../utils/getToken';
import { Link } from 'react-router-dom'

const Header = ({ currentUser, userRenewLogin, userSignOut }) => {
    useEffect(() => {
        let user = getToken();
        user ? userRenewLogin(user) : console.log('not logged in');
    }, [])
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Time Management Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={location.pathname} className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {currentUser._id &&
                        <>
                            <Nav.Link as={Link} to="/user">User</Nav.Link>
                            <Nav.Link as={Link} to="/project">Project</Nav.Link>
                            <Nav.Link as={Link} to="/action">Action</Nav.Link>
                            <Nav.Link as={Link} to="/timesheet">Timesheet</Nav.Link>
                        </>
                    }
                </Nav>
                <Nav>
                    {currentUser._id &&
                        <Nav.Link as={Link} to="/user" onClick={userSignOut}>Sign out</Nav.Link>
                    }
                    {!currentUser._id &&
                        <Nav.Link as={Link} to="/user">Sign in</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
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