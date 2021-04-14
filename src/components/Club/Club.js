import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import playerData from '../data/data.json';
import Player from '../Player/Player';
import './Club.css';
const Club = (props) => {
    // console.log(playerData);
    const first15 = playerData.slice(0, 15);
    const [players, setPlayers] = useState(first15);
    const [cart, setCart] = useState([]);
    const handleAddPlayer = (player) => {
        console.log('added player', player);
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className="club-container">
            <div className="player-container">

                {
                    players.map(player => <Player
                        handleAddPlayer={handleAddPlayer}
                        player={player}>

                    </Player>)
                }

            </div>
            <div >
                {/* <h2>Dashboard FC Barcelona Club</h2>
                 <h3>Players added: {cart.length} </h3>
                <h3>Players added: {cart.length} </h3>
                <h4>new player name: </h4> */}
                <Cart cart={cart} ></Cart>
            </div>

        </div>

    );
};

export default Club;