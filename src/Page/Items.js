import React,{ Component } from 'react';
import CardItem from '../components/Card/CardItem';
import Search from "../components/Search/Search";
import empty from "../graphics/empty.svg";
import Pagination from "../components/Pagination/Pagination";
import {User} from "../Model/User";

class Items extends Component {

    constructor(props) {
        super(props);
        this.state={
            number:0,
            items:[],
        };
        this.getNumberData=this.getNumberData.bind(this);
    }
    getNumberData(num){
        console.log(num)
        // this.setState({
        //     number:num
        // })
    }
    componentDidMount() {
        const url = new URL(window.location.href);
        const dataLocation = url.searchParams.get("location");
        const dataCategory = url.searchParams.get("category");
        const dataName = url.searchParams.get("name");
        if(dataCategory!==null || dataLocation!==null || dataName!==null){

        }
        else if(sessionStorage.getItem("location")!==null){
            fetch('https://localhost/webProject/pagination.php', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    "location": sessionStorage.getItem("location"),
                    "number": this.state.number,
                })
            })
                .then((response) => response.json())
                .then((res)=> {
                    this.setState({
                        items:res["items"]
                    });
                })
                .catch((e)=> {
                        console.log(e);
                    }
                );
        }
    }
    render() {
        const time=1595829650349;
        return (
            <div>
                <nav aria-label="breadcrumb"  role="navigation">
                    <ol className="breadcrumb bg-rose "
                        style={{
                            paddingLeft:'9%'
                        }}>
                        <li className="breadcrumb-item " aria-current="page"><a className='text-success' href="/home">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><a className='text-dark' href="/items">Items</a></li>
                    </ol>
                </nav>
                <Search/>
                {
                    this.state.items.length === 0 ? (
                        <div>
                            <img src={empty}
                                 style={{
                                     height:'40%',
                                     width:'40%',
                                     marginTop:'50px',
                                     marginBottom:'50px',
                                     marginLeft:'30%'

                                 }}
                                 alt="no item found"/>
                        </div>

                        )

                        : (
                            <div>
                                <div className='container'>
                                    <div className='row'>
                                {
                                    this.state.items.map(function (data) {
                                        return(
                                        <div className='col'>
                                            <CardItem
                                                title={data["Item_Name"]}
                                                image={data["Image"]}
                                                time={data["Featured"]}
                                                ownerName={data["Owner_Name"]}
                                                ownerPicture={data["Owner_Picture"]}
                                            />
                                        </div>
                                        )
                                        
                                    })
                                }
                                    </div>
                                </div>
                                <Pagination fun={this.getNumberData}/>
                            </div>
                        )
                }
            </div>
        );
    }
}

export default (Items);