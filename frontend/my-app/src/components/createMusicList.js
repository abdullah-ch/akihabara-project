import React, { Component } from "react";
import axios from "axios";

export default class CreateMusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicName: "",
      singer: "",
      releaseYear: "",
      price: "",
    };
    this.onChangeMusicName = this.onChangeMusicName.bind(this);
    this.onChangeSinger = this.onChangeSinger.bind(this);
    this.onChangeReleaseYear = this.onChangeReleaseYear.bind(this);
    this.onChangeMusicPrice = this.onChangeMusicPrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMusicName(event) {
    this.setState({
      musicName: event.target.value,
    });
    console.log(" music name is", this.state.musicName);
  }

  onChangeSinger(event) {
    this.setState({
      singer: event.target.value,
    });
    console.log(" music studio is", this.state.singer);
  }
  /////////////////////////////////////


  onChangeReleaseYear(event) {
    this.setState({
      releaseYear: event.target.value,
    });
    console.log(" music rating is", this.state.releaseYear);
  }

  onChangeMusicPrice(event) {
    this.setState({
      price: event.target.value,
    });
    console.log(" music price is", this.state.price);
  }

  onSubmit(event) {
    event.preventDefault();
    const music = {
      musicName: this.state.musicName,
      singer: this.state.singer,
      releaseYear: this.state.releaseYear,
      price: this.state.price,
    };
    console.log(music);

    axios
      .post("http://localhost:5000/music/add", music)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/music";
  }
  render() {
    return (
      <div>
        <h2>Enter the Music Name </h2>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMusicName}
            value={this.state.musicName}
          />
          <br></br>
          <h2>Enter the Singer </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeSinger}
            value={this.state.musicStudio}
          />

          <br></br>
          <h2>Enter the Music Release Year </h2>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeReleaseYear}
            value={this.state.rating}
          />

          <br></br>
          <h2>Enter the Music Price </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMusicPrice}
            value={this.state.price}
          />

          <br></br>
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Create Music"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
