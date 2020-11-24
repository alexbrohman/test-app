import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import ACTIONS from "../../actions/action"
import ScrollDiv from "../utilities/ScrollDiv"
import axios from "axios"
import Input from "../utilities/Input"

// const mapStateToProps = (state) => ({
//     exampleMessage: state.exampleMessage,
// })

// const mapDispatchToProps = (dispatch) => ({
//     exampleAction: (message) => dispatch(ACTIONS.exampleAction(message)),
// })

const Film = ({ film }) => {
    return (
        <div className="film-wrap">
            <img src={film.Poster} alt={`${film.title} poster`} />
            <div className="film-data">
                <h2>{film.Title}</h2>
                <span className="film-year">{film.Year}</span>
            </div>
        </div>
    )
}

const Home = (...props) => {
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [searchError, setSearchError] = useState(false)

    const searchFilms = (query) => {
        axios
            .get(`http://www.omdbapi.com/?s=${query}&apikey=1b7edaae`)
            .then(function (res) {
                if (res.data.Search) {
                    setSearchResults([...res.data.Search])
                } else {
                    setSearchResults([])
                    setSearchError(true)
                    setQuery("")
                }
            })
            .catch(function (err) {
                console.log("err", err)
            })
    }

    return (
        <ScrollDiv>
            <h1>Home</h1>
            <Input
                name={"Film Search"}
                placeholder={"Search for a film"}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <br />
            <button disabled={!query.length} onClick={() => searchFilms(query)}>
                Search
            </button>

            {searchError ? <p>There was a search Error</p> : ""}

            {searchResults.length ? (
                <div className="search-results">
                    <h2>Films</h2>
                    {searchResults.map((film, key) => (
                        <Film key={key} film={film} />
                    ))}
                </div>
            ) : (
                ""
            )}
        </ScrollDiv>
    )
}

//export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home
