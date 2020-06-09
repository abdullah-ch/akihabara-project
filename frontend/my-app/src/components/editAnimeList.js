import React, { Component } from "react";
import axios from "axios";

export default class EditAnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeName: "",
      animeStudio: "",
      animeDirector: "",
      rating: Number,
      genre: "",
      price: Number,
      animeObject: {},
      errorMessage: "",
    };
    this.onChangeAnimeName = this.onChangeAnimeName.bind(this);
    this.onChangeAnimeStudio = this.onChangeAnimeStudio.bind(this);
    this.onChangeAnimeDirector = this.onChangeAnimeDirector.bind(this);
    this.onChangeAnimeRating = this.onChangeAnimeRating.bind(this);
    this.onChangeAnimeGenre = this.onChangeAnimeGenre.bind(this);
    this.onChangeAnimePrice = this.onChangeAnimePrice.bind(this);
    this.prevState = this.prevState.bind(this); // show the data to be edited
    this.retainData = this.retainData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.prevState();
  }

  onChangeAnimeName(event) {
    this.setState({
      animeName: event.target.value,
    });
    console.log(" anime name is", this.state.animeName);
  }

  onChangeAnimeStudio(event) {
    this.setState({
      animeStudio: event.target.value,
    });
    console.log(" anime studio is", this.state.animeStudio);
  }
  /////////////////////////////////////

  onChangeAnimeDirector(event) {
    this.setState({
      animeDirector: event.target.value,
    });
    console.log(" anime director is", this.state.animeDirector);
  }

  onChangeAnimeRating(event) {
    this.setState({
      rating: event.target.value,
    });
    console.log(" anime rating is", this.state.rating);
  }

  onChangeAnimeGenre(event) {
    this.setState({
      genre: event.target.value,
    });
    console.log(" anime genre is", this.state.genre);
  }

  onChangeAnimePrice(event) {
    this.setState({
      price: event.target.value,
    });
    console.log(" anime price is", this.state.price);
  }

  onSubmit(event) {
    event.preventDefault();
    const anime = {
      animeName: this.state.animeName,
      animeStudio: this.state.animeStudio,
      animeDirector: this.state.animeDirector,
      rating: this.state.rating,
      price: this.state.price,
      genre: this.state.genre,
    };

    console.log(anime);

    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];

    axios
      .put("http://localhost:5000/anime/edit/" + id, anime)
      .then((res) => console.log(res.data))
      .catch((err) => {
        this.setState({
          errorMessage: err.message,
        });
      });

    window.location = "/anime";
  }

  prevState(event) {
    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];
    const anime = {
      id: id,
    };

    console.log("THE IDD is", id);

    axios
      .post("http://localhost:5000/anime/find", anime)
      .then((res) => {
        this.setState({
          animeObject: res.data,
        });
      })
      .catch((err) => console.log(err));

    this.setState({
      animeObject: this.state.animeObject,
    });

    console.log("lets see the animeObject", this.state.animeObject);
    const animeName = this.state.animeObject.animeName;
    console.log("anime name hh is", animeName);
  }

  retainData() {
    console.log("anime director is", this.state.animeObject.animeDirector);
    const animeName = this.state.animeObject.animeName;
    const animeDirector = this.state.animeObject.animeDirector;
    const animeStudio = this.state.animeObject.animeStudio;
    const rating = this.state.animeObject.rating;
    const price = this.state.animeObject.price;
    const genre = this.state.animeObject.genre;

    this.setState({
      animeName: animeName,
      animeDirector: animeDirector,
      animeStudio: animeStudio,
      rating: rating,
      price: price,
      genre: genre,
    });

    console.log(this.state.animeName);
    console.log(this.state.animeDirector);
  }

  componentDidMount() {
    setTimeout(() => {
      this.retainData();
    }, 500);
  }

  render() {
    return (
      <div>
        <h1> The Anime going to be Edited :-</h1>
        <table class="table table-striped table-dark">
          <thead>
            <tr class="bg-info">
              <th scope="col">Anime Name</th>
              <th scope="col">Anime Studio</th>
              <th scope="col">Anime Director</th>
              <th scope="col">Rating</th>
              <th scope="col">Genre</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {this.state.animeObject.animeName}</td>
              <td> {this.state.animeObject.animeStudio}</td>
              <td> {this.state.animeObject.animeDirector}</td>
              <td> {this.state.animeObject.rating}</td>
              <td> {this.state.animeObject.genre}</td>
              <td> {this.state.animeObject.price}</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <h2>Enter the Anime Name </h2>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeAnimeName}
            value={this.state.animeName}
          />
          <br></br>
          <h2>Enter the Anime Studio </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeAnimeStudio}
            value={this.state.animeStudio}
          />

          <br></br>
          <h2>Enter the Anime Director </h2>

          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeAnimeDirector}
            value={this.state.animeDirector}
          />

          <br></br>
          <h2>Enter the Anime Rating </h2>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeAnimeRating}
            value={this.state.rating}
          />

          <br></br>
          <h2>Enter the Anime Price </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeAnimePrice}
            value={this.state.price}
          />

          <br></br>
          <h2>Enter the Anime Genre </h2>

          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeAnimeGenre}
            value={this.state.genre}
          />
          <br></br>
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Edit the  Anime"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
