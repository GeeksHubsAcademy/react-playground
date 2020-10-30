import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GET_ALL_MOVIES } from '../../redux/types';
import MovieItem from '../../components/MovieItem/MovieItem';
const MovieList = (props) => {

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES')
            .then(res => {
                props.dispatch({ type: GET_ALL_MOVIES, payload: res.data.results });
            })
    }, [])//componentDidMount

    return (
        <div>
            {props.movies?.map(movie => <MovieItem movie={movie} />)}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList);