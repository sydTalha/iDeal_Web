import React, { Component } from 'react';
import Home from './Page/Home'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

class App extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        var hist = createBrowserHistory();
        return (
            <Router history={hist}>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}
export default (App)
