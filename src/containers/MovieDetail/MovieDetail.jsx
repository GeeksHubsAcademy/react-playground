import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem/MovieItem';
import { SET_MOVIE } from '../../redux/types';

const MovieDetail = (props) => {
    useEffect(() => {
        const id = +props.match.params.id;
        console.log(id);
        const movie = props.movies?.find(movie => movie.id === id);
        props.dispatch({ type: SET_MOVIE, payload: movie });
    }, [])
    return props.currentMovie ? <MovieItem movie={props.currentMovie}/>:'Loading'
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        currentMovie:state.currentMovie
    }
}

export default connect(mapStateToProps)(MovieDetail);
