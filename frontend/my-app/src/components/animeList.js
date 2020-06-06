import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Anime = (props) => (
  <tr>
    <td> {props.anime.animeName}</td>
    <td> {props.anime.animeStudio}</td>
    <td> {props.anime.animeDirector}</td>
    <td> {props.anime.rating}</td>
    <td> {props.anime.genre}</td>
    <td> {props.anime.price}</td>

    <td>
      <Link to={"/anime/edit/" + props.anime._id}>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </Link>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.anime._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createAnime = this.createAnime.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/anime/")
      .then((res) => {
        console.log(res.data);
        this.setState({ animes: res.data });
        console.log(this.state.animes);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:5000/anime/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      animes: this.state.animes.filter((anime) => anime._id !== id),
    });
  }

  animeList() {
    return this.state.animes.map((animeObject) => {
      return (
        <Anime
          anime={animeObject}
          handleDelete={this.handleDelete}
          key={animeObject._id}
        />
      );
    });
  }

  createAnime(event) {
    window.location = "/anime/create";
  }
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={this.createAnime}
        >
          Create New Anime
        </button>

        <table class="table table-striped table-dark">
          <thead>
            <tr class="bg-info">
              <th scope="col">Anime Name</th>
              <th scope="col">Anime Studio</th>
              <th scope="col">Anime Director</th>
              <th scope="col">Rating</th>
              <th scope="col">Genre</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.animeList()}</tbody>
        </table>
      </div>
    );
  }
}
