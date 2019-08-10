import React,{ Component } from 'react';
import CardItem from '../components/Card/CardItem';

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
                                        <img src="../assets/img/faces/christian.jpg" alt="img"
                                             className="img-raised rounded-circle img-fluid"/>
                                    </div>
                                    <div className="name">
                                        <h3 className="title">Christian Louboutin</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='container'>
                                <div className='row justify-content-md-center'>
                                    <div className='col'>
                                        <CardItem/>
                                    </div>
                                    <div className='col'>
                                        <CardItem/>
                                    </div>
                                    <div className='col'>
                                        <CardItem/>
                                    </div>
                                </div>
                                <div className='row justify-content-md-center'>
                                    <div className='col'>
                                        <CardItem/>
                                    </div>
                                    <div className='col'>
                                        <CardItem/>
                                    </div>
                                    <div className='col'>
                                        <CardItem/>
                                    </div>
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
    backgroundImage: "url('../assets/img/city-profile.jpg')"
};
export default (PersonShop);