import React from 'react';import MoviesListItem from "../movies-list-item";function MoviesList(props){    const {movies = []} = props;    return <div className='movies'>            {movies.length ? movies.map(movie => (                <MoviesListItem key={movie.imdbID} {...movie}/>            )) : <h4>Nothing found</h4>}        </div>}export default MoviesList;