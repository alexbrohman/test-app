import React from "react"

const Film = ({ film, handleClick, buttonClass }) => {
    console.log(film)
    return (
        <div className="film-wrap">
            <div className="film-img-wrap">
                <img
                    src={
                        film.Poster !== "N/A"
                            ? film.Poster
                            : "https://lightwidget.com/wp-content/uploads/local-file-not-found.png"
                    }
                    alt={`${film.Title} poster`}
                />
            </div>
            <div className="film-data">
                <h2>{film.Title}</h2>
                <span className="film-year">{film.Year}</span>
            </div>

            <span onClick={handleClick} className={buttonClass}></span>
        </div>
    )
}

export default Film
