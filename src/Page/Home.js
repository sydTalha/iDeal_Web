import React,{ Component } from 'react';
import Navbar_Home from "../components/Navbar_Home";
import Map from '../components/Map';
import Footer from '../components/homepage/footer/footer';
import './HomeStyle.css';


class Home extends Component {
    render() {
        return (
            <div >
                <Navbar_Home />
                <div className="container">
                    <div className="row">
                        <div className='col'>
                            <h1>Tag-line</h1>
                            <button type="button" className="btn btn-primary">Find Shop</button>
                            <br/>
                            <button type="button" className="btn btn-primary">Open Shop</button>
                        </div>
                        <div className='col-md-auto'>
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