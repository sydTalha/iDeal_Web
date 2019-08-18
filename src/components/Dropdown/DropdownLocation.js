import React from 'react';

const DropdownLocation=(props)=>{
    return(
        <div className="bg-white rounded dropdown-menu" aria-labelledby="dropDownLocation" style={style}>
            <div className='container'>
                <div className='row align-content-between'>
                    <div className='col'>
                        <button className="btn btn-link" onClick={props.func}>Balochistan</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link" onClick={props.func}>Azad Kashmir</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link" onClick={props.func}>F.C.T</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link" onClick={props.func}>Northern Areas</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link" onClick={props.func}>F.A.T.A</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link" onClick={props.func}>Punjab</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link" onClick={props.func}>Sindh</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link" onClick={props.func}>khyber Pakhtunkhwa</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

const style={
    width:'100%'
};
export default DropdownLocation;