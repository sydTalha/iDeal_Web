import React,{ Component } from 'react';
import CardShop from '../components/Card/CardShop';


class Items extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    componentDidMount() {
        fetch('https://192.168.100.10/ideal_web/api/allusers.php', {
            method: 'get',
        })
            .then((response) => response.json())
            .then((res)=> {
                this.setState({
                    users:res
                })
            })
            .catch((e)=> {
                    console.log(e);
                }
            );
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {
                        this.state.users.map(function (data) {
                            return(
                                <div className='col'>
                                    <CardShop
                                        name={data.username}
                                        pic={data.profilePic}
                                        id={data._id}
                                    />
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        );
    }
}

export default (Items);