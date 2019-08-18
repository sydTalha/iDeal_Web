import React,{Component} from 'react';
import CountdownVisual from '../CountdownVisual';

class CardItem extends Component{

    constructor(props){
        super(props);
        this.state={
            id:props.id,
            title:props.title,
            image:props.image,
            time:props.timeCount,
            name:props.ownerName,
            picture:props.ownerPicture,
            ownerId:props.ownerId,
            featured: false,
        };
        this.checkFeatured = this.checkFeatured.bind(this);
        this.forward=this.forward.bind(this);
    };
    forward(){
        window.location.replace(`/detail?item=${this.state.id}&&owner=${this.state.ownerId}&&ownerName=${this.state.name}`);
    }
    componentDidMount() {
        this.checkFeatured();
        this.setState({
            url:this.props.url
        })

    }

    checkFeatured() {
        if(new Date().getTime() > this.state.time){
            this.setState({
                featured: false,
            });
        }
        else {
            this.setState({
                featured: true,
            });
        }
    }


    render() {
        return(
            <div className="card" style={styleCard}>
                <div className="card-background" >
                    <div className='bg-dark'>
                        {
                            this.state.time > (new Date().getTime()) ?
                                (<div>
                                    <span className="badge badge-pill badge-warning" style={styleBadge}>Featured</span>
                                    <div style={styleCountdown}>
                                        <CountdownVisual onComplete={this.checkFeatured} time={this.state.time}/>
                                    </div>
                                </div>)
                                :
                                (<div/>)
                        }

                        <img className='card-img-top'
                             src={this.state.image[0]}
                             alt='img'
                             style={{
                                 height:'200px',
                             }}
                        />
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <a onClick={this.forward}>{this.state.title}</a>
                    </h4>
                </div>
                <div className='card-footer'>
                    <div className="author">
                        <a>
                            <img
                                src={this.state.picture}
                                alt="..." className="avatar img-raised"/>
                            <span>{this.state.name}</span>
                        </a>
                    </div>
                    <div className="stats ml-auto">
                        <i className="material-icons">favorite</i>
                    </div>
                </div>
            </div>
        );
    }

}


const styleCard={
    width:'20rem'
};

const styleCountdown={
    position:'absolute',
    marginTop:'120px',
    marginLeft: '30px',
    marginRight: '20px',
    width: '80%'
};

const styleBadge={
    position:'absolute',
    marginTop:'5px',
    marginLeft:'5px'
};

export default CardItem;