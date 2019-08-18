import React, {Component} from 'react';
import DropdownCategory from "../Dropdown/DropdownCategory";

class ItemForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            item:{
                name:'',
                price:'',
                category:'',
                imgArr:[],
                desc:'',
                featureTime:0,
                userid:sessionStorage.getItem("id"),
                province: sessionStorage.getItem("province")
            }

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCard = this.handleChangeCard.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const item=this.state.item;
        if(item.name==="" ||item.price===""||item.category===""||item.imgArr.length===0||item.desc===""){

            console.log("working");
        }
        else {
            fetch('https://192.168.100.10/ideal_web/api/additem.php', {
                method: 'post',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(item)
            });
            const link=new URL(window.location.href);
            window.location.replace(link);
        }
    }

    handleChangeCategory(e){
        e.preventDefault();
        let value = e.target.innerHTML;
        this.setState(
            prevState => ({
                item: {
                    ...prevState.item,
                    category: value
                }
            }),
        );
    }
    handleChangeCard(e){
        const id=e.target.id;
        if(id==="1"){
            const today = new Date();
            const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
            this.setState(
                prevState => ({
                    item: {
                        ...prevState.item,
                        featureTime: nextWeek.getTime()
                    }
                }),
            );
        }
        if(id==="2"){
            const today = new Date();
            const nextMonth = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
            this.setState(
                prevState => ({
                    item: {
                        ...prevState.item,
                        featureTime: nextMonth.getTime()
                    }
                }),
            );
        }
        if(id==="3"){
            const today = new Date();
            const nextYear = new Date(today.getFullYear() +1, today.getMonth(), today.getDate());
            this.setState(
                prevState => ({
                    item: {
                        ...prevState.item,
                        featureTime: nextYear.getTime()
                    }
                }),
            );
        }
    }

    handleChange(event){
        let value = event.target.value;
        let id = event.target.id;
        this.setState(
            prevState => ({
                item: {
                    ...prevState.item,
                    [id]: value
                }
            }),
        );
    }
    handleChangeImage(event){
        let arr=[];
        Array.from(event.target.files).map(function (data) {
            // arr.push(data["name"]);
            arr.push("https://media.istockphoto.com/photos/medical-vital-signs-monitor-in-a-hospital-picture-id901063844?k=6&m=901063844&s=612x612&w=0&h=JsITw0UnNwPGEfUUij2wUQm6vEhBfg4XmGR0Jpt7bdA=");
        });
        this.setState(
            prevState => ({
                item: {
                    ...prevState.item,
                    imgArr: arr
                }
            }),
        );
    }

    render() {
        return(
            <div>
                <form id="form" method="POST" encType="multipart/form-data">

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="name">Name</label>
                            <input type="text" className="form-control" onChange={this.handleChange} id="name" placeholder="Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label style={labelStyle} htmlFor="price">Price</label>
                            <input type="text" className="form-control" onChange={this.handleChange} id="price"
                                   placeholder="Price" pattern="\d*"/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="desc">Description</label>
                        <input type="text" className="form-control" onChange={this.handleChange} id="desc" placeholder="Description"/>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <a className="btn nav-link btn-default text-white" id="dropDownCategory"
                               data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                <b>Category</b>
                            </a>
                            <DropdownCategory func={this.handleChangeCategory}/>
                        </div>
                            <div>
                                <input className="btn btn-default btn-file"
                                       name="images[]" type="file" accept="image/*"
                                       placeholder="Multiple Files" onChange={this.handleChangeImage}
                                       id='imgArr' multiple/>

                        </div>
                        <br/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <div className="row">
                                    <div className="row">
                                        <div className="col-auto" style={cardStyle} id="1" onClick={this.handleChangeCard}>
                                        <div className="mr-auto" id="1">
                                            <div className="card card-pricing bg-primary" id="1">
                                                <div className="card-body " id="1">
                                                    <h3 className="card-title" id="1">RS/. 500</h3>
                                                    <p className="card-description" id="1">
                                                        Add will remain featured for 1 week
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="row">
                                        <div className="col-auto" style={cardStyle}  onClick={this.handleChangeCard}>
                                        <div className="mr-auto" id="2">
                                            <div className="card card-pricing bg-warning" id="2">
                                                <div className="card-body " id="2">
                                                    <h3 className="card-title" id="2">RS/. 5000</h3>
                                                    <p className="card-description" id="2">
                                                        Add will remain featured for 6 months
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="row" >
                                        <div className="mr-auto" style={cardStyle} id="3" onClick={this.handleChangeCard}>
                                            <div className="card card-pricing bg-danger" id="3">
                                                <div className="card-body " id="3">
                                                    <h3 className="card-title" id="3">RS/. 10,000</h3>
                                                    <p className="card-description" id="3">
                                                        Add will remain featured for 1 year
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
const labelStyle={
    color:'#2E4053'
};
const cardStyle={
    marginLeft:'2px',
    marginRight:'2px',
};
export default (ItemForm)