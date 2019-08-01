import React,{ Component } from 'react';
import CardShop from '../components/CardShop';


class Items extends Component {
    render() {
        return (
            <div >
                <CardShop/>
                <CardShop/>
                <CardShop/>
                <CardShop/>
            </div>
        );
    }
}

export default (Items);