import React,{ Component } from 'react';
import Map from '../components/Map';
import './HomeStyle.css';


class Home extends Component {
    render() {
        return (
            <div style={styleHome}>
                <div className="container">
                    <div className="row">
                        <div className='col'>
                            <h1>Tag-line</h1>
                            <button type="button" className="btn btn-success">Find Shop</button>
                            <br/>
                            <button type="button" className="btn btn-outline-success">Open Shop</button>
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

const styleHome={
    width:'100%',
    height: '90vh'
};

export default (Home);