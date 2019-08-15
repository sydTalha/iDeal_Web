import React from 'react';

const DropdownCategory=()=>{

    return(
      <div className='bg-white rounded dropdown-menu' aria-labelledby="dropDownCategory" style={style}>
          <div className='container'>
              <div className='row align-content-between'>
                  <div className='col'>
                      <button className="btn btn-link">Anesthesiology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Cardiology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Dermatology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">EMT</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Endoscopy</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Gastroenterology</button>
                  </div>
              </div>
              <hr/>
              <div className='row align-content-between'>
                  <div className='col'>
                      <button className="btn btn-link">General Practice</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">General Surgery</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">OB/GYN</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Ophthalmology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Oral - Dental</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Pain Management</button>
                  </div>
              </div>
              <hr/>
              <div className='row align-content-between'>
                  <div className='col'>
                      <button className="btn btn-link">Pediatrics</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Plastic Surgery</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Podiatry</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Radiology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Urology</button>
                  </div>
                  <div className='col'>
                      <button className="btn btn-link">Veterinary</button>
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