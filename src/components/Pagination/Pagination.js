import React from 'react'

const Pagination =()=>{
    return(
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#" style={styleCurrent}>1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
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