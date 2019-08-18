import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";

class ProfileOther extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{},
            items:[]
        }
    }
    componentDidMount() {

        const url = new URL(window.location.href);
        const dataId = url.searchParams.get("id");
        const user={
            "userid":dataId
        };
        fetch('https://192.168.100.10/ideal_web/api/getcurritems.php', {
            method: 'post',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then((config)=> {
                this.setState({
                    items:config
                });
            })
            .catch((e)=>console.log(e));

        fetch('https://192.168.100.10/ideal_web/api/ownerdetails.php', {
            method: 'post',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then((config)=> {
                this.setState({
                    user:config
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
                                        <img src={this.state.user.profilePic} alt="img"
                                             className="img-raised rounded-circle img-fluid bg-dark"/>
                                    </div>
                                    <div className="name">
                                        <h3 className="title">{this.state.user.firstname+
                                        ' '
                                        + this.state.user.lastname}
                                        </h3>
                                        <p className="text-gray">{this.state.user.username}
                                        </p>
                                        <h5 className="text-left">
                                            <FontAwesomeIcon icon={faMapMarkerAlt}/> {this.state.user.address
                                        + ', '+ this.state.user.city+ ', '+ this.state.user.province}
                                        </h5>
                                        <h5 className="text-left">
                                            <FontAwesomeIcon icon={faPhoneAlt}/> {this.state.user.contactNumber}
                                        </h5>
                                        <h5 className="text-left">
                                            <FontAwesomeIcon icon={faEnvelope}/> {this.state.user.email}
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    {
                        this.state.items.map(function (data) {
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
        );
    }
}
const style={
    backgroundImage: "url('https://images.unsplash.com/photo-1484009479330-67a6e7339295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')"
};
export default (ProfileOther);