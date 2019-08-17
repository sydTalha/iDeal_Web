import React, {Component} from 'react';
import DropdownCategory from "../Dropdown/DropdownCategory";
import DropdownLocation from "../Dropdown/DropdownLocation";
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            location:'',
            category:'',
            name:'',
        };
        Search.handleChangeCategory=Search.handleChangeCategory.bind(this);
        Search.handleChangeLocation=Search.handleChangeLocation.bind(this);
        Search.handleChangeName=Search.handleChangeName.bind(this);
        Search.handleSearch=Search.handleSearch.bind(this);
    }
    static handleChangeCategory(e){
        let value = e.target.innerHTML;
        this.setState({
            category:value
        })
    }
    static handleChangeName(e){
        let value = e.target.value;
        this.setState({
            name:value
        })
    }
    static handleChangeLocation(e){
        let value = e.target.innerHTML;
        console.log(value);
        this.setState({
            location:value
        })
    }
    static handleSearch(){

        window.location.replace(`/items?name=${this.state.name}&&`+
        `location=${this.state.location}&&category=${this.state.category}`);
    }
    render() {
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
                        <DropdownCategory func={Search.handleChangeCategory}/>
                    </div>
                    <div className='col-auto col-sm-auto'>
                        <input type="text" className='btn btn-outline-success text-success' style={styleInput}
                               placeholder="Search by Name" onChange={Search.handleChangeName}/>
                    </div>
                    <div className='col'>
                        <a className="nav-link btn btn-outline-success text-success" id="dropDownLocation"
                           data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            <i className="material-icons">
                                location_on
                            </i>
                            <b>Location  </b>
                        </a>
                        <DropdownLocation func={Search.handleChangeLocation}/>
                    </div>
                </div>
                <div style={styleButton}>
                    <button className='btn btn-success' onClick={Search.handleSearch}>Search</button>
                </div>
            </div>
        )
    }
};
const styleContainer={
    paddingTop: '15px',
    paddingBottom:'15px'
};
const styleInput={
    width:'100%'
};
const styleButton={
    textAlign:'center',
    marginTop:'15px'
};
export default Search;