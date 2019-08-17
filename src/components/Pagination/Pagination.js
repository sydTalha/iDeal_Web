import React from 'react'

const Pagination =(props)=>{
    function getNumber(e){
        props.fun(e.target.id);
    }
    return(
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item"  onClick={getNumber}>
                    <a className="page-link" id="0">1</a>
                </li>
                <li className="page-item"  onClick={getNumber}>
                    <a className="page-link" id="1">2</a>
                </li>
                <li className="page-item" id="1" onClick={getNumber}>
                    <a className="page-link" id="2">3</a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
};
const styleCurrent={
    backgroundColor:'#47a44b',
    borderRadius:'25px',
    color:'white'
};
export default Pagination;