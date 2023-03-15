import React, { useState, useEffect } from 'react';

import './includes/App.css';
import SearchIcon from "./includes/search.svg";




import Header from './view/shared/Header'
import MovieCard from "./components/MovieCard";

import Pagination from './components/Pagination';

import axios from 'axios';

import MovieDetail from './components/MovieDetail';
import {Link} from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);



  useEffect(() => {

    searchMovies("Batman");

  }, []);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log('this is data' , data)
    console.log('this is data.search', data.search)

    setMovies(data.Search);
  };



  // Get current posts
  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
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

     <MovieDetail />
   
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
      </Router>
    </div>
  );
};

export default App;