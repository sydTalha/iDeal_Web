import React from 'react';
import ItemCarousel from './ItemCarousel';

const ItemInfoCard = ()=>{
    return(

        <div className="card mb-3">
            <div className="card-img-top">
                <ItemCarousel/>
            </div>
                <div className="card-body">
                    <h3 className="card-title">ECG Machine</h3>
                    <h4 className="card-text" style={titleStyle}>Rs. 400/-</h4>

                </div>
        </div>

    );
};

const titleStyle={
    color: '#2879fe'
};

export default ItemInfoCard;