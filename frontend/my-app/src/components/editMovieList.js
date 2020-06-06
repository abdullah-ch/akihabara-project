import React, { Component } from "react";
import axios from "axios";

export default class EditMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      screenplay: "",
      movieDirector: "",
      rating: "",
      genre: "",
      price: "",
    };
    this.onChangeMovieName = this.onChangeMovieName.bind(this);
    this.onChangeScreenplay = this.onChangeScreenplay.bind(this);
    this.onChangeMovieDirector = this.onChangeMovieDirector.bind(this);
    this.onChangeMovieRating = this.onChangeMovieRating.bind(this);
    this.onChangeMovieGenre = this.onChangeMovieGenre.bind(this);
    this.onChangeMoviePrice = this.onChangeMoviePrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMovieName(event) {
    this.setState({
      movieName: event.target.value,
    });
    console.log(" movie name is", this.state.movieName);
  }

  onChangeScreenplay(event) {
    this.setState({
      screenplay: event.target.value,
    });
    console.log(" Screenplay is written by is", this.state.screenplay);
  }
  /////////////////////////////////////

  onChangeMovieDirector(event) {
    this.setState({
      movieDirector: event.target.value,
    });
    console.log(" movie director is", this.state.movieDirector);
  }

  onChangeMovieRating(event) {
    this.setState({
      rating: event.target.value,
    });
    console.log(" movie rating is", this.state.rating);
  }

  onChangeMovieGenre(event) {
    this.setState({
      genre: event.target.value,
    });
    console.log(" movie genre is", this.state.genre);
  }

  onChangeMoviePrice(event) {
    this.setState({
      price: event.target.value,
    });
    console.log(" movie price is", this.state.price);
  }

  onSubmit(event) {
    event.preventDefault();
    const movie = {
      movieName: this.state.movieName,
      screenplay: this.state.screenplay,
      movieDirector: this.state.movieDirector,
      rating: this.state.rating,
      price: this.state.price,
      genre: this.state.genre,
    };
    console.log(movie);

    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];

    axios
      .put("http://localhost:5000/movies/edit/" + id, movie)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      window.location = "/movies";
  }

  render() {
    return (
      <div>
        <h2>Enter the Movie Name </h2>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMovieName}
            value={this.state.movieName}
          />
          <br></br>
          <h2>Enter the Movie Studio </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeScreenplay}
            value={this.state.screenplay}
          />

          <br></br>
          <h2>Enter the Movie Director </h2>

          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMovieDirector}
            value={this.state.movieDirector}
          />

          <br></br>
          <h2>Enter the Movie Rating </h2>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMovieRating}
            value={this.state.rating}
          />

          <br></br>
          <h2>Enter the Movie Price </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMoviePrice}
            value={this.state.price}
          />

          <br></br>
          <h2>Enter the Movie Genre </h2>

          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMovieGenre}
            value={this.state.genre}
          />
          <br></br>
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Edit the  Movie"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
