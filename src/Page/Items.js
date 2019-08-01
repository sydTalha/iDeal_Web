import React,{ Component } from 'react';
import CardItem from '../components/CardItem';


class Items extends Component {
    render() {
        return (
            <div >
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        );
    }
}

export default (Items);