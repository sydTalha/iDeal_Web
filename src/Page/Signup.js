import React from 'react';

const Signup=()=>{
    return (
        <div className='container'>
            <form id="form" action="http://localhost:8181/webProject/action.php" method="POST" enctype="multipart/form-data">
                <div className="text-center">
                    <div className="thumbnail">
                        <img src="http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png" alt="..."/>
                    </div>
                    <div className="fileinput-preview fileinput-exists thumbnail img-raised"/>
                    <div>
                        <input className="btn btn-raised btn-round btn-default btn-file" name="myProfile" type="file"/>
                        <a href="#pablo" className="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput">
                            <i className="fa fa-times"/> Remove</a>
                    </div>
                </div>
                <br/>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label style={labelStyle} htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" id="fname" placeholder="First Name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label style={labelStyle} htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" id="lname" placeholder="Last Name"/>
                    </div>
                </div>
                <br/>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label style={labelStyle} htmlFor="uname">User Name</label>
                        <input type="text" className="form-control" id="uname" placeholder="User name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label style={labelStyle} htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label style={labelStyle} htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
                               data-toggle="popover" data-container="body" data-color="primary" data-placement="bottom"
                               data-content="Password must have atleast one number.
                               minimum length can be of 8 character"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label style={labelStyle} htmlFor="inputPassword4">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password"/>
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <label style={labelStyle} htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Address primary"/>
                </div>
                <br/>
                <div className="form-group">
                    <label style={labelStyle} htmlFor="contactNumber">Contact Number</label>
                    <input type="tel" className="form-control" id="contactNumber" pattern="[0-9]{4}[0-9]{7}"/>
                </div>
                <br/>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label style={labelStyle} htmlFor="inputState">Province</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Punjab</option>
                            <option>K.P.K</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label style={labelStyle} htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>

                    <div className="form-group col-md-2 ml-auto">
                        <label style={labelStyle} htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-success">Sign Up</button>
            </form>
        </div>
    );
};
const labelStyle={
    color:'#2E4053'
};
export default Signup;