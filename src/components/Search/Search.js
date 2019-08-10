import React from 'react';
import DropdownCategory from "../Dropdown/DropdownCategory";
import DropdownLocation from "../Dropdown/DropdownLocation";
const Search =()=>{
    return(
        <div className='container bg-white rounded' style={styleContainer}>
            <div className='row'>
                <div className='col'>
                    <a className="nav-link btn btn-outline-success text-success" id="dropDownCategory"
                       data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        <i className="material-icons">
                            storage
                        </i>
                        <b>Category</b>
                    </a>
                    <DropdownCategory/>
                </div>
                <div className='col-auto col-sm-auto'>
                    <input type="text" className='btn btn-outline-success text-success' style={styleInput}
                           placeholder="Search by Name"/>
                </div>
                <div className='col'>
                    <a className="nav-link btn btn-outline-success text-success" id="dropDownLocation"
                       data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        <i className="material-icons">
                            location_on
                        </i>
                        <b>Location  </b>
                    </a>
                    <DropdownLocation/>
                </div>
            </div>
            <div style={styleButton}>
                <button className='btn btn-success'>Search</button>
            </div>
        </div>
    )
};
const styleContainer={
    paddingTop: '15px',
    paddingBottom:'15px'
};
const styleInput={
    width:'100%'
}
const styleButton={
    textAlign:'center',
    marginTop:'15px'
};
export default Search;