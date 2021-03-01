import React, { useEffect, useState } from 'react';
import squadList from '../../PlayerAPI/SquadAPI';
import ReadyPlayer from '../READYPLAYER/ReadyPlayer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ShowPlayer.css';
import SoldPlayer from '../SOLDPLAYER/SoldPlayer';
const ShowPlayer = () => {
    const [players, setPlayer] = useState([]);
    const [soldPlayer, setSoldPlayer] = useState([]);
    useEffect(() => {
        setPlayer(squadList);
    }, []);
    const buyPlayer = (man) => {
        const newPlayer = [...soldPlayer, man]
        setSoldPlayer(newPlayer);
    }
    return (
        <div className="container">
            <div className="player-container">
                <div className=" ready-player-container">
                    {
                        players.map(player => <ReadyPlayer 
                            buyPlayer = {buyPlayer}
                            readyPlayer={player} 
                            key={player.id}></ReadyPlayer>)
                    }
                </div>
                <div className="sold-player">
                    <SoldPlayer soldData = {soldPlayer}></SoldPlayer>
                </div>
            </div>
        </div>
    );
};

export default ShowPlayer;