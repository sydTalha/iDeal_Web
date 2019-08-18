import React,{ Component } from 'react';
import ProfileMe from "../components/Profile/ProfileMe";
import ProfileOther from "../components/Profile/ProfileOther";

class PersonShop extends Component {
    constructor(props){
        super(props);
        this.state={
            user:'error'
        }
    }
    componentDidMount() {
        const url = new URL(window.location.href);
        const dataMe = url.searchParams.get("me");
        const dataId = url.searchParams.get("id");
        if(dataMe==="true"){
            this.setState({
                user:'me',
            })
        }
        else if(dataMe==="false" && dataId!==null){
            this.setState({
                user:'other',
            })
        }
        else{
            this.setState({
                user:'error',
            })
        }
    }

    render() {
        return (
                this.state.user==='error'?
                    (<h1>bad</h1>)
                    :
                    this.state.user==='me'?
                        (<ProfileMe/>)
                        :
                        (<ProfileOther/>)

        );
    }
}
export default (PersonShop);