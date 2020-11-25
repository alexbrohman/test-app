import Types from "../actions/actionTypes"

const defaultState = {
    films: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.ADD_FILM: {
            return {
                ...state,
                films: [...state.films, action.film],
            }
        }

        case Types.REMOVE_FILM: {
            const films = state.films.filter((film) => {
                return film.imdbID !== action.filmId
            })

            return {
                ...state,
                films,
            }
        }

        default:
            return defaultState
    }
}

export default reducer
