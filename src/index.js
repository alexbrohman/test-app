import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { Provider } from "react-redux"
import configureStore from "./store/index.js"

const store = configureStore(window.REDUX_INITIAL_DATA)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
