import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/anime" className="navbar-brand">
          Anime
        </Link>
        <Link to="/customers" className="navbar-brand">
          Customers
        </Link>
        <Link to="/movies" className="navbar-brand">
          Movies
        </Link>
        <Link to="/merch" className="navbar-brand">
          Merch
        </Link>
        <Link to="/music" className="navbar-brand">
          Music
        </Link>
        <Link to="/mangas" className="navbar-brand">
          Mangas
        </Link>
        <Link to="/games" className="navbar-brand">
          Games
        </Link>
        <Link to="/employees" className="navbar-brand">
          Employees
        </Link>
      </nav>
    );
  }
}
