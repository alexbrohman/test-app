import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import ACTIONS from "../../actions/action"
import ScrollDiv from "../utilities/ScrollDiv"
import axios from "axios"
import Input from "../utilities/Input"
import Film from "../utilities/Film"
import { useHistory } from "react-router-dom"
import List from "../utilities/List"

const mapDispatchToProps = (dispatch) => {
    return {
        addFilm: (film) => dispatch(ACTIONS.addFilm(film)),
    }
}

const Home = ({ addFilm, ...props }) => {
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [emptySearch, setEmptySearch] = useState(false)
    const [navigate, setNavigate] = useState(false)

    const history = useHistory()

    const handleAddFilm = (film) => {
        addFilm(film)
        setSearchResults([])
        clearSearch()
        history.push("/films")
    }

    const clearSearch = () => {
        setSearchResults([])
        setQuery("")
        setEmptySearch(false)
    }

    const searchFilms = (query) => {
        axios
            .get(`http://www.omdbapi.com/?s=${query}&apikey=1b7edaae`)
            .then(function (res) {
                if (res.data.Search) {
                    setSearchResults([...res.data.Search])
                } else {
                    setSearchResults([])
                    setEmptySearch(true)
                    setQuery("")
                }
            })
            .catch(function (err) {
                console.log("err", err)
            })
    }

    return (
        <ScrollDiv>
            <h1>Film Search Page</h1>
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

            {emptySearch ? <p>No results found</p> : ""}

            <List
                title={searchResults.length ? "Films matching your search" : ""}
            >
                {searchResults.map((film, key) => (
                    <Film
                        key={key}
                        film={film}
                        buttonClass={"add"}
                        handleClick={() => {
                            handleAddFilm(film)
                        }}
                    />
                ))}
            </List>
        </ScrollDiv>
    )
}

export default connect(null, mapDispatchToProps)(Home)
