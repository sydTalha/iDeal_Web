import React,{ Component } from 'react';
import CardItem from '../components/Card/CardItem';
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";

class Items extends Component {
    render() {
        const time=1565829650349;
        return (
            <div>
                <Search/>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <CardItem timeCount={1565829650349}/>
                        </div>
                        <div className='col'>
                            <CardItem/>
                        </div>
                        <div className='col'>
                            <CardItem timeCount={1565929650349}/>
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
                <Pagination/>
            </div>
        );
    }
}

export default (Items);