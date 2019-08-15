import React,{Component} from 'react';
import CardPerson from '../components/Card/CardPerson';
import CardItemInfo from "../components/Card/CardItemInfo";
class ItemDetail extends Component{
        render()
        {
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <CardItemInfo/>
                        </div>
                        <div className='col-md-auto'>
                            <CardPerson/>
                        </div>
                    </div>
                    <h3>Description</h3>
                    <p className='col-sm-auto col-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                    </p>
                </div>
        );

    }
}
export default ItemDetail;