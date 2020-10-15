import React from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}><ul><li>{movies[movieID].title}</li></ul></Link>
  );
 
  return (
    <div>
        {renderMovies}
    </div>
  );
};
 
export default MoviesList;