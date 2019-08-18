import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import ItemForm from "../Form/ItemForm";

class ProfileMe extends Component {
    constructor(props){
        super(props);
        this.state={
            allItems:[]
        }
    }
    componentDidMount() {
        const user={
            "userid":sessionStorage.getItem("id")
        };
        fetch('https://192.168.100.10/ideal_web/api/getcurritems.php', {
            method: 'post',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then((config)=> {
                this.setState({
                    allItems:config
                });
            })
            .catch((e)=>console.log(e));
    }

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
                                        <h3 className="title">{sessionStorage.getItem("firstName")+
                                        ' '
                                        + sessionStorage.getItem("lastName")}
                                        </h3>
                                        <p className="text-gray">{sessionStorage.getItem("userName")}
                                        </p>
                                        <h5 className="text-left">
                                            <FontAwesomeIcon icon={faMapMarkerAlt}/> {sessionStorage.getItem("address")
                                        + ', '+ sessionStorage.getItem("city")+ ', '+ sessionStorage.getItem("province")}
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
                        <div className="col-2 border-right">
                            <ul className="nav nav-pills nav-pills-icons nav-pills-info flex-column" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#dashboard-1" role="tab"
                                       data-toggle="tab">
                                        <i className="material-icons">dashboard</i>
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#addItem" role="tab"
                                       data-toggle="tab">
                                        <i className="material-icons">add</i>
                                        Add Item
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col" >
                            <div className="tab-content tab-space">
                                <div className="tab-pane active" id="dashboard-1">
                                    <div className="container">
                                        <div className="row">
                                    {

                                        this.state.allItems.map(function (data) {
                                            return(
                                                <div className="col-auto">
                                                <div className="card"  style={{
                                                    width:"300px",
                                                    marginLeft:'5px',
                                                    marginRight:'5px'
                                                }}>
                                                    <div className="card-background" >
                                                        <div className='bg-dark'>

                                                            <img className='card-img-top'
                                                                 src={data.imgArr[0]}
                                                                 alt='img'
                                                                 style={{
                                                                     height:'200px',
                                                                 }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4 className="card-title">
                                                            <a>{data.name}</a>
                                                        </h4>
                                                    </div>
                                                </div>
                                                </div>
                                            )
                                        })
                                    }
                                            </div>
                                        </div>
                                </div>
                                <div className="tab-pane" id="addItem"

                                     style={{
                                         marginLeft:'10px'
                                     }}>
                                    <ItemForm/>
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
export default (ProfileMe);