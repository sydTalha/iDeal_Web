import React from 'react';
import {Component} from 'react';
import './style.css';

class Footer extends Component{
    render() {
        return(

                <footer className="footer bg-info" data-background-color="black">
                    <div className="container">
                        <nav className="float-left">
                            <ul>
                                <li>
                                    <p className="font-weight-bold">
                                        BE IN TOUCH WITH US:
                                    </p>
                                </li>

                                <li>
                                    <div id="email_field">
                                        <input type="email" id="email_input"/>
                                        <button className="btn bg-dark">JOIN US</button>

                                    </div>

                                </li>

                                <li>
                                    <i className="fa fa-facebook" id="fb_icon"></i>
                                    <i className="fa fa-twitter" id="fb_icon"></i>
                                    <i className="fa fa-google" id="fb_icon"></i>
                                    <i className="fa fa-instagram" id="fb_icon"></i>
                                    <i className="fa fa-pinterest" id="fb_icon"></i>

                                </li>

                                <li>
                                    <a>

                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </footer>
        );
    }
}
export default Footer;