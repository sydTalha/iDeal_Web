import React from 'react';
import './loaderStyle.css';
const Loader =()=>{
    return(
        <div>
            <svg width="108px" height="128px" viewBox="0 0 54 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xlink="http://www.w3.org/1999/xlink" sketch="http://www.bohemiancoding.com/sketch/ns">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none"  type="MSPage">
                    <path className="beat-loader" d="M0.5,38.5 L16,38.5 L19,25.5 L24.5,57.5 L31.5,7.5 L37.5,46.5 L43,38.5 L53.5,38.5"
                          id="Path-2" stroke-width="2" type="MSShapeGroup"></path>
                </g>
            </svg>
        </div>
    );
};

export default Loader