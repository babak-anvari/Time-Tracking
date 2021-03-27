import React from 'react';
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import parseISO from 'date-fns/parseISO';
import "react-datepicker/dist/react-datepicker.css";

const UserProfile = ({ user, handleChange, updateUserInformation }) => (
    <>
        <form on onSubmit={updateUserInformation}>
            <div>
                <label>First Name:</label>
                <input
                    name='firstName'
                    autoComplete='off'
                    onChange={handleChange}
                    value={user.firstName}>
                </input>
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    name='lastName'
                    autoComplete='off'
                    onChange={handleChange}
                    value={user.lastName}>
                </input>
            </div>
            <div>
                <label>Occupation</label>
                <input
                    name='currentPosition'
                    autoComplete='off'
                    onChange={handleChange}
                    value={user.currentPosition}>
                </input>
            </div>
            <div>
                <label>Employed since:</label>
                {user.employmentDate &&
                    < DatePicker
                        selected={parseISO(user.employmentDate)}
                        closeOnScroll={true}
                        onChange={(date) => handleChange(
                            { target: { name: 'employmentDate', value: date.toISOString() } }
                        )}
                    />

                }
            </div>
            <button type='submit' className='btn btn-primary btn-sm'>Update user information</button>
        </form>
    </>
)

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    updateUserInformation: PropTypes.func.isRequired
};

export default UserProfile;