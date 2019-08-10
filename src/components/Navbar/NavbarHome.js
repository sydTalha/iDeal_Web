import React from 'react';
import Login from '../Login';
import './navbarStyle.css';

const NavbarHome = () => {
    const home='/home';
    const signup='/signup';
    const itemPage='/items';
    return(
        <div>
            <nav className="navbar  bg-info" id="navbar-position">
                <div className="container">
                    <a className="navbar-brand" id="logo-brand" href="/">iDeal</a>
                    <div>
                        <ul className="nav"  style={areaIconStyle}>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tooltip" title="Home" href={home}>
                                    <i className="material-icons" style={iconStyle}>
                                        home
                                    </i>
                                </a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href={itemPage}>
                                    <i className="material-icons" data-toggle="tooltip" title="Search" style={iconStyle}>
                                        search
                                    </i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                    <i className="material-icons" data-toggle="tooltip" title="Profile" style={iconStyle}>
                                        account_circle
                                    </i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" data-toggle="modal" data-target="#loginModal">Login</a>
                                    <a className="dropdown-item" href={signup}>Sign up</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                    <i className="material-icons" data-toggle="tooltip" title="Setting" style={iconStyle}>
                                        settings
                                    </i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <p className="dropdown-item">اردو</p>
                                    <p className="dropdown-item">English</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Login/>
        </div>
    );
};
const areaIconStyle={
    textAlign:'center'
};
const iconStyle={
    color:'#fff',
    marginRight: '10px',
    marginLeft: '10px',
    fontSize: '30px',
};
export default NavbarHome;