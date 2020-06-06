import React, { Component } from "react";
import axios from "axios";

export default class EditMerchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchName: "",
      merchType: "",
      price: "",
    };
    this.onChangeMerchName = this.onChangeMerchName.bind(this);
    this.onChangeMerchType = this.onChangeMerchType.bind(this);
     this.onChangeMerchPrice = this.onChangeMerchPrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMerchName(event) {
    this.setState({
      merchName: event.target.value,
    });
    console.log(" merch name is", this.state.merchName);
  }

  onChangeMerchType(event) {
    this.setState({
      merchType: event.target.value,
    });
    console.log(" merch type is", this.state.merchType);
  }
  /////////////////////////////////////

  onChangeMerchPrice(event) {
    this.setState({
      price: event.target.value,
    });
    console.log(" merch price is", this.state.price);
  }

  onSubmit(event) {
    event.preventDefault();
    const merch = {
      merchName: this.state.merchName,
      merchType: this.state.merchType,
      price: this.state.price,
    };
    console.log(merch);

    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];

    axios
      .put("http://localhost:5000/merch/edit/" + id, merch)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      window.location = "/merch";
  }

  render() {
    return (
      <div>
        <h2>Enter the Merch Name </h2>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMerchName}
            value={this.state.merchName}
          />
          <br></br>
          <h2>Enter the Merch Type </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMerchType}
            value={this.state.merchType}
          />

          <br></br>
          <h2>Enter the Merch Price </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMerchPrice}
            value={this.state.price}
          />

          
          <br></br>
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Edit the  Merch"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
