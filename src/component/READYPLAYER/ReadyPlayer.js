import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ReadPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faFlag, faUser } from '@fortawesome/free-solid-svg-icons'

const ReadyPlayer = (props) => {
    const { name, img, salary, country, club } = props.readyPlayer;
    return (
        <div className="container">
            
            <div className="row">
                <div className="player-div">
                    <img src={img} alt="" className="img-fluid player-img" />
                    <h3>{name}</h3>
                    <p><FontAwesomeIcon icon={faFlag} />{country}</p>
                    <p>Club: {club}</p>
                    <p>${salary}m</p>
                    <button onClick={() => props.buyPlayer(props.readyPlayer)} className="btn btn-success"><FontAwesomeIcon icon={faPlus} /> ADD</button>
                </div>
            </div>
        </div>
    );
};

export default ReadyPlayer;