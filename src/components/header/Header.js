import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { userRenewLogin, userSignOut } from '../../redux/actions/userActions'
import getToken from '../../utils/getToken';

const Header = ({ currentUser, userRenewLogin, userSignOut }) => {
    useEffect(() => {
        let user = getToken();
        user ? userRenewLogin(user) : console.log('not logged in');
    }, [])
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Time Management Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={location.pathname} className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {currentUser._id &&
                        <>
                            <Nav.Link href="/user">User</Nav.Link>
                            <Nav.Link href="/project">Project</Nav.Link>
                            <Nav.Link href="/action">Action</Nav.Link>
                            <Nav.Link href="/timesheet">Timesheet</Nav.Link>
                        </>
                    }
                </Nav>
                <Nav>
                    {currentUser._id &&
                        <Nav.Link onClick={userSignOut}>Sign out</Nav.Link>
                    }
                    {!currentUser._id &&
                        <Nav.Link href="/user">Sign in</Nav.Link>
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