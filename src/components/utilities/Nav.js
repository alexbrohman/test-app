import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active green">
                Home
            </NavLink>
            <NavLink to="/about" activeClassName="active orange">
                About
            </NavLink>
        </nav>
    )
}

export default Nav
