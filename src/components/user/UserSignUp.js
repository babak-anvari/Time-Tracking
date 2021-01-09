import React from 'react';
import PropTypes from "prop-types";

const UserSignUp = ({ handleChange, createNewUser, setState }) => (
    <form onSubmit={createNewUser} >
        <input type="text" placeholder="First name" name="firstName" autoComplete='off' onChange={handleChange} className="form-control" />
        <input type="text" placeholder="Last name" name="lastName" autoComplete='off' onChange={handleChange} className="form-control" />
        <input type="text" placeholder="Email Address" name="email" autoComplete='off' onChange={handleChange} className="form-control" />
        <input type="text" placeholder="Position" name="currentPosition" autoComplete='off' onChange={handleChange} className="form-control" />
        <input type="text" placeholder="Employment Date " name="employmentDate" autoComplete='off' onChange={handleChange} className="form-control" />
        <input type="text" placeholder="Password" name="password" autoComplete='off' onChange={handleChange} className="form-control" />
        <br />
        <input type="submit" value="Register" className='btn btn-primary btn-st' /><br /><br />
        <button className='btn btn-primary btn-st' onClick={() => setState({ newUser: false })}>Already a user! sign in</button>
    </form>
)

UserSignUp.propTypes = {
    createNewUser: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired
};

export default UserSignUp;