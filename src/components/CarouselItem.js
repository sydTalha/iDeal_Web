import React from 'react';
import {Component} from 'react';

class CarouselItem extends Component{
    constructor(props){
        super(props);

    }
    render() {
        return(
            <div>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-indicators">

                        <img src="https://media.istockphoto.com/photos/medical-vital-signs-monitor-in-a-hospital-picture-id901063844?k=6&m=901063844&s=612x612&w=0&h=JsITw0UnNwPGEfUUij2wUQm6vEhBfg4XmGR0Jpt7bdA=" alt="img1" style={extraImgStyle} data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <img src="https://media.istockphoto.com/photos/medical-vital-signs-monitor-in-a-hospital-picture-id901063844?k=6&m=901063844&s=612x612&w=0&h=JsITw0UnNwPGEfUUij2wUQm6vEhBfg4XmGR0Jpt7bdA=" alt="img1" style={extraImgStyle} data-target="#carouselExampleIndicators" data-slide-to="1" />
                        <img src="https://media.istockphoto.com/photos/medical-vital-signs-monitor-in-a-hospital-picture-id901063844?k=6&m=901063844&s=612x612&w=0&h=JsITw0UnNwPGEfUUij2wUQm6vEhBfg4XmGR0Jpt7bdA=" alt="img1" style={extraImgStyle} data-target="#carouselExampleIndicators" data-slide-to="2" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://media.istockphoto.com/photos/medical-vital-signs-monitor-in-a-hospital-picture-id901063844?k=6&m=901063844&s=612x612&w=0&h=JsITw0UnNwPGEfUUij2wUQm6vEhBfg4XmGR0Jpt7bdA=" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://media.istockphoto.com/photos/medical-vital-signs-monitor-in-a-hospital-picture-id901063844?k=6&m=901063844&s=612x612&w=0&h=JsITw0UnNwPGEfUUij2wUQm6vEhBfg4XmGR0Jpt7bdA=" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://media.istockphoto.com/photos/medical-vital-signs-monitor-in-a-hospital-picture-id901063844?k=6&m=901063844&s=612x612&w=0&h=JsITw0UnNwPGEfUUij2wUQm6vEhBfg4XmGR0Jpt7bdA=" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

const extraImgStyle={
    width: '65px',
    height: '65px',
    border: '2px solid #fff',
    borderRadius: '8px',
    marginLeft: '5px',
    marginRight: '5px'
};

export default CarouselItem;
