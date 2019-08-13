import React,{ Component } from 'react';
import CardItem from '../components/Card/CardItem';
import Search from "../components/Search/Search";

class Items extends Component {
    render() {
        const time=1565529650349;
        return (
            <div>
                <Search/>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <CardItem  timeCount={time}/>
                        </div>
                        <div className='col'>
                            <CardItem/>
                        </div>
                        <div className='col'>
                            <CardItem/>
                        </div>
                    </div>
                    <div className='row'>
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