import React,{ Component } from 'react';
import Navbar_Home from "../components/Navbar_Home";
import Footer from '../components/homepage/footer/footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar_Home/>
                <Footer/>
            </div>
        );
    }
}

export default (Home);