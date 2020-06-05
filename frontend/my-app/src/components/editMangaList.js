import React, { Component } from "react";
import axios from "axios";

export default class EditMangaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangaName: "",
      mangaAuthor: "",
      mangaRating: "",
      price: "",
    };
    this.onChangeMangaName = this.onChangeMangaName.bind(this);
    this.onChangeMangaAuthor = this.onChangeMangaAuthor.bind(this);
    this.onChangeMangaRating = this.onChangeMangaRating.bind(this);
    this.onChangeMangaPrice = this.onChangeMangaPrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMangaName(event) {
    this.setState({
      mangaName: event.target.value,
    });
    console.log(" anime name is", this.state.mangaName);
  }

  onChangeMangaAuthor(event) {
    this.setState({
      mangaAuthor: event.target.value,
    });
    console.log(" anime studio is", this.state.mangaAuthor);
  }
  /////////////////////////////////////

  onChangeMangaRating(event) {
    this.setState({
      mangaRating: event.target.value,
    });
    console.log(" anime director is", this.state.mangaRating);
  }

  onChangeMangaPrice(event) {
    this.setState({
      price: event.target.value,
    });
    console.log(" anime rating is", this.state.price);
  }
  onSubmit(event) {
    event.preventDefault();
    const manga = {
      mangaAuthor: this.state.mangaAuthor,
      mangaName: this.state.mangaName,
      mangaRating: this.state.mangaRating,
      price: this.state.price,
    };
    console.log(manga);
    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];

    axios
      .put("http://localhost:5000/mangas/edit/" + id, manga)

      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    window.location = "/mangas";
  }

  render() {
    return (
      <div>
        <h2>Enter the Manga Name </h2>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMangaName}
            value={this.state.mangaName}
          />
          <br></br>
          <h2>Enter the Manga Author </h2>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMangaAuthor}
            value={this.state.mangaAuthor}
          />

          <br></br>
          <h2>Enter the Rating </h2>

          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMangaRating}
            value={this.state.mangaRating}
          />

          <br></br>
          <h2>Enter the Price </h2>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeMangaPrice}
            value={this.state.price}
          />
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Edit Manga"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
