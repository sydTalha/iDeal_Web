import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import Alert from "./Alert/Alert";
import {User} from "../Model/User";


class Login extends Component{
//162600827691-k9rpevo7p5h7tfqossr3a36lb6351mn5.apps.googleusercontent.com

    constructor(props){
        super(props);
        this.state={
          error:null,
            loginData:{
                username:'',
                password:''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    handleLogin(){
        const password=this.state.loginData["password"];
        const username=this.state.loginData["username"];
        if(password==='' || username===''){
            this.setState({
                error:'Fields are empty'
            })
        }
        else {
            this.props.loginData(username,password);
        }


    }

    handleChange(e) {
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


    render() {
        const responseFacebook = (response) => {
            const name=response["name"];
            const email=response["email"];
            const picture=response["picture"]["data"]["url"];
            window.location.replace(`/signup?social=facebook&&username=${name}&&`+
                `email=${email}&&profilePicture=${picture}`);
        };

        const responseGoogle = (response) => {
            const name=response["w3"]["ig"];
            const email=response["w3"]["U3"];
            const picture=response["w3"]["Paa"];
            window.location.replace(`/signup?social=google&&username=${name}&&`+
                `email=${email}&&profilePicture=${picture}`);
        };



        return (
            <div className="modal fade" id="loginModal" tabIndex="-1" role="">
                <div className="modal-dialog modal-login" role="document">
                    <div className="modal-content">
                        <div className="card card-signup card-plain">
                            <div className=" card-header card-header-info text-center">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                    <i className="material-icons text-white">clear</i>
                                </button>
                                <h4 className="card-title">&nbsp;&nbsp;&nbsp;&nbsp;Log in</h4>
                                <div className="social-line">
                                    <a className="btn btn-just-icon btn-link btn-white">
                                        <FacebookLogin
                                            cssClass="btn btn-just-icon btn-link btn-white"
                                            appId="867607940288415"
                                            fields="name,email,picture"
                                            callback={responseFacebook}
                                            render={renderProps => (
                                                <button onClick={renderProps.onClick} style={
                                                    {
                                                        backgroundColor:'transparent',
                                                        border:'none'
                                                    }
                                                }>
                                                    <FontAwesomeIcon style={
                                                        {
                                                            backgroundColor:'white',
                                                            padding:'2px',
                                                            borderRadius:'5px',
                                                            color: '#2879fe',
                                                            height:"32px",
                                                            width:'32px',
                                                            paddingBottom:'0px'
                                                        }
                                                    }
                                                                     icon={faFacebookF}/></button>
                                            )}
                                        />
                                    </a>
                                    <a className="btn btn-just-icon btn-link btn-white">
                                        <GoogleLogin
                                            clientId="162600827691-k9rpevo7p5h7tfqossr3a36lb6351mn5.apps.googleusercontent.com"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            render={renderProps => (
                                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={
                                                    {
                                                        backgroundColor:'transparent',
                                                        border:'none'
                                                    }
                                                }>
                                                    <FontAwesomeIcon style={
                                                        {
                                                            backgroundColor:'white',
                                                            padding:'2px',
                                                            borderRadius:'5px',
                                                            color: '#2879fe',
                                                            height:"32px",
                                                            width:'32px',
                                                        }
                                                    }
                                                                     icon={faGoogle}/>
                                                </button>
                                            )}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="modal-body">
                                <form className="form" method="" action="">

                                    <p className="description text-center">Or Be Classical</p>
                                    <div className="card-body">
                                        {
                                            this.state.error===null?
                                                <div/>
                                                :
                                                <Alert onClick={this.handleToggle} message={this.state.error}/>
                                        }
                                        <div className="form-group bmd-form-group has-info">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i
                                                        className="material-icons">person</i></div>
                                                </div>
                                                <input
                                                    id="username"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Username"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group bmd-form-group has-info">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i
                                                        className="material-icons">lock_outline</i></div>
                                                </div>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    className="form-control"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <a onClick={this.handleLogin} className="btn btn-success btn-round text-white">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Login;