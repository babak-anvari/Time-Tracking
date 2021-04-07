import React from 'react';
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import parseISO from 'date-fns/parseISO';
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, FormControl } from "react-bootstrap";

const UserProfile = ({ user, handleChange, updateUserInformation }) => (
    <>
        <form on onSubmit={updateUserInformation}>
            <h4>User Information</h4>
            <hr></hr>
            <div className="margin-top-20">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="firstName" className="width-150">First Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="firstName"
                        autoComplete="off"
                        onChange={handleChange}
                        value={user.firstName}
                        aria-describedby="firstName"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="lastName" className="width-150">Last Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="lastName"
                        autoComplete="off"
                        onChange={handleChange}
                        value={user.lastName}
                        aria-describedby="lastName"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="currentPosition" className="width-150">Job Position</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="currentPosition"
                        autoComplete="off"
                        onChange={handleChange}
                        value={user.currentPosition}
                        aria-describedby="currentPosition"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="employmentDate" className="width-150">Employed Since</InputGroup.Text>
                    </InputGroup.Prepend>
                    <div className="form-control">
                        {user.employmentDate &&
                            <DatePicker className="border-none info-font-color"
                                selected={parseISO(user.employmentDate)}
                                closeOnScroll={true}
                                onChange={(date) => handleChange(
                                    { target: { name: 'employmentDate', value: date.toISOString() } }
                                )}
                            />
                        }
                    </div>
                </InputGroup>
            </div>
            <button type='submit' className='btn btn-primary btn-sm margin-top-20'>Update</button>
        </form>
    </>
)

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    updateUserInformation: PropTypes.func.isRequired
};

export default UserProfile;