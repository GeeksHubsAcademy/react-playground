const { GET_ALL_MOVIES } = require("./types");

const initialState = {
    movies: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload
            }

        default:
            return state
    }
}
export default reducer;