import React, {Component} from 'react';
import Home from './Page/Home/Home'
import Items from './Page/Items';
import Shops from './Page/Shops';
import PersonShop from './Page/PersonShop'
import ItemDetail from './Page/ItemDetail';
import Loader from './components/Loader/Loader';
import Signup from './Page/Signup';
import NavHome from './components/Navbar/NavbarHome';
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import Footer from "./components/Footer/footer";
import {User} from "./Model/User";

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            login:false,
            load:false,
            dataOBJ:null,
            user:null,

        };
        App.handleLogout = App.handleLogout.bind(this);
        this.getData=this.getData.bind(this);
    }

    getData(username,password){
        fetch('https://192.168.100.10/ideal_web/api/login.php', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                "username": username,
                "password": password,
            })
        })
            .then((response) => response.json())
            .then((res)=> {
                if(res["firstName"]!=='') {
                    const user = new User(res["firstName"], res["lastName"], res["username"], res["email"],
                        res["contactNum"], res["province"], res["city"], res["zip"], res["profilePic"], res["address"], res["_id"]);
                    this.setState({
                        login: true,
                        user: user
                    });
                }
            })
            .catch((e)=> {
                    console.log(e);
                    this.setState({
                        error: 'invalid user'
                    })
                }
            );
    }

    static handleLogout(){
        this.setState({
            login:false
        });
        sessionStorage.clear();

        window.location.replace('/home');
    }

    componentDidMount() {

        fetch('https://192.168.100.10/ideal_web/api/init.php', {
            method: 'get',
        })
            .then((response) => response.json())
            .then((config)=> {
                this.setState({
                    load: config
                });
            })
            .catch((e)=>console.log(e));
        if(sessionStorage.getItem("id")!==null){
            this.setState({
                login:true
            })
        }
    }

    render() {
        let hist = createBrowserHistory();

        return this.state.load===false ?
            (
                <div style={styleLoading}>
                    <Loader/>
                </div>
            )
                :
            (
            <div className='index-page'>
                {
                    this.state.login ?
                        <NavHome loginFunction={App.login}
                                 login={this.state.login}
                                 logout={App.handleLogout}
                                 data={this.getData}
                                  />
                        :
                        <NavHome loginFunction={App.login}
                                 login={this.state.login}
                                 logout={App.handleLogout}
                                 data={this.getData}
                        />
                    // change={this.handleChange}
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

const styleLoading={
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};

export default (App)
