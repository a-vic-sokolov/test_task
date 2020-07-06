import React from 'react'
import ReactDOM from 'react-dom'
import {App} from "./components/App";
import {Route, Router} from "react-router";
import {createBrowserHistory} from "history";





const history = createBrowserHistory()

const app = (
    <Router  history={history}>
        <App/>

    </Router>
)

ReactDOM.render(app, document.getElementById('root')
);