import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import AnimeList from "./components/animeList";
import CustomerList from "./components/customerList";
import MovieList from "./components/movieList";
import EmployeeList from "./components/employeeList";
import GameList from "./components/gamesList";
import MangaList from "./components/mangaList";
import MusicList from "./components/musicList";
import MerchList from "./components/merchList";

import CreateAnimeList from "./components/createAnimeList";
import CreateCustomerList from "./components/createCustomerList ";
import CreateMovieList from "./components/createMovieList";
import CreateEmployeeList from "./components/createEmployeeList";
import CreateGameList from "./components/createGameList";
import CreateMangaList from "./components/createMangaList";
import CreateMusicList from "./components/createMusicList";
import CreateMerchList from "./components/createMerchList";


import EditAnimeList from "./components/editAnimeList";
import EditCustomerList from "./components/editCustomerList";
import EditMovieList from "./components/editMovieList";
import EditEmployeeList from "./components/editEmployeeList";
import EditGameList from "./components/editGameList";
import EditMangaList from "./components/editMangaList";
import EditMusicList from "./components/editMusicList";
import EditMerchList from "./components/editMerchList";



function App() {
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
        <Route path="/customers/edit"  component={EditCustomerList} />
        <Route path="/movies/edit"  component={EditMovieList} />
        <Route path="/merch/edit"  component={EditMerchList} />
        <Route path="/mangas/edit"  component={EditMangaList} />
        <Route path="/employees/edit"  component={EditEmployeeList} />
        <Route path="/games/edit"  component={EditGameList} />
        <Route path="/music/edit"  component={EditMusicList} />

        <Route path="/anime/create" component={CreateAnimeList} />
        <Route path="/customers/create"  component={CreateCustomerList} />
        <Route path="/movies/create"  component={CreateMovieList} />
        <Route path="/merch/create"  component={CreateMerchList} />
        <Route path="/mangas/create"  component={CreateMangaList} />
        <Route path="/employees/create"  component={CreateEmployeeList} />
        <Route path="/games/create"  component={CreateGameList} />
        <Route path="/music/create"  component={CreateMusicList} />
      </div>
    </Router>
  );
}

export default App;
