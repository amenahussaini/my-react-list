import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type, Genre } }) => {
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
        <h3>{Title} {Genre}</h3>
      </div>
    </div>
  );
}

export default MovieCard;