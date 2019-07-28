import React from 'react';
import {Component} from 'react';
import './style.css';

class Footer extends Component{
    render() {
        return(
            <footer className="footer bg-info" data-background-color="black">
                <div className="container">
                    <div className='row'>
                        <div className='col'>
                            <p className="font-weight-bold">
                            BE IN TOUCH WITH US:
                            </p>
                        </div>
                        <div className='col-6'>
                            <div id="email_field">
                                <input type="email" id="email_input"/>
                                <button className="btn bg-dark">JOIN US</button>
                            </div>
                        </div>
                        <div className='col'>
                            <i className="fa fa-facebook" id="fb_icon"></i>
                            <i className="fa fa-twitter" id="fb_icon"></i>
                            <i className="fa fa-google" id="fb_icon"></i>
                            <i className="fa fa-instagram" id="fb_icon"></i>
                            <i className="fa fa-pinterest" id="fb_icon"></i>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;