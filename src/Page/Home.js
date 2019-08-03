import React,{ Component } from 'react';
import Map from '../components/Map/Map';

class Home extends Component {
    render() {
        return (
            <div style={homeStyle}>
                <div className="container">
                    <div className="row">
                        <div className='col'>
                            <h1>The dependable source for medical equipments</h1>
                            <a  role='button' className="btn btn-success" href='/shops'>Find Shop</a>
                            <br/>
                            <a  className="btn btn-outline-success">Open Shop</a>
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
const homeStyle={
};
export default (Home);