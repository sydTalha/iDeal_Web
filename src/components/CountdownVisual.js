import React from 'react';
import Countdown from 'react-countdown-now';

const CountdownVisual = () => {

    const Completionist = () => (
        <div>

        </div>
    );
    const renderer = ({ days,hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return (<Completionist />);
        } else {
            // Render a countdown
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col' style={styleBox}>
                            <p>{days}</p>
                            <p>Days</p>
                        </div>
                        <div className='col' style={styleBox}>
                            <p>{hours}</p>
                            <p>Hrs</p>
                        </div>
                        <div className='col' style={styleBox}>
                            <p>{minutes}</p>
                            <p>Min</p>
                        </div>
                        <div className='col' style={styleBox}>
                            <p>{seconds}</p>
                            <p>Sec</p>
                        </div>
                    </div>
                </div>
                //<span>{days}:{hours}:{minutes}:{seconds}</span>
            );
        }
    };
    return(
        <div>
            <Countdown
                date={Date.now() + 1000000000}
                renderer={renderer}
            />
        </div>
    );
};

const styleBox={
    width: '65px',
    marginLeft: '3px',
    color: '#FFF',
    textAlign: 'center',
    borderRadius: '8px',
    fontWeight: 'Bold',
    backgroundColor: 'rgb(171, 171, 171,0.8)'
};

export default CountdownVisual;