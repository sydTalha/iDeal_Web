import React from 'react';
const Alert =(props)=>{
    return(
        <div>
            <div className="alert alert-danger">
                <div className="container">
                    <div className="alert-icon">
                        <i className="material-icons">error_outline</i>
                    </div>
                    {props.message}
                </div>
            </div>
        </div>
    );
};
export default Alert;