import React from 'react';
import { Link } from 'react-router-dom'

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <Link className='detail-link' datatype={imdbID} to='/MovieDetail'>Detail</Link>
      </div>
    </div>
  );
}

export default MovieCard;