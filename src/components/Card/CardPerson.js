import React from 'react'
const CardPerson=(props)=>{
    function handleOnclick() {
        window.location.replace(`/personshop?me=false&&id=${props.id}`);
    }
    function handleEmail(){
        fetch('https://192.168.100.10/ideal_web/api/email.php', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                "ownerid": props.id,
                "buyername": sessionStorage.getItem("userName"),
                "buyeremail": sessionStorage.getItem("email"),
                "buyercontact": sessionStorage.getItem("contactNumber"),
                "itemname": props.title
            })
        })
            .then((response) => response.json())
            .catch((e)=> {
                    console.log(e);
                }
            );
    }
    return(
        <div className="card">
            <div className="card-body ">
                <div className="author">
                    <a onClick={handleOnclick}>
                        <h3 style={inlineStyle}>{props.name}</h3>
                    </a>
                </div>
            </div>
            <div className="card-footer ">
                <a onClick={handleEmail} className="btn btn-success text-white" style={btnStyle}>Send buy Request</a>
            </div>

        </div>
    );
};
const btnStyle={
    width:'100%',
    textAlign:'center'
};
const inlineStyle={
    display:'inline',
    marginLeft:'4px',
    position:'relative',
    top:'5px'

};
export default CardPerson;
