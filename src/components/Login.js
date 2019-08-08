import React from 'react';

const Login = () => {

    return(
        <div className="modal fade" id="loginModal" tabIndex="-1" role="">
            <div className="modal-dialog modal-login" role="document">
                <div className="modal-content">
                    <div className="card card-signup card-plain">
                            <div className=" card-header card-header-info text-center">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                    <i className="material-icons">clear</i>
                                </button>
                                <h4 className="card-title">Log in</h4>
                                <div className="social-line">
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                                        <i className="fa fa-facebook-square"/>
                                    </a>
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

export default Login;