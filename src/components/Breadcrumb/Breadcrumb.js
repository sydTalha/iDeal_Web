import React from 'react';

const Breadcrumb=()=>{
    return(
        <div>
            <nav aria-label="breadcrumb"  role="navigation">
                <ol className="breadcrumb bg-rose " style={styleBread}>
                    <li className="breadcrumb-item " aria-current="page"><a className='text-success' href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page"><a className='text-dark'href="/items">Items</a></li>
                </ol>
            </nav>
        </div>
    );
};
const styleBread={
    paddingLeft:'9%'
};
export default Breadcrumb;