import React,{ Component } from 'react';
import CardShop from '../components/Card/CardShop';


class Items extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <CardShop/>
                    </div>
                    <div className='col'>
                        <CardShop/>
                    </div>
                    <div className='col'>
                        <CardShop/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <CardShop/>
                    </div>
                    <div className='col'>
                        <CardShop/>
                    </div>
                    <div className='col'>
                        <CardShop/>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Items);