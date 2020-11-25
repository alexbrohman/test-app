import React from "react"
import ScrollDiv from "../utilities/ScrollDiv"
import { connect } from "react-redux"
import List from "../utilities/List"
import ACTIONS from "../../actions/action"
import Film from "../utilities/Film"
import { NavLink } from "react-router-dom"

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
            {films.length ? 
            <>
            <h3><NavLink to="/">
            Add more films to your list
        </NavLink></h3>
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
            </>
            : <h3><NavLink to="/">
            Search films to add to your list
        </NavLink></h3>}
        </ScrollDiv>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFilms)
