import React, { Component } from 'react';
import Home from './Page/Home'
import Items from './Page/Items';
import Shops from './Page/Shops';
import PersonShop from './Page/PersonShop'
import ItemDetail from './Page/ItemDetail';
import NavHome from './components/Navbar/NavbarHome';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/footer";

class App extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        let hist = createBrowserHistory();
        return (
            <div className='index-page'>
                <NavHome/>
                <Router history={hist}>
                    <Switch>
                        <Route path="/items" component={Items} />
                        <Route path="/shops" component={Shops} />
                        <Route path="/detail" component={ItemDetail} />
                        <Route path="/personShop" component={PersonShop} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default (App)
