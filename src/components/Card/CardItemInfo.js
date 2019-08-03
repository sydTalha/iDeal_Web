import React from 'react';
import CarouselItem from '../CarouselItem';

const CardItemInfo = ()=>{
    return(

        <div className="card mb-3">
            <div className="card-img-top">
                <CarouselItem/>
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

export default CardItemInfo;