import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Manga = (props) => (
  <tr>
    <td> {props.manga.mangaName}</td>
    <td> {props.manga.mangaAuthor}</td>
    <td> {props.manga.mangaRating}</td>
    <td> {props.manga.price}</td>
  

    <td>
      <Link to={"/mangas/edit/" + props.manga._id}>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </Link>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.manga._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);


export default class MangaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangas: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createManga = this.createManga.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/mangas/")
      .then((res) => {
        console.log(res.data);
        this.setState({ mangas: res.data });
        console.log(this.state.mangas);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:5000/mangas/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      mangas: this.state.mangas.filter((manga) => manga._id !== id),
    });
  }

  mangaList() {
    return this.state.mangas.map((mangaObject) => {
      return (
        <Manga
          manga={mangaObject}
          handleDelete={this.handleDelete}
          key={mangaObject._id}
        />
      );
    });
  }

  createManga(event) {
    window.location = "/mangas/create";
  }

  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={this.createManga}
        >
          Create New Manga
        </button>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Manga Name</th>
              <th scope="col">Manga Author</th>
              <th scope="col">Rating</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.mangaList()}</tbody>
        </table>
      </div>
    );

  }
}
