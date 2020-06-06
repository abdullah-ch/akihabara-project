
import React, { Component } from "react";
import axios from "axios";

export default class CreateGameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
      gameStudio: "",
      genre: "",
      price: "",
    };
    this.onChangeGameName = this.onChangeGameName.bind(this);
    this.onChangeGameStudio = this.onChangeGameStudio.bind(this);
    this.onChangeGameGenre = this.onChangeGameGenre.bind(this);
    this.onChangeGamePrice = this.onChangeGamePrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeGameName(event) {
    this.setState({
      gameName: event.target.value,
    });
    console.log(" game name is", this.state.gameName);
  }

  onChangeGameStudio(event) {
    this.setState({
      gameStudio: event.target.value,
    });
    console.log(" game studio is", this.state.gameStudio);
  }
  /////////////////////////////////////
  onChangeGameGenre(event) {
    this.setState({
      genre: event.target.value,
    });
    console.log(" Game genre is", this.state.genre);
  }



  onChangeGamePrice(event) {
    this.setState({
      price: event.target.value,
    });
    console.log(" game price is", this.state.price);
  }

  onSubmit(event) {
    event.preventDefault();
    const game = {
      gameName: this.state.gameName,
      gameStudio: this.state.gameStudio,
      price: this.state.price,
      genre: this.state.genre,
    };
    console.log(game);

    axios
      .post("http://localhost:5000/games/add", game)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/games";
  }
  render() {
    return (
      <div>
        <h2>Enter the Game Name </h2>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeGameName}
            value={this.state.gameName}
          />
          <br></br>
          <h2>Enter the Game Studio </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeGameStudio}
            value={this.state.gameStudio}
          />

          <br></br>
          <h2>Enter the Game Price </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeGamePrice}
            value={this.state.price}
          />

          <br></br>
          <h2>Enter the Game Genre </h2>

          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeGameGenre}
            value={this.state.genre}
          />
          <br></br>
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Create Game"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }

}
