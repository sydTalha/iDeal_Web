import React,{ Component } from 'react';
import Map from '../../components/Map/Map';
import './homeStyle.css';

class Home extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className="squares square1"/>
                <div className="squares square3"/>
                <div className="squares square5"/>
                <div className="squares square6"/>
                <div className="squares square7"/>
                <div className="container">
                    <div className="row">
                        <div className='col'>
                            <h1 className='text-dark'>The dependable source for medical equipments</h1>
                            <a  role='button' className="btn btn-success" href='/shops'>Find Shop</a>
                            <br/>
                            <a  className="btn btn-outline-success text-dark" href='./signup'>Open Shop</a>
                        </div>
                        <div className='col-md-auto'>
                            <Map/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default (Home);