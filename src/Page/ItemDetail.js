import React,{Component} from 'react';
import CardPerson from '../components/Card/CardPerson';
import CardItemInfo from "../components/Card/CardItemInfo";
class ItemDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            item:{}
        }
    }
    componentDidMount() {
        const url = new URL(window.location.href);
        const dataItem = url.searchParams.get("item");
        fetch('https://192.168.100.10/ideal_web/api/itemdetails.php', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                "itemid": dataItem,
            })
        })
            .then((response) => response.json())
            .then((res)=> {
                console.log(res.imgArr[0]);
                this.setState({
                    item:res
                })
            })
            .catch((e)=> {
                    console.log(e);
                }
            );
    }

    render()
        {
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col'>

                            <CardItemInfo title={this.state.item.name}
                                          price={this.state.item.price}
                                          arr={this.state.item.imgArr}/>
                        </div>
                        <div className='col-md-auto'>
                            <CardPerson name={new URL(window.location.href).searchParams.get("ownerName")}
                                        id={new URL(window.location.href).searchParams.get("owner")}
                                        title={this.state.item.name}
                            />
                        </div>
                    </div>
                    <h3>Description</h3>
                    <p className='col-sm-auto col-8'>
                        {
                       (this.state.item.desc)}

                    </p>
                </div>
        );

    }
}
export default ItemDetail;