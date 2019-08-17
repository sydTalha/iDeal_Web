import React from 'react';
import Login from '../Login';
import './navbarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

const NavbarHome = (props) => {
    const home='/home';
    const signup='/signup';
    const itemPage='/items';
    function forwardProfile(){
        window.location.replace(`/personshop?me=true`);
    }
    return(
        <div>
            <nav className="navbar bg-info" id="navbar-position">
                <div className="container">
                    <a className="navbar-brand" id="logo-brand" href="/">iDeal</a>
                    <div>
                        <ul className="nav"  style={areaIconStyle}>
                            <li className="nav-item">
                                <a className="nav-link"  href={home}>
                                    <div data-toggle="tooltip" style={iconStyle} title="Home">
                                        <FontAwesomeIcon  icon={faHome} />
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href={itemPage} style={iconStyle}>
                                    <div data-toggle="tooltip" style={iconStyle} title="Search">
                                        <FontAwesomeIcon  icon={faSearch} />
                                    </div>
                                </a>
                            </li>
                            {
                                props.login===true ?
                                    <li className="nav-item">
                                        <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                                           data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                            <div data-toggle="tooltip" style={iconStyle} title="Account">
                                                <img src={sessionStorage.getItem("profilePicture")}
                                                     alt="avatar" style={avatarStyle}/>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item">
                                                <FontAwesomeIcon  icon={faHeart} />
                                                &nbsp;&nbsp;&nbsp;&nbsp;Wish List
                                            </a>
                                            <a className="dropdown-item" onClick={forwardProfile}>
                                                <FontAwesomeIcon  icon={faUser} />
                                                &nbsp;&nbsp;&nbsp;&nbsp;Profile
                                            </a>
                                            <hr/>
                                            <a className="dropdown-item" onClick={props.logout}>
                                                <FontAwesomeIcon  icon={faSignOutAlt} />
                                                &nbsp;&nbsp;&nbsp;&nbsp;Logout
                                            </a>
                                        </div>
                                    </li>
                                :
                                <li className="nav-item">
                                    <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                        <div data-toggle="tooltip" style={iconStyle} title="Account">
                                            <FontAwesomeIcon  icon={faUserCircle} />
                                        </div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" data-toggle="modal" data-target="#loginModal">Login</a>
                                        <a className="dropdown-item" href={signup}>Sign up</a>
                                    </div>
                                </li>
                            }

                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                    <div data-toggle="tooltip" style={iconStyle} title="Settings">
                                        <FontAwesomeIcon  icon={faCog} />
                                    </div>
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
            <Login loginData={props.data}/>
        </div>
    );
};
//handleChange={props.change}
const areaIconStyle={
    textAlign:'center'
};
const iconStyle={
    color:'#fff',
    marginRight: '10px',
    marginLeft: '10px',
    fontSize: '30px',
};
const avatarStyle={
    border: '3px solid white',
    width:'32px',
    height:'32px',
    borderRadius:'25px',
};
export default NavbarHome;