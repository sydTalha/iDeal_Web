import React from 'react';
import CountdownVisual from '../CountdownVisual';

const CardItem = () => {
    const link="https://media.wired.com/photos/59266fdecfe0d93c47430335/master/pass/Medical-Device-2x1-467546179.jpg";
    return(
        <div className="card" style={styleCard}>
            <div className="card-background" >
                <div className='bg-dark'>
                    <span className="badge badge-pill badge-warning" style={styleBadge}>Featured</span>
                    <div style={styleCountdown}>
                        <CountdownVisual />
                    </div>
                    <img className='card-img-top' src={link}/>
                </div>
            </div>
            <div className="card-body">
                <h4 className="card-title">
                    <a href="/detail">its a medical device which looks like a ECG machine</a>
                </h4>
            </div>
            <div className='card-footer'>
                <div className="author">
                    <a href="/personshop">
                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                            alt="..." className="avatar img-raised"/>
                            <span>Tania</span>
                    </a>
                </div>
                <div className="stats ml-auto">
                    <i className="material-icons">favorite</i>
                </div>
            </div>
        </div>
    );
};


const styleCard={
    width:'20rem'
};

const styleCountdown={
    position:'absolute',
    marginTop: '90px',
    marginLeft: '22px'
};

const styleBadge={
    position:'absolute',
    marginTop:'5px',
    marginLeft:'5px'
};

export default CardItem;