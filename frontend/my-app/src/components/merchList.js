import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Merch = (props) => (
  <tr>
    <td> {props.merch.merchName}</td>
    <td> {props.merch.merchType}</td>
    <td> {props.merch.price}</td>
    <td>
      <Link to={"/merch/edit/" + props.merch._id}>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </Link>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.merch._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class MerchList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      merches: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createMerch = this.createMerch.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/merch/")
      .then((res) => {
        console.log(res.data);
        this.setState({ merches: res.data });
        console.log(this.state.merches);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:5000/merch/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      merches: this.state.merches.filter((merch) => merch._id !== id),
    });
  }

  merchList() {
    return this.state.merches.map((merchObject) => {
      return (
        <Merch
          merch={merchObject}
          handleDelete={this.handleDelete}
          key={merchObject._id}
        />
      );
    });
  }

  createMerch(event) {
    window.location = "/merch/create";
  }

  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={this.createMerch}
        >
          Create New Merch
        </button>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Merch Name</th>
              <th scope="col">Merch Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{this.merchList()}</tbody>
        </table>
      </div>
    );
  }
}
