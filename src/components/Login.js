import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


class Login extends Component{
//162600827691-k9rpevo7p5h7tfqossr3a36lb6351mn5.apps.googleusercontent.com

    constructor(props){
        super(props);

        this.state={
            login:{
                email: '',
                password: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(event){
        let value = event.target.value;
        let id = event.target.id;
        this.setState(
            prevState => ({
                login: {
                    ...prevState.login,
                    [id]: value
                }
            }),
        );
    }
    handleFormSubmit(event){
        event.preventDefault();
        let user = this.state.login;
        if(user.email === "" || user.password === ""){
            console.log("fields empty")
        }
        else{
            //login user

        }
    }

    render() {

        const responseFacebook = (response) => {
            console.log(response);
        };

        const responseGoogle = (response) => {
            console.log(response);
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
                                <h4 className="card-title">Log in</h4>
                                <div className="social-line">
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-white">


                                    </a>
                                    <FacebookLogin
                                        icon={<i className="fa fa-facebook-square"/>}
                                        cssClass="btn btn-just-icon btn-link btn-white"
                                        appId="867607940288415"
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                    />

                                    <GoogleLogin
                                        clientId="162600827691-k9rpevo7p5h7tfqossr3a36lb6351mn5.apps.googleusercontent.com"

                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                    />

                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                                        <i className="fa fa-twitter"/>
                                    </a>
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                                        <i className="fa fa-google-plus"/>
                                    </a>
                                </div>
                            </div>
                            <div className="modal-body">
                                <form className="form" method="" action="">
                                    <p className="description text-center">Or Be Classical</p>
                                    <div className="card-body">

                                        <div className="form-group bmd-form-group has-success">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i
                                                        className="material-icons">email</i></div>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-group bmd-form-group has-success">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i
                                                        className="material-icons">lock_outline</i></div>
                                                </div>
                                                <input type="password" placeholder="Password" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <a href="#pablo" className="btn btn-success btn-round">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Login;