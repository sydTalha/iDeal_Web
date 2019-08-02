import React, { Component } from 'react';
import Home from './Page/Home'
import Items from './Page/Items';
import Shpos from './Page/Shops';
import ItemDescription from './Page/ItemDescription'
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
                    <Route path="/items" component={Items} />
                    <Route path="/shops" component={Shpos} />
                    <Route path="/itemDescription" component={ItemDescription}/>
                    <Route path="/" component={Home} />

                </Switch>
            </Router>
        );
    }
}
export default (App)
