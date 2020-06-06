import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Music = (props) => (
  <tr>
    <td> {props.music.musicName}</td>
    <td> {props.music.singer}</td>
    <td> {props.music.releaseYear}</td>
    <td> {props.music.price}</td>

    <td>
      <Link to={"/music/edit/" + props.music._id}>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </Link>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.music._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createMusic = this.createMusic.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/music/")
      .then((res) => {
        console.log(res.data);
        this.setState({ musics: res.data });
        console.log(this.state.musics);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:5000/music/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      musics: this.state.musics.filter((music) => music._id !== id),
    });
  }

  musicList() {
    return this.state.musics.map((musicObject) => {
      return (
        <Music
          music={musicObject}
          handleDelete={this.handleDelete}
          key={musicObject._id}
        />
      );
    });
  }

  createMusic(event) {
    window.location = "/music/create";
  }
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={this.createMusic}
        >
          Create New Music
        </button>

        <table class="table table-striped table-dark">
          <thead>
            <tr class="bg-danger">
              <th scope="col">Music Name</th>
              <th scope="col">Singer</th>
              <th scope="col">Release Year</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.musicList()}</tbody>
        </table>
      </div>
    );
  }
}
