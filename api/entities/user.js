export class User {
  constructor({ _id, firstName, lastName, currentPosition, employmentDate, email }) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.currentPosition = currentPosition;
    this.employmentDate = employmentDate;
  }
}