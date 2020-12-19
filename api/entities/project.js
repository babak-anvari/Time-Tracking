export class Project {
  constructor({ _id, number, customer, address }) {
    this._id = _id;
    this.number = number;
    this.customerId = customer;
    this.address = address;
  }
}