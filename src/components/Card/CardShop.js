import React from 'react';

const CardItem = (props) => {
    function handleClick(){
        window.location.replace(`/personshop?me=false&&id=${props.id}`);
    }
    return(
        <div className="card" style={styleCard}>
            <div className='card-footer'>
                <div className="author">
                    <a onClick={handleClick}>
                        <img
                            src={props.pic}
                            alt="..." className="avatar img-raised"/>
                            <span>{props.name}</span>
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
export default CardItem;