import React from "react"
import "./App.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/FilmsList"
import Nav from "./utilities/Nav"
import FilmsList from "./pages/FilmsList"

const App = (...props) => {
    return (
        <Router>
            <div className="wrapper">
                <Nav />
                <section className="scroll-container">
                    <Switch>
                        <Route exact path="/films" component={FilmsList} />
                        <Route path="/" component={Home} />
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </section>
            </div>
        </Router>
    )
}

export default App
