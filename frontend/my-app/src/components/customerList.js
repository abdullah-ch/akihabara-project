import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Customer = (props) => (
  <tr>
    <td> {props.customer.cusName}</td>
    <td> {props.customer.cusPhoneNumber}</td>

    <td>
      <Link to={"/customers/edit/" + props.customer._id}>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </Link>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.customer._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createAnime = this.createCustomer.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/customers/")
      .then((res) => {
        console.log(res.data);
        this.setState({ customers: res.data });
        console.log(this.state.customers);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:5000/customers/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      customers: this.state.customers.filter((customer) => customer._id !== id),
    });
  }

  customerList() {
    return this.state.customers.map((customerObject) => {
      return (
        <Customer
          customer={customerObject}
          handleDelete={this.handleDelete}
          key={customerObject._id}
        />
      );
    });
  }

  createCustomer(event) {
    window.location = "/customers/create";
  }
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={this.createCustomer}
        >
          Create New Customer
        </button>

        <table class="table table-striped table-dark">
          <thead>
            <tr class="bg-danger">
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.customerList()}</tbody>
        </table>
      </div>
    );
  }
}
