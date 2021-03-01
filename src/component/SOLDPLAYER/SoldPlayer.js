import React from 'react';
import './SoldPlayer.css'
const SoldPlayer = (props) => {
    const buyedPlayer = props.soldData
    let totalSalary = buyedPlayer.reduce((sum, man) => sum + man.salary, 0)
    return (
        <div className="div-container">
            <div className="sold-container">
                <h1>Sold Player</h1>
                <h4>Squad Member: {buyedPlayer.length}</h4>
                <div className="name-salary">
                    <div className="name-div">
                        <h3>Name</h3>
                            {
                                buyedPlayer.map(name => <li className="player-name">{name.name}--</li>)
                            }
                    </div>
                    <div className="salary-div">
                        <h3>Salary</h3>
                            {
                                buyedPlayer.map(name => <li className="player-salary">${name.salary}m</li>)
                            }
                    </div>
                </div>
                <h3>Total Budget: {totalSalary}</h3>
            </div>

        </div>
    );
};

export default SoldPlayer;