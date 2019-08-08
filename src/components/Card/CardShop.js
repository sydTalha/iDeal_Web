import React from 'react';
import CountdownVisual from '../CountdownVisual';

const CardItem = () => {
    const link="https://media.wired.com/photos/59266fdecfe0d93c47430335/master/pass/Medical-Device-2x1-467546179.jpg";
    return(
        <div className="card" style={styleCard}>
            <div className="card-background">
                <div className='bg-dark'>
                    <img className='card-img-top' src={link}/>
                </div>
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
                <div className="stats ml-auto" >
                    <button className="btn btn-success">
                        follow
                    </button>
                </div>
            </div>
        </div>
    );
};

const styleCard={
    width:'20rem'
};
const styleButton={
    marginBottom: '-10px'
};
export default CardItem;