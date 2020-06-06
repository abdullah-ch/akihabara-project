import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Games = (props) => (
  <tr>
    <td> {props.game.gameName}</td>
    <td> {props.game.gameStudio}</td>
    <td> {props.game.genre}</td>
    <td> {props.game.price}</td>

    <td>
      <Link to={"/games/edit/" + props.game._id}>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </Link>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.game._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);


export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createGames = this.createGames.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/games/")
      .then((res) => {
        console.log(res.data);
        this.setState({ games: res.data });
        console.log(this.state.games);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:5000/games/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      games: this.state.games.filter((game) => game._id !== id),
    });
  }

  gameList() {
    return this.state.games.map((gameObject) => {
      return (
        <Games
          game={gameObject}
          handleDelete={this.handleDelete}
          key={gameObject._id}
        />
      );
    });
  }

  createGames(event) {
    window.location = "/games/create";
  }
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={this.createGames}
        >
          Create New Games
        </button>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Games Name</th>
              <th scope="col">Games Studio</th>
              <th scope="col">Genre</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.gameList()}</tbody>
        </table>
      </div>
    );
  }
}
