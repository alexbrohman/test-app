import Types from "./actionTypes"
const addFilm = (film) => ({
    type: Types.ADD_FILM,
    film: film,
})

const removeFilm = (filmId) => ({
    type: Types.REMOVE_FILM,
    filmId: filmId,
})

export default {
    addFilm,
    removeFilm,
}
