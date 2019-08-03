import React,{ Component } from 'react';
import CardItem from '../components/Card/CardItem';


class Items extends Component {
    render() {
        return (
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
        );
    }
}

export default (Items);