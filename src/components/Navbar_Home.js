import React from 'react';

const Navbar_Home = props => {
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container">
                <a className="navbar-brand" href="#">iDeal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#collapseThree" data-toggle="collapse">
                                <i className="material-icons">
                                    search
                                </i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/items"><i className="material-icons">
                                home
                            </i> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="material-icons">
                                account_circle
                            </i></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                <i className="material-icons">
                                    settings
                                </i>
                            </a>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">اردو</a>
                                <a className="dropdown-item" href="#">English</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
            <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                        <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            <i className="material-icons">
                                storage
                            </i>
                            <b>Categories  </b>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Danish 1</a>
                            <a className="dropdown-item" href="#">Danish 2</a>
                            <a className="dropdown-item" href="#">Danish 3</a>
                            <a className="dropdown-item" href="#">Danish 4</a>
                        </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="form-group">
                            <input type="text" value="" placeholder="Regular" className="form-control"/>
                        </div>
                    </div>
                    <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        <i className="material-icons">
                            location_on
                        </i>
                        <b>Location  </b>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Danish 5</a>
                        <a className="dropdown-item" href="#">Danish 6</a>
                        <a className="dropdown-item" href="#">Danish 7</a>
                        <a className="dropdown-item" href="#">Danish 8</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar_Home;