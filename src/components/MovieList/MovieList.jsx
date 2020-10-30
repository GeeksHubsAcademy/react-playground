import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GET_ALL_MOVIES } from '../../redux/types';
const MovieList = (props) => {

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES')
            .then(res => {
                props.dispatch({ type: GET_ALL_MOVIES, payload: res.data.results });
            })
    }, [])//componentDidMount

    return (
        <div>
            {props.movies?.map(movie => <div className="movie" key={movie.id}>
                <h3>{movie.title}</h3>
                <img src={'https://image.tmdb.org/t/p/w185'+movie.poster_path} alt=""/>
            </div>)}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList);
