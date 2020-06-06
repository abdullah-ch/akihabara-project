import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movie = (props) => (
  <tr>
    <td> {props.movie.movieName}</td>
    <td> {props.movie.screenplay}</td>
    <td> {props.movie.movieDirector}</td>
    <td> {props.movie.rating}</td>
    <td> {props.movie.genre}</td>
    <td> {props.movie.price}</td>

    <td>
      <Link to={"/movies/edit/" + props.movie._id}>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </Link>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.movie._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createMovie = this.createMovie.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/movies/")
      .then((res) => {
        console.log(res.data);
        this.setState({ movies: res.data });
        console.log(this.state.movies);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:5000/movies/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      movies: this.state.movies.filter((movie) => movie._id !== id),
    });
  }

  movieList() {
    return this.state.movies.map((movieObject) => {
      return (
        <Movie
          movie={movieObject}
          handleDelete={this.handleDelete}
          key={movieObject._id}
        />
      );
    });
  }

  createMovie(event) {
    window.location = "/movies/create";
  }
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={this.createMovie}
        >
          Create New Movie
        </button>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Movie Name</th>
              <th scope="col">Movie Studio</th>
              <th scope="col">Screenplay</th>
              <th scope="col">Rating</th>
              <th scope="col">Genre</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.movieList()}</tbody>
        </table>
      </div>
    );
  }
}
