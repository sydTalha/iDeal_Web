import React from 'react';

const DropdownLocation=()=>{
    return(
        <div className='bg-white rounded' className="dropdown-menu" aria-labelledby="dropDownLocation" style={style}>
            <div className='container'>
                <div className='row align-content-between'>
                    <div className='col'>
                        <button className="btn btn-link">Balochistan</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link">Azad Kashmir</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link">F.C.T</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link">Northern Areas</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link">F.A.T.A</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link">Punjab</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link">Sindh</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-link">khyber Pakhtunkhwa</button>
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