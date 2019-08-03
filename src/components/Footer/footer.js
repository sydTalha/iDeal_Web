import React from 'react';
import {Component} from 'react';
import './footerStyle.css'

class Footer extends Component{
    render() {
        return(
            <footer className="footer footer-default bg-info">
                <div className="container">
                    <nav className="float-none">
                        <ul>
                            <li>
                                <h3 className='font-weight-bold heading-footer'>BE IN TOUCH WITH US:</h3>
                            </li>
                            <li>
                                <div id="email_field">
                                    <input type="email" id="email_input" placeholder='Email'/>
                                    <button className="btn btn-dark bg-dark">
                                        <i className="material-icons">email</i> join us
                                    </button>
                                </div>
                            </li>

                        </ul>
                    </nav>
                    <div className="float-none">
                        <i className="fa fa-facebook icon-social " />
                        <i className="fa fa-twitter icon-social" />
                        <i className="fa fa-google icon-social" />
                        <i className="fa fa-instagram icon-social" />
                        <i className="fa fa-pinterest icon-social" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;