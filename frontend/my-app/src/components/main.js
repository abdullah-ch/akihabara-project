import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./navbar";

import AnimeList from "./animeList";
import CustomerList from "./customerList";
import MovieList from "./movieList";
import EmployeeList from "./employeeList";
import GameList from "./gamesList";
import MangaList from "./mangaList";
import MusicList from "./musicList";
import MerchList from "./merchList";

import CreateAnimeList from "./createAnimeList";
import CreateCustomerList from "./createCustomerList ";
import CreateMovieList from "./createMovieList";
import CreateEmployeeList from "./createEmployeeList";
import CreateGameList from "./createGameList";
import CreateMangaList from "./createMangaList";
import CreateMusicList from "./createMusicList";
import CreateMerchList from "./createMerchList";

import EditAnimeList from "./editAnimeList";
import EditCustomerList from "./editCustomerList";
import EditMovieList from "./editMovieList";
import EditEmployeeList from "./editEmployeeList";
import EditGameList from "./editGameList";
import EditMangaList from "./editMangaList";
import EditMusicList from "./editMusicList";
import EditMerchList from "./editMerchList";

function Main() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/anime" exact component={AnimeList} />
        <Route path="/customers" exact component={CustomerList} />
        <Route path="/movies" exact component={MovieList} />
        <Route path="/merch" exact component={MerchList} />
        <Route path="/mangas" exact component={MangaList} />
        <Route path="/employees" exact component={EmployeeList} />
        <Route path="/games" exact component={GameList} />
        <Route path="/music" exact component={MusicList} />

        <Route path="/anime/edit" component={EditAnimeList} />
        <Route path="/customers/edit" component={EditCustomerList} />
        <Route path="/movies/edit" component={EditMovieList} />
        <Route path="/merch/edit" component={EditMerchList} />
        <Route path="/mangas/edit" component={EditMangaList} />
        <Route path="/employees/edit" component={EditEmployeeList} />
        <Route path="/games/edit" component={EditGameList} />
        <Route path="/music/edit" component={EditMusicList} />

        <Route path="/anime/create" component={CreateAnimeList} />
        <Route path="/customers/create" component={CreateCustomerList} />
        <Route path="/movies/create" component={CreateMovieList} />
        <Route path="/merch/create" component={CreateMerchList} />
        <Route path="/mangas/create" component={CreateMangaList} />
        <Route path="/employees/create" component={CreateEmployeeList} />
        <Route path="/games/create" component={CreateGameList} />
        <Route path="/music/create" component={CreateMusicList} />
      </div>
    </Router>
  );
}

export default Main;
