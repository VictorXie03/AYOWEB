import React from 'react';

const ChefsPicksCard = (props) => {
    return (
        <div className="ChefsPicksCard">
            <div className="CardContainer">
                <div><img src={props.img} alt="img" style={{ width: '60%', height: '400', objectFit: 'cover' }} /></div>
                <div className="CardContent">
                    <h3 className="chef-title">{props.title}</h3>
                    <p className="chef-description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ChefsPicksCard;
