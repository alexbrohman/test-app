import React from "react"
import ScrollDiv from "../utilities/ScrollDiv"
import { connect } from "react-redux"
import List from "../utilities/List"
import ACTIONS from "../../actions/action"
import Film from "../utilities/Film"

const mapDispatchToProps = (dispatch) => {
    return {
        removeFilm: (filmId) => dispatch(ACTIONS.removeFilm(filmId)),
    }
}

const mapStateToProps = (state) => {
    return { films: state.films }
}

const MyFilms = ({  films, removeFilm, ...props, }) => {
    
    const handleRemoveFilm = (film) => {
        removeFilm(film.imdbID)
        return
    }
    
    return (
        <ScrollDiv>
            <List title={films.length ? "My Films List" : ""}>
                {films.map((film, key) => (
                    <Film
                        key={key}
                        film={film}
                        buttonClass={"remove"}
                        handleClick={() => {
                            handleRemoveFilm(film)
                        }}
                    />
                ))}
            </List>
        </ScrollDiv>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFilms)
