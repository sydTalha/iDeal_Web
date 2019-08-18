import React from 'react';
import CarouselItem from '../CarouselItem';

const CardItemInfo = (props)=>{
    return(

        <div className="card mb-3">
            <div className="card-img-top">
                <CarouselItem imgArr={props.arr}/>
            </div>
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <h4 className="card-text" style={titleStyle}>{props.price} Rs/_</h4>

                </div>
        </div>

    );
};

const titleStyle={
    color: '#2879fe'
};

const extraImgStyle={
    width: '65px',
    height: '65px',
    border: '2px solid #fff',
    borderRadius: '8px',
    marginLeft: '5px',
    marginRight: '5px'
};

export default CardItemInfo;