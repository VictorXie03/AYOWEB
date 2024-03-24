import React from 'react';

const ChefsPicksCard = (props) => {
    return (
        <div className="ChefsPicksCard">
            <div className="CardContainer">
                <div><img src={props.img} alt="img" style={{ width: '100%', height: '16vw', objectFit: 'cover' }} /></div>
                <div className="CardContent">
                    <h3 className="chef-title">{props.title}</h3>
                    <p className="chef-description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ChefsPicksCard;
