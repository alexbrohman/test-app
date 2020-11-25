import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active gold">
                Search
            </NavLink>
            <NavLink to="/films" activeClassName="active orange">
                My Films
            </NavLink>
        </nav>
    )
}

export default Nav
