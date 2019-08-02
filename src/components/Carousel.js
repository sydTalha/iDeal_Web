import React from 'react';
const Carousel=()=>{
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <image data-target="#carouselExampleIndicators" data-slide-to="0" src="../../../assets/img/bg2.jpg" height="55px" width="55px"></image>
                    <image data-target="#carouselExampleIndicators" data-slide-to="1" src="../../../assets/img/bg3.jpg" height="55px" width="55px"></image>
                    <image data-target="#carouselExampleIndicators" data-slide-to="2" src="../../../assets/img/bg.jpg" height="55px" width="55px"></image>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="../../../assets/img/bg2.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../../../assets/img/bg3.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../../../assets/img/bg.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;