import React, {Component} from 'react';

class Signup extends Component{

    constructor(props){
        super(props);

        this.state={
            signUp: {
                fname: '',
                lname: '',
                uname: '',
                inputEmail: '',
                inputPassword: '',
                inputConfirmPassword: '',
                inputAddress: '',
                contactNumber: '',
                inputState: '',
                inputCity: '',
                inputZip: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount() {
        const url = new URL(window.location.href);
        const dataSocial = url.searchParams.get("social");
        if(dataSocial==='facebook' || dataSocial==='google'){
            const dataUname = url.searchParams.get("username");
            const dataEmail = url.searchParams.get("email");
            this.setState({
                uname:dataUname,
                inputEmail:dataEmail
            });
        }
    }

    handleChange(event){
        let value = event.target.value;
        let id = event.target.id;
        this.setState(
            prevState => ({
                signUp: {
                    ...prevState.signUp,
                    [id]: value
                }
            }),
        );
    }
    handleFormSubmit(event){
        event.preventDefault();
        let user = this.state.signUp;

        if(user.fname === "" || user.lname === "" || user.inputEmail === "" || user.inputPassword === "" || user.inputConfirmPassword === ""
        || user.inputAddress === "" || user.contactNumber === "" || user.inputCity === "" || user.inputState === "" || user.inputZip === ""
        || user.uname === "" ){

            console.log("fields empty");

        }
        else{

            //sign up user
            if(user.inputPassword === user.inputConfirmPassword){
                console.log("sending request");
                fetch('http://localhost:8181/ideal_web/api/script.php?action=signup',{
                    method: 'post',
                    headers: {'Content-type': 'application/json'},
                    credentials: 'same-origin'  ,
                    body: JSON.stringify(user)
                }).then((response)=>{
                   console.log(response.json());
                });
            }
            else{
                console.log("passwords dont match");
            }

        }
    }

    render(){

        return (
            <div className='container'>
                <form id="form" method="POST" encType="multipart/form-data">
                    <div className="text-center">
                        <div className="thumbnail">
                            <img src="http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png" alt="..."/>
                        </div>
                        <div className="fileinput-preview fileinput-exists thumbnail img-raised"/>
                        <div>
                            <input className="btn btn-raised btn-round btn-default btn-file" name="myProfile" type="file" accept="image/*"/>
                            <a href="#pablo" className="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput">
                                <i className="fa fa-times"/> Remove</a>
                        </div>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="fname">First Name</label>
                            <input type="text" className="form-control" onChange={this.handleChange} id="fname" placeholder="First Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="lname">Last Name</label>
                            <input type="text" className="form-control" onChange={this.handleChange} id="lname" placeholder="Last Name"/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="uname">User Name</label>
                            <input type="text" className="form-control" id="uname"
                                   onChange={this.handleChange} placeholder="User name"
                                   value={this.state.signUp["uname"]}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control"
                                   id="inputEmail" onChange={this.handleChange} placeholder="Email"
                                   value={this.state.signUp["email"]}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword" onChange={this.handleChange} placeholder="Password"
                                   data-toggle="popover" data-container="body" data-color="primary" data-placement="bottom"
                                   data-content="Password must have atleast one number.
                                   minimum length can be of 8 character"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="inputPassword4">Confirm Password</label>
                            <input type="password" className="form-control" onChange={this.handleChange} id="inputConfirmPassword" placeholder="Confirm Password"/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" onChange={this.handleChange} id="inputAddress" placeholder="Address primary"/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="contactNumber">Contact Number</label>
                        <input type="tel" className="form-control" onChange={this.handleChange} id="contactNumber" pattern="[0-9]{4}[0-9]{7}"/>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label style={labelStyle} htmlFor="inputState">Province</label>
                            <select id="inputState" onChange={this.handleChange} className="form-control">
                                <option selected>Choose...</option>
                                <option>Punjab</option>
                                <option>K.P.K</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="inputCity">City</label>
                            <input type="text" onChange={this.handleChange} className="form-control" id="inputCity"/>
                        </div>

                        <div className="form-group col-md-2 ml-auto">
                            <label style={labelStyle} htmlFor="inputZip">Zip</label>
                            <input type="text" onChange={this.handleChange} className="form-control" id="inputZip"/>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-success" onClick={this.handleFormSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
}




const labelStyle={
    color:'#2E4053'
};
export default Signup;