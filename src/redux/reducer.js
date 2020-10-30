const {
    GET_ALL_MOVIES,
    SET_MOVIE
} = require("./types");

const initialState = {
    currentMovie: {},
    movies: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case SET_MOVIE:
            return {
                ...state,
                currentMovie: action.payload
            }
        default:
            return state
    }
}
export default reducer;