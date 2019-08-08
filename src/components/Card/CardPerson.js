import React from 'react'
const CardPerson=()=>{
    return(
        <div className="card">
            <div className="card-body ">
                <div className="author">
                    <a href="/personshop">
                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                            alt="..." className="avatar img-raised"/>
                        <h3 style={inlineStyle}>Lord Alex</h3>
                    </a>
                </div>
            </div>
            <div className="card-footer ">
                <a href="#0" className="btn btn-success" style={btnStyle}>Send buy Request</a>
            </div>

        </div>
    );
};
const btnStyle={
    width:'100%',
    textAlign:'center'
};
const inlineStyle={
    display:'inline',
    marginLeft:'4px',
    position:'relative',
    top:'5px'

};
export default CardPerson;
