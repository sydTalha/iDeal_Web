import React,{ Component } from 'react';
import Navbar_Home from "../components/Navbar_Home";
import Map from '../components/Map';
import Footer from '../components/homepage/footer/footer';

class Home extends Component {
    render() {
        return (
            <div >
                <Navbar_Home/>
                <div className="container">
                    <div className="row">
                        <div className='col-4'>
                            <h1>Tag-line</h1>
                        </div>
                        <div className='col-8'>
                            <Map/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default (Home);