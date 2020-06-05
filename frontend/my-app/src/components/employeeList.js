import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = (props) => (
  <tr>
    <td> {props.employee.empName}</td>
    <td> {props.employee.empSalaray}</td>
    <td> {props.employee.dateOfBirth}</td>
    <td> {props.employee.empPhoneNumber}</td>
    <td> {props.employee.address}</td>
    <td>
      <Link to={"/employees/edit/" + props.employee._id}>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </Link>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.employee._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createAnime = this.createEmployee.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/employees/")
      .then((res) => {
        console.log(res.data);
        this.setState({ employee: res.data });
        console.log(this.state.employee);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:5000/employees/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      employee: this.state.employee.filter((employee) => employee._id !== id),
    });
  }

  employeeList() {
    return this.state.employee.map((employeeObject) => {
      return (
        <Employee
          employee={employeeObject}
          handleDelete={this.handleDelete}
          key={employeeObject._id}
        />
      );
    });
  }

  createEmployee(event) {
    window.location = "/employees/create";
  }

  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={this.createEmployee}
        >
          Create New Employee
        </button>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Salaray</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.employeeList()}</tbody>
        </table>
      </div>
    );
  }
}
