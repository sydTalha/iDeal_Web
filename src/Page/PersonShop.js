import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";

class PersonShop extends Component {
    render() {
        return (
            <div className='profile-page'>
                <div className="page-header" style={style}/>
                <div className="profile-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto">
                                <div className="profile">
                                    <div className="avatar">
                                        <img src={sessionStorage.getItem("profilePicture")} alt="img"
                                             className="img-raised rounded-circle img-fluid bg-dark"/>
                                    </div>
                                    <div className="name">
                                        <h3 className="title">{sessionStorage.getItem("userName")}</h3>
                                        <h5 className="text-left">
                                            <FontAwesomeIcon icon={faMapMarkerAlt}/> {sessionStorage.getItem("location")}
                                        </h5>
                                        <h5 className="text-left">
                                            <FontAwesomeIcon icon={faPhoneAlt}/> {sessionStorage.getItem("contactNumber")}
                                        </h5>
                                        <h5 className="text-left">
                                            <FontAwesomeIcon icon={faEnvelope}/> {sessionStorage.getItem("email")}
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container"
                     style={{
                         marginTop:'100px',
                         marginBottom:'100px',
                     }}>
                    <div className="row">
                        <div className="col-2">
                            <ul className="nav nav-pills nav-pills-icons nav-pills-info flex-column" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#dashboard-1" role="tab"
                                       data-toggle="tab">
                                        <i className="material-icons">dashboard</i>
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#schedule-1" role="tab"
                                       data-toggle="tab">
                                        <i className="material-icons">add</i>
                                        Add Item
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="tab-content tab-space">
                                <div className="tab-pane active" id="dashboard-1">
                                    Collaboratively administrate empowered markets via plug-and-play
                                    networks. Dynamically procrastinate B2C users after installed
                                </div>
                                <div className="tab-pane" id="schedule-1">
                                    Efficiently unleash cross-media information without cross-media value.
                                    Quickly maximize timely deliverables for real-time schemas.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const style={
    backgroundImage: "url('https://images.unsplash.com/photo-1484009479330-67a6e7339295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')"
};
export default (PersonShop);