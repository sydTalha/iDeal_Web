import React, { Component } from 'react';
import Home from './Page/Home'
import Items from './Page/Items';
import Shops from './Page/Shops';
import Navbar from './components/Navbar_Home';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Footer from "./components/homepage/footer/footer";

class App extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        let hist = createBrowserHistory();
        return (
            <div>
                <Navbar/>
                <Router history={hist}>
                    <Switch>
                        <Route path="/items" component={Items} />
                        <Route path="/shops" component={Shops} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
                <div style={styleFooter}>
                    <Footer />
                </div>
            </div>
        );
    }
}

const styleFooter={
    marginTop:'0px'
};
export default (App)
