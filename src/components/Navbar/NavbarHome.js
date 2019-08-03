import React from 'react';
import './navbarStyle.css';

const NavbarHome = () => {
    return(
        <div>
            <nav className="navbar  bg-info" id="navbar-position">
                <div className="container">
                    <a className="navbar-brand" id="logo-brand" href="/">iDeal</a>
                    <div>
                        <ul className="nav"  style={areaIconStyle}>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i className="material-icons" style={iconStyle}>
                                        home
                                    </i>
                                </a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="/items">
                                    <i className="material-icons" style={iconStyle}>
                                        search
                                    </i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="material-icons" style={iconStyle}>
                                        account_circle
                                    </i>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                    <i className="material-icons" style={iconStyle}>
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