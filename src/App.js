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
import {User} from "./Model/User";

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            login:false,
            load:false,
            dataOBJ:null,
            user:null,
            loginData:{
                username:'',
                password:''
            }
        };
        App.login = App.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        let value = e.target.value;
        let name = e.target.id;
        this.setState(
            prevState => ({
                loginData:{
                    ...prevState.loginData,
                    [name]: value,
                }
            })
        );
    }

    handleLogout(){

    }
    static login(e) {
        e.preventDefault();
        const password=this.state.loginData["password"];
        const username=this.state.loginData["password"];
        if(password==='' || username===''){

        }
        else {
            fetch('https://localhost/webProject/login.php', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                })
            })
                .then((response) => response.json())
                .then((res)=> {
                    const user=new User(res["firstName"],res["lastName"],res["userName"],res["email"],
                        res["contactNumber"],res["location"],res["profilePic"]);
                    this.setState({
                        login:true,
                        user:user
                    });
                })
                .catch((e)=>console.log(e));
        }

    }
    componentDidMount() {

        fetch('https://192.168.100.7/webProject/config.php', {
            method: 'get',
        })
            .then((response) => response.json())
            .then((config)=> {
                this.setState({
                    load: config
                });
            })
            .catch(()=>console.log('error'));

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
                        <NavHome loginFunction={App.login} change={this.handleChange}
                                 login={this.state.login} avatar={this.state.user["profilePicture"]}/>
                        :
                        <NavHome loginFunction={App.login} login={this.state.login} change={this.handleChange}/>
                }
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

const styleLoading={
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};

export default (App)
