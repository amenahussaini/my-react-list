import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './includes/App.css';
import SearchIcon from "./includes/search.svg";

import Header from './view/shared/Header';
import About from './view/pages/About';

import MovieCard from "./components/MovieCard";
import MovieDetail from './components/MovieDetail';
import Pagination from './components/Pagination';

import axios from 'axios';
import {Link} from "react-router-dom";


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieItem, setMovieItem] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);

  const movie1 = {
    "Title":"Amazing Spiderman Syndrome",
    "Year":"2012",
    "imdbID":"tt2586634",
    "Type":"movie",
    "Poster":"N/A"
    }

  useEffect(() => {

    searchMovies("Batman");

  }, []);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log('this is data' , data)
    console.log('this is data.search', data.search)

    setMovies(data.Search);
    setMovieItem(data.Search);
  };


  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='container app mt-5'>

<Router>
<Header />

<div className="search">
  <input
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search for movies"
  />
  <img
    src={SearchIcon}
    alt="search"
    onClick={() => searchMovies(searchTerm)}
  />
</div>

<div>
  <Routes>
    <Route path='/about' element={<About />}></Route>
    <Route path='/movieDetail' element={
    <>
    {movieItem?.length > 0 ? (
  <div className="container">
    {movieItem.map((movie1) => (
      <MovieDetail movie1={movie1} />
    ))}
  </div>
) : (
  <div className="empty">
    <h2>No movies found</h2>
  </div>
)}
    
    </>
    
    
    }></Route>

    <Route path='/' element={
      <>
      {movies?.length > 0 ? (
  <div className="container">
    {movies.map((movie) => (
      <MovieCard movie={movie} />
    ))}
  </div>
) : (
  <div className="empty">
    <h2>No movies found</h2>
  </div>
)}
      </>
    }></Route>
  </Routes>

     
   
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
      </div>
      </Router>
    </div>
  );
};

export default App;