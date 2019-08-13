import React,{ Component } from 'react';
import Map from '../../components/Map/Map';
import './homeStyle.css';
import background from '../../graphics/waves.png';

class Home extends Component {
    render() {
        const links={
          shops:'/shops',
          signUp:'/signup'
        };
        return (
            <div>
                <section className='section-div'>
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
                                    <a  role='button' className="btn btn-success" href={links['shops']}>Find Shop</a>
                                    <br/>
                                    <a  className="btn btn-outline-success text-dark" href={links['signUp']}>Open Shop</a>
                                </div>
                                <div className='col-md-auto'>
                                    <Map/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-div'>
                    <div className='container'>
                        <h1 className='text-center font-weight-bold'>A place where Buyers meet Sellers
                            <br/>
                        <a className='btn btn-success btn-round btn-link' data-toggle="modal" data-target="#loginModal">
                            Connect Now !
                        </a>
                        </h1>
                        <img src={background} style={backgroundStyle} alt=''/>
                        <div className='row'>
                            <div className="col-6 image-illustrations position-left">
                                <div className="send"/>
                            </div>
                            <div className="col-6 image-illustrations position-right">
                                <div className="delivery"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
const backgroundStyle={
    position:'absolute',
    left:'10%',
    height:'70%',
    width:'70%'
};
export default (Home);