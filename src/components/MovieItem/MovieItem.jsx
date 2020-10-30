import React from 'react'
import { Link } from 'react-router-dom'

const MovieItem = ({movie}) => {
    return (
        <Link to={'/movie/'+movie.id} className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} alt="" />
        </Link>
    )
}

export default MovieItem
