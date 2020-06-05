import React, { Component } from "react";
import axios from "axios";

export default class EditEmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "",
      empSalaray: "",
      dateOfBirth: "",
      empPhoneNumber: "",
      address: "",
    };
    this.onChangeEmpName = this.onChangeEmpName.bind(this);
    this.onChangeEmpSalary = this.onChangeEmpSalary.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeEmpPhoneNumber = this.onChangeEmpPhoneNumber.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmpName(event) {
    this.setState({
      empName: event.target.value,
    });
    console.log(" anime name is", this.state.empName);
  }

  onChangeEmpSalary(event) {
    this.setState({
      empSalaray: event.target.value,
    });
    console.log(" anime studio is", this.state.empSalaray);
  }
  /////////////////////////////////////

  onChangeDateOfBirth(event) {
    this.setState({
      dateOfBirth: event.target.value,
    });
    console.log(" anime director is", this.state.dateOfBirth);
  }

  onChangeEmpPhoneNumber(event) {
    this.setState({
      empPhoneNumber: event.target.value,
    });
    console.log(" anime rating is", this.state.empPhoneNumber);
  }

  onChangeAddress(event) {
    this.setState({
      address: event.target.value,
    });
    console.log(" anime genre is", this.state.address);
  }

  onSubmit(event) {
    event.preventDefault();
    const employee = {
      empName: this.state.empName,
      empSalaray: this.state.empSalaray,
      dateOfBirth: this.state.dateOfBirth,
      empPhoneNumber: this.state.empPhoneNumber,
      address: this.state.address,
    };
    console.log(employee);
    console.log(employee);
    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];
    axios
      .put("http://localhost:5000/employees/edit/" + id, employee)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/employees";
  }

  render() {
  return (
    <div>
      <h2>Enter the Employee Name </h2>
      <form onSubmit={this.onSubmit}>
        <br></br>
        <input
          className="form-control"
          type="text"
          onChange={this.onChangeEmpName}
          value={this.state.empName}
        />
        <br></br>
        <h2>Enter the Employee Salary </h2>
        <br></br>
        <input
          className="form-control"
          type="text"
          onChange={this.onChangeEmpSalary}
          value={this.state.empSalaray}
        />

        <br></br>
        <h2>Enter the Employees Date of Birth </h2>

        <br></br>
        <input
          className="form-control"
          type="text"
          onChange={this.onChangeDateOfBirth}
          value={this.state.dateOfBirth}
        />

        <br></br>
        <h2>Enter the Employee Phone Number </h2>
        <input
          className="form-control"
          type="text"
          onChange={this.onChangeEmpPhoneNumber}
          value={this.state.empPhoneNumber}
        />

        <br></br>
        <h2>Enter the Employee Address </h2>
        <br></br>
        <input
          className="form-control"
          type="text"
          onChange={this.onChangeAddress}
          value={this.state.address}
        />

        <br></br>
        <div className="form-group">
          <br></br>
          <input
            type="submit"
            value="Edit Employee"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
  }
}
