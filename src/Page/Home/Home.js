import React,{ Component } from 'react';
import Map from '../../components/Map/Map';
import './homeStyle.css';
import background from '../../graphics/waves.png';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state={
            tagLineENGLISH:[
                "Discover the world of medical equipments",
                "It's the equipments you've always dreamed of",
                "The dependable source for medical equipments",
                "The wise choice for medical equipment aficionados",
                "Let's talk medical equipment"
            ],
            tagLineURDU:[
                "طبی سازوسامان کی دنیا دریافت کریں۔",
                "یہ وہ طبی سازوسامان ہے جس کا آپ نے ہمیشہ خواب دیکھا ہے۔",
                "طبی سازوسامان کا انحصار کرنے والا ذریعہ۔",
                "طبی سازوسامان کے لئے عقلمند انتخاب۔",
                "آئیے میڈیکل آلات کی بات کریں۔",
            ],
            appDataENGLISH:[
                "A place where Buyers meet Sellers",
                "Find shop",
                "open shop",
                "connect now !"
            ],
            appDataURDU:[
                "ایک ایسی جگہ جہاں خریدار فروخت کنندگان سے ملتے ہیں۔",
                "دکان تلاش کریں",
                "کاروبار کی جگہ",
                "ابھی جڑیں!"
            ]

        }
    }

    render() {
        const links={
          shops:'/shops',
          signUp:'/signup'
        };
        return (
            <div>
                <section className='section-div'>
                    <div className='wrapper'>
                        <div className="squares square1"/>
                        <div className="squares square3"/>
                        <div className="squares square5"/>
                        <div className="squares square6"/>
                        <div className="squares square7"/>
                        <div className="container">
                            <div className="row">
                                <div className='col'>
                                    <h1 className='text-dark'>{this.state.tagLineURDU[Math.floor(Math.random() * 5)]}</h1>
                                    <a  role='button' className="btn btn-success" href={links['shops']}>{this.state.appDataURDU[1]}</a>
                                    <br/>
                                    <a  className="btn btn-outline-success text-dark" href={links['signUp']}>{this.state.appDataURDU[2]}</a>
                                </div>
                                <div className='col-md-auto'>
                                    <Map/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-div'>
                    <div className='container'>
                        <h1 className='text-center font-weight-bold'>{this.state.appDataURDU[0]}
                            <br/>
                        <a className='btn btn-success btn-round btn-link' data-toggle="modal" data-target="#loginModal">
                            {this.state.appDataURDU[3]}
                        </a>
                        </h1>
                        <img src={background} style={backgroundStyle} alt=''/>
                        <div className='row'>
                            <div className="col-6 image-illustrations position-left">
                                <div className="send"/>
                            </div>
                            <div className="col-6 image-illustrations position-right">
                                <div className="delivery"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
const backgroundStyle={
    position:'absolute',
    left:'10%',
    height:'70%',
    width:'70%'
};
export default (Home);