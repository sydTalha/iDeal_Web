import React, { Component } from 'react';
import Home from './Page/Home/Home'
import Items from './Page/Items';
import Shops from './Page/Shops';
import PersonShop from './Page/PersonShop'
import ItemDetail from './Page/ItemDetail';
import Loader from './components/Loader/Loader';
import Signup from './Page/Signup';
import NavHome from './components/Navbar/NavbarHome';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            load:true
        }
    }

    componentWillMount(){

    };
    render() {
        let hist = createBrowserHistory();

        return this.state.load===false ?
            (
                <Loader/>
            )
                :
            (
            <div className='index-page bg-rose'>

                <NavHome/>
                {
                    hist.location["pathname"]!=='/' && hist.location["pathname"]!=='/home' &&
                        hist.location["pathname"]!=='/signup' && hist.location["pathname"]!=='/personshop' &&
                            <Breadcrumb/>
                }
                <Router history={hist}>
                    <Switch>
                        <Route path="/items" component={Items} />
                        <Route path="/shops" component={Shops} />
                        <Route path="/detail" component={ItemDetail} />
                        <Route path="/personshop" component={PersonShop} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/home" component={Home} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>

                <Footer />
            </div>
        );
    }
}

export default (App)
