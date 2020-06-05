import React, { Component } from "react";
import axios from "axios";

export default class EditCustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cusName: "",
      cusPhoneNumber: "",
    };
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerPhoneNumber = this.onChangeCustomerPhoneNumber.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeCustomerName(event) {
    this.setState({
      cusName: event.target.value,
    });
    console.log(" customer name is", this.state.cusName);
  }

  onChangeCustomerPhoneNumber(event) {
    this.setState({
      cusPhoneNumber: event.target.value,
    });
    console.log(" Customer Phone Number is", this.state.cusPhoneNumber);
  }
  /////////////////////////////////////

  onSubmit(event) {
    event.preventDefault();
    const customer = {
      cusName: this.state.cusName,
      cusPhoneNumber: this.state.cusPhoneNumber,
    };
    console.log(customer);
      const path = window.location.pathname.split("/");
      const id = path[path.length - 1];
    axios
      .put("http://localhost:5000/customers/edit/" + id, customer)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/customers";
  }

  render() {
    return (
      <div>
        <h2>Enter the Customer Name </h2>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeCustomerName}
            value={this.state.cusName}
          />
          <br></br>
          <h2>Enter the Customer Phone number </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeCustomerPhoneNumber}
            value={this.state.cusPhoneNumber}
          />
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Edit Customer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
