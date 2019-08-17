import React from 'react';

const DropdownCategory=(props)=>{
    return(
      <div className='bg-white rounded dropdown-menu' aria-labelledby="dropDownCategory" style={style}>
          <div className='container'>
              <div className='row align-content-between'>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Anesthesiology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Cardiology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Dermatology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>EMT</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Endoscopy</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Gastroenterology</button>
                  </div>
              </div>
              <hr/>
              <div className='row align-content-between'>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>General Practice</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>General Surgery</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>OB/GYN</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Ophthalmology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Oral - Dental</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Pain Management</button>
                  </div>
              </div>
              <hr/>
              <div className='row align-content-between'>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Pediatrics</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Plastic Surgery</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Podiatry</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Radiology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Urology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link" onClick={props.func}>Veterinary</button>
                  </div>
              </div>
          </div>
      </div>
    );
};

const style={
    width:'100%'
};
export default DropdownCategory;